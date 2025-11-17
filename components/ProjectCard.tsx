interface ProjectProps {
    title: string;
    desc: string;
    tech: string[];
    link?: string;
}

export default function ProjectCard({ title, desc, tech, link }: ProjectProps) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 border rounded-md">{t}</span>
                ))}
            </div>
            {link && (
                <div className="mt-3">
                    <a href={link} className="text-sm underline" target="_blank">View</a>
                </div>
            )}
        </div>
    )
}