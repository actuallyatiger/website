interface SkillProps {
  name: string;
}

export function Item({ name }: SkillProps) {
  return <span className="px-3 py-1 bg-white text-blue-800 text-sm rounded-full border border-blue-200">{name}</span>;
}
