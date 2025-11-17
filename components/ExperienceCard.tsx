interface ExperienceProps {
    company: string;
    role: string;
    location: string;
    date: string;
    description: string;
}

export default function ExperienceCard({ company, role, location, date, description }: ExperienceProps) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-semibold">{company} - {role}</h3>
            <p className="text-sm text-gray-600">{location} | {date}</p>
            <p className="mt-2 text-gray-700 text-sm">{description}</p>
        </div>
    )
}