import SectionBox from "../SectionBox";

export interface ArticleSectionProps {
    title: string;
    imagePath: string;
    options?: {
        justify?: "center" | "left";
        collapsable?: boolean
        cojoined?: boolean;
        textSize?: string
    }
}

const ArticleSection = ({ title, imagePath, options = { collapsable: false, cojoined: false, textSize: "text-2xl" } }: ArticleSectionProps) => {

    const justifyOption = options?.justify || "left"
    const textSize = options.textSize || "text-2xl"

    return (
        <div className={`
        grid grid-cols-[min-content_auto_min-content] ${justifyOption === "left" ? "justify-left" : "justify-center"} 
        items-center gap-3 p-3 drop-shadow-md align-middle bg-white ${options.cojoined ? "rounded-t-lg border-b-2" : "rounded-lg"}
        `}>
            <SectionBox imagePath={imagePath} />
            <h1 className={`font-black ${textSize} text-[#414141]`}>{title}</h1>
        </div>
    )
}

export default ArticleSection