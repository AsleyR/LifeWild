import { LifeWildType } from "@/app/libs/types/LifeWild.types"
import ArticleInformation from "./ArticleInformation"

const ArticleInformationContainer = ({ article }: { article: LifeWildType }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <ArticleInformation
                    article={{ title: "Vernacular Name", content: article.vernacularName }}
                    svgPath="/images/paw.svg"
                    options={{ "textSize": "text-xl", "justify": "center" }}
                />
                <ArticleInformation
                    article={{ title: "Binomial Name", content: article.binomialName }}
                    svgPath="/images/pencil.svg"
                    options={{ "textSize": "text-xl", "justify": "center" }}
                />
            </div>
        </div>
    )
}

export default ArticleInformationContainer