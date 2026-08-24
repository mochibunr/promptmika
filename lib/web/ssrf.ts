import { lookup } from "node:dns/promises";

const BLOCKED_HOSTS = new Set(["localhost", "metadata", "metadata.google.internal"]);
const BLOCKED_SUFFIXES = [".localhost", ".internal"];

export function isPrivateIp(ip: string): boolean {
  if (ip.includes(":")) {
    const v = ip.toLowerCase().replace(/%.*$/, "");
    if (v === "::" || v === "::1") return true;
    if (v.startsWith("fc") || v.startsWith("fd")) return true;
    if (v.startsWith("fe8") || v.startsWith("fe9") || v.startsWith("fea") || v.startsWith("feb")) return true;
    if (v.startsWith("::ffff:")) return isPrivateIp(v.slice(7));
    return false;
  }
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return true;
  const [a, b] = parts;
  if (a === 0) return true;
  if (a === 10) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  if (a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 192 && b === 0) return true;
  if (a === 198 && (b === 18 || b === 19)) return true;
  if (a >= 224) return true;
  return false;
}

function isBlockedHost(host: string): boolean {
  const h = host.toLowerCase();
  if (BLOCKED_HOSTS.has(h)) return true;
  return BLOCKED_SUFFIXES.some((s) => h.endsWith(s));
}

export async function assertSafeUrl(raw: string): Promise<URL> {
  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    throw new Error(`Invalid URL: ${raw}`);
  }
  if (u.protocol !== "http:" && u.protocol !== "https:") {
    throw new Error(`Unsupported protocol '${u.protocol}' (only http/https)`);
  }
  const host = u.hostname.replace(/^\[|\]$/g, "");
  if (isBlockedHost(host)) throw new Error(`Blocked: ${host}`);
  const isLiteral = /^[\d.]+$/.test(host) || host.includes(":");
  if (isLiteral) {
    if (isPrivateIp(host)) throw new Error(`Blocked: private/reserved IP ${host}`);
    return u;
  }
  let addrs: string[];
  try {
    addrs = (await lookup(host, { all: true })).map((a) => a.address);
  } catch {
    throw new Error(`DNS resolution failed for ${host}`);
  }
  if (addrs.length === 0) throw new Error(`DNS resolution failed for ${host}`);
  for (const addr of addrs) {
    if (isPrivateIp(addr)) throw new Error(`Blocked: ${host} resolves to private IP ${addr}`);
  }
  return u;
}
