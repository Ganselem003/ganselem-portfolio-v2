interface SkillsProps { skills: string[] }

export default function Skills({ skills }: SkillsProps) {
    return (
        <div className="flex flex-wrap gap-2 mt-2">
            {skills.map(s => (
                <span key={s} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{s}</span>
            ))}
        </div>
    )
}