import { LifeWildType } from "@/app/libs/types/LifeWild.types"

const ArticleDescription = ({ description }: { description: LifeWildType['about'] }) => {
    return (
        <div className="flex flex-col gap-5 mt-[1rem]">
            {
                description.map((text) => <p key={`${description}-p`} className="">{text}</p>)
            }
        </div>
    )
}

export default ArticleDescription