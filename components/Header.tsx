interface HeaderProps {
    name: string;
    title: string;
    photo: string;
}

export default function Header({ name, title, photo }: HeaderProps) {
    return (
        <header className="bg-white/70 backdrop-blur sticky top-0 z-40 shadow-sm">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
                <img src={photo} className="w-12 h-12 rounded-full object-cover" />
                <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-sm text-slate-600">{title}</div>
                </div>
            </div>
        </header>
    )
}