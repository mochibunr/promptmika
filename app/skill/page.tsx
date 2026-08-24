import { DocReader } from "@/components/DocReader";

export default function SkillPage() {
  return (
    <DocReader
      file="SKILL.md"
      uri="skill://SKILL.md"
      href="/skill"
      title="Skill"
      note="the contract — silent refinement, build-test loops, and house rules every agent reads first ↴"
    />
  );
}
