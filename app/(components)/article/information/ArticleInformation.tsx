import ArticleSection, { ArticleSectionProps } from "../ArticleSection"


const ArticleInformation = ({ article, svgPath, options = { justify: "center" } }: { article: { title: string, content: string | string[] }, svgPath: string, options?: ArticleSectionProps['options'] }) => {
    const parseContent = (content: string[]) => {
        return content.map((content) => <p key={`${article}-p`} className="">{content}</p>)
    }

    const content = Array.isArray(article.content) ? parseContent(article.content) : article.content

    return (
        <div className="w-full">
            <ArticleSection title={article.title} imagePath={svgPath} options={options} />
            <div className="font-base text-xl text-center">{content}</div>
        </div>
    )
}

export default ArticleInformation