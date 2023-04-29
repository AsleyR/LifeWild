import capitalizeFirstLetter from "@/app/libs/CapitalizeFirstLetter";
import { LifeWildType } from "@/app/libs/types/LifeWild.types";

const ArticleTable = ({ classification }: { classification: LifeWildType['classification'] }) => {
    let jsxArray = []
    let key: keyof typeof classification;
    for (key in classification) {
        if (classification[key] !== '') {
            jsxArray.push(
                <li key={`${key}-${classification[key]}`} className="grid grid-cols-2 items-center border-b">
                    <p className="pr-5 font-bold">{capitalizeFirstLetter(key)}</p>
                    <p className="">{classification[key]}</p>
                </li>
            )
        }
    }

    return (
        <ul key={`${classification}-ul`} className="grid justify-center align-middle py-2 gap-2 bg-white drop-shadow rounded-b-lg">
            {
                jsxArray.map((jsx) => jsx)
            }
        </ul>
    )
}

export default ArticleTable