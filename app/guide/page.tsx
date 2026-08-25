import { DocReader } from "@/components/DocReader";

export default function GuidePage() {
  return (
    <DocReader
      file="GUIDELINES.md"
      uri="guidelines://GUIDELINES.md"
      href="/guide"
      title="Guide"
      note="1000 UX / UI / motion rules — a selection system, not a checklist ↴"
    />
  );
}