"use client"

import { LifeWildType } from "@/app/libs/types/LifeWild.types"
import { OpenReferences } from "@/app/libs/types/OpenReferencesContext.type"
import { createContext, useState } from "react"
import { OpenReferencesType } from "@/app/libs/types/OpenReferencesContext.type"
import ArticleRefSection from "./ArticleRefSection"
import Link from "next/link"
import { ArticleSectionProps } from "../ArticleSection"

export const OpenReferencesContext = createContext<OpenReferencesType | null>(null)

const spliceLinkInContent = (content: string) => {
    const indexOfLink = content.indexOf('http')
    const referenceLink = content.slice(indexOfLink) // Find position of the first instance of the string 'http'
    let reference = content.split(referenceLink)[0]

    return {
        referenceLink: referenceLink,
        reference: reference
    }
}

const ArticleReferences = ({ references, svgPath, options = { "textSize": "text-2xl" } }: { references: LifeWildType['references'], svgPath: string, options?: ArticleSectionProps['options'] }) => {
    const parseRefs = (refs: string[]) => {
        return refs.map((ref, index: number) => {
            const refsLinks = spliceLinkInContent(ref)
            return (
                <p key={`${index}-p`} className="">
                    {refsLinks.reference}
                    <Link className="text-blue-500 hover:underline break-all" target={'_blank'} href={refsLinks.referenceLink}>
                        {refsLinks.referenceLink}
                    </Link>
                </p>
            )
        })
    }

    const content = parseRefs(references)
    const [openReferences, setOpenReferences] = useState<OpenReferences['openReferences']>(false)

    return (
        <div className="">
            <OpenReferencesContext.Provider value={{ openReferences, setOpenReferences }}>
                <ArticleRefSection
                    title={references.length !== 0 ? "References" : "Reference"}
                    imagePath={svgPath}
                    options={options} />
                {
                    openReferences ?
                        <div className="bg-[#f4f4f4] p-4 flex flex-col gap-2 rounded-b-lg drop-shadow-md">
                            {content}
                        </div> : null
                }
            </OpenReferencesContext.Provider>
        </div>
    )
}

export default ArticleReferences