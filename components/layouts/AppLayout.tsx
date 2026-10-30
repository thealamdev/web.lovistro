import { ReactNode } from "react"

type PageProps = {
    children: Readonly<ReactNode>
}

export default function AppLayout({
    children
}: PageProps) {
    return (
        <section className="container w-full max-w-md flex flex-col items-center justify-center">
            {children}
        </section>
    )
}
