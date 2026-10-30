type PageProps = {
    title: string;
    description: string;
}

export default function AuthPageHeader({
    title,
    description
}: PageProps) {
    return (
        <header className="mt-6 space-y-2">
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            <p className="text-sm text-[#A8AEBF]">{description}</p>
        </header>
    )
}
