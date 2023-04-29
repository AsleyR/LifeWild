import { LifeWildType } from "@/app/libs/types/LifeWild.types"
import ArticleInformation from "./ArticleInformationContainer"
import ArticleInformationSection from "./ArticleInformation"
import ContentSeparator from "@/app/(component)/ContentSeparator"
import ArticleTableContainer from "../table/ArticleTableContainer"
import ArticleReferences from "../references/ArticleReferences"

const MobileArticleInformation = ({ article }: { article: LifeWildType }) => {
    return (
        <div className="flex flex-col md:hidden">
            <div className="flex flex-col gap-5">
                <ArticleTableContainer article={article} />
                <ArticleInformation article={article} />
                {article.otherNames[0] !== "" ? <ArticleInformationSection
                    article={{ title: "Other Names", content: article.otherNames }}
                    svgPath="/images/comment.svg"
                    options={{ "textSize": "text-xl", "justify": "center" }}
                /> : <></>}
            </div>
            <div className="block md:hidden">
                <ContentSeparator />
            </div>
            <div className="col-span-1 lg:col-span-2">
                <ArticleReferences
                    references={article.references}
                    svgPath="/images/cube.svg"
                    options={{ "collapsable": true, "textSize": "text-xl" }}
                />
            </div>
        </div>
    )
}

export default MobileArticleInformation