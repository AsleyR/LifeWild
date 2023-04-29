import ContentSeparator from "@/app/(component)/ContentSeparator"
import { LifeWildType } from "@/app/libs/types/LifeWild.types"
import ArticleReferences from "../../(component)/article/references/ArticleReferences"
import ArticleDescription from "../../(component)/article/ArticleDescription"
import ArticleInformation from "../../(component)/article/information/ArticleInformation"
import Footer from "@/app/(component)/Footer"
import getLifeWildById from "@/app/actions/getLifeWildById"
import ArticleInformationContainer from "@/app/(component)/article/information/ArticleInformationContainer"
import ArticleTableContainer from "@/app/(component)/article/table/ArticleTableContainer"
import ArticleImage from "@/app/(component)/article/ArticleImage"
import MobileArticleInformation from "@/app/(component)/article/information/MobileArticleInformation"

type MetadataProps = {
    params: { id: string }
}

export async function generateMetadata({ params }: MetadataProps) {
    const id = params.id
    const LifeWild = await getLifeWildById({ query: id })

    let name: string = "Article"
    if (LifeWild) {
        name = LifeWild.vernacularName
    }

    return {
        title: `${name} - LifeWild`
    }
}

const Article = ({ article }: { article: LifeWildType }) => {
    return (
        <article className="grid grid-cols-1 md:grid-cols-[auto_min-content] md:gap-x-[2rem] lg:gap-x-[6rem] transition-all">
            <div className="pt-5 md:pt-0 md:col-span-1 md:row-span-1">
                <h1 className="font-bold text-3xl">{article.vernacularName}</h1>
                <h2 className="text-lg italic font-light">{article.binomialName}</h2>
                <ArticleDescription description={article.about} />
                <ContentSeparator />
                <div className="hidden md:block">
                    <ArticleInformationContainer article={article} />
                    <div className="col-span-1 lg:col-span-2 mt-10">
                        <ArticleReferences
                            references={article.references}
                            svgPath="/images/cube.svg"
                            options={{ "collapsable": true, "textSize": "text-xl" }}
                        />
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col col-span-1 gap-5">
                <div className="hidden md:block">
                    <ArticleImage imagePath={article.referencePhoto} />
                </div>
                <ArticleTableContainer article={article} />
                {article.otherNames[0] !== "" ? <ArticleInformation
                    article={{ title: "Other Names", content: article.otherNames }}
                    svgPath="/images/comment.svg"
                    options={{ "textSize": "text-xl", "justify": "center" }}
                /> : <></>}
            </div>
            <MobileArticleInformation article={article} />
            <div className="block md:hidden order-first md:order-last">
                <ArticleImage imagePath={article.referencePhoto} />
            </div>
        </article>
    )
}

const ArtilcePage = async ({ params }: { params: { id: string } }) => {
    const LifeWild = await getLifeWildById({ query: params.id })

    if (!LifeWild) {
        return (
            <></>
        )
    }

    return (
        <div className="relative w-full h-full pt-[4rem] py-[6rem] px-mobilex2 md:px-mdx lg:px-lgx transition-all bg-gradient">
            <Article article={LifeWild} />
            <Footer />
        </div>
    )
}

export default ArtilcePage
