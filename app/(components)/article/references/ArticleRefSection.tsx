"use client"

import { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { OpenReferencesContext } from "./ArticleReferences"
import { OpenReferencesType } from "@/app/libs/types/OpenReferencesContext.type"
import { ArticleSectionProps } from "../ArticleSection"
import SectionBox from "../../SectionBox"

const ArticleRefSection = ({ title, imagePath, options = { collapsable: false } }: ArticleSectionProps) => {
    const { openReferences, setOpenReferences } = useContext(OpenReferencesContext) as OpenReferencesType

    const justifyOption = options?.justify || "left"
    const textSize = options.textSize || "text-2xl"

    return (
        <div onClick={() => setOpenReferences(!openReferences)} tabIndex={0}
            className={`
        grid grid-cols-[min-content_auto_min-content] 
        ${justifyOption === "left" ? "justify-left" : "justify-center"}  
        items-center gap-3 p-3 drop-shadow-md align-middle bg-white 
        ${openReferences ? "rounded-t-lg" : "rounded-lg"} cursor-pointer hover:bg-gray-50
        `}>
            <SectionBox imagePath={imagePath} />
            <h1 className={`font-black ${textSize} text-[#414141]`}>{title}</h1>
            {
                options?.collapsable === true ?
                    <div className="cursor-pointer">
                        <FontAwesomeIcon icon={openReferences === true ? faChevronUp : faChevronDown} />
                    </div>
                    :
                    <></>
            }
        </div>
    )
}

export default ArticleRefSection