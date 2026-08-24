import { DocReader } from "@/components/DocReader";

export default function DesignPage() {
  return (
    <DocReader
      file="DESIGN.md"
      uri="design://DESIGN.md"
      href="/design"
      title="Design"
      note="the house style — every UI decision on this site traces here ↴"
    />
  );
}
