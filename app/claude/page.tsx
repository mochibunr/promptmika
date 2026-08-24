import { DocReader } from "@/components/DocReader";

export default function ClaudePage() {
  return (
    <DocReader
      file="user-policy/CLAUDE.md"
      uri="claude://CLAUDE.md"
      href="/claude"
      title="Constitution"
      note="the full user policy — ~4,250 lines; agents read the condensed digest first and this only for [full] domains ↴"
    />
  );
}
