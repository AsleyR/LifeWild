const ResultCardDescription = ({ description }: { description: string }) => {
    const parseText = (text: string, max: number) => {
        if (text.length >= max) {
            return text.slice(0, max)
        }

        return text
    }

    return (
        <div className="w-full">
            <p key={`${description}-p`} className="hidden md:block text-sm text-elipsis overflow-hidden text-black/60">{parseText(description, 150)}</p>
            <p key={`${description}-p`} className="block md:hidden text-sm text-elipsis overflow-hidden text-black/60">{parseText(description, 50)}</p>
        </div>
    )
}

export default ResultCardDescription