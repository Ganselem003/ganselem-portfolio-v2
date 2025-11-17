interface EducationProps {
    school: string;
    degree: string;
    location: string;
    date: string;
    gpa?: string;
}

export default function EducationCard({ school, degree, location, date, gpa }: EducationProps) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="font-semibold">{school} - {degree}</h3>
            <p className="text-sm text-gray-600">{location} | {date}</p>
            {gpa && <p className="text-sm mt-1">GPA: {gpa}</p>}
        </div>
    )
}