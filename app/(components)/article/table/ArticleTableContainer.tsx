import { LifeWildType } from "@/app/libs/types/LifeWild.types"
import ArticleSection from "../ArticleSection"
import ArticleTable from "./ArticleTable"

const ArticleTableContainer = ({ article }: { article: LifeWildType }) => {
    return (
        <div className="w-full md:w-[300px] md:col-end-4">
            <ArticleSection options={{ justify: "center", cojoined: true, textSize: "text-xl" }}
                title={'Classification'} imagePath="/images/clipboard.svg" />
            <ArticleTable classification={article.classification} />
        </div>
    )
}

export default ArticleTableContainer