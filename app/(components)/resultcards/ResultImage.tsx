import Image from "next/image"

const ResultImage = ({ image, alt }: { image: string, alt?: string }) => {
    const altText: string = alt || ""

    return (
        <div className="flex rounded-r-md justify-self-end max-w-full max-h-full w-[8rem]">
            <Image className="rounded-r-md h-full max-w-full w-full object-cover object-center"
                width={200} height={200} src={image} alt={altText} />
        </div>
    )
}

export default ResultImage