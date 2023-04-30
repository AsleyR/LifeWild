export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="absolute inset-0">
            {children}
        </section>
    )
}