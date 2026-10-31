type PageProps = {
    title: string;
}
export default function PageHeader({
    title
}: PageProps) {
    return (
        <h3 className="text-2xl font-bold leading-6 text-foreground">{title}</h3>
    )
}
