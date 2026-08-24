import { DocReader } from "@/components/DocReader";

export default function ClaudeDigestPage() {
  return (
    <DocReader
      file="user-policy/CLAUDE.digest.md"
      uri="claude://CLAUDE.digest.md"
      href="/claude/digest"
      title="Digest"
      note="the condensed, binding first-run policy — every rule distilled, none of the depth lost by reference ↴"
    />
  );
}
