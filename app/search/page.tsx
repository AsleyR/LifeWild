import SearchBar from "../(components)/SearchBar"
import { ResultCardType } from "@/app/libs/types/ResultCard.type"
import getLifeWildByVernacularName from "../actions/getLifeWildByVernacularName"
import ResultCards from "../(components)/resultcards/ResultCards"
import NoResults from "../(components)/NoResults"
import Footer from "../(components)/Footer"

type MetadataProps = {
    searchParams: { q?: string },
}

export function generateMetadata({ searchParams }: MetadataProps) {
    const search = searchParams.q || "Search"

    return {
        title: `${search} - LifeWild`
    }
}

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {

    const LifeWild = await getLifeWildByVernacularName({ query: searchParams.q || "" })
    if (!LifeWild) {
        return <></>
    }

    const results: ResultCardType[] = LifeWild.map((value) => {
        return {
            cardId: value._id,
            title: value.vernacularName,
            description: value.about,
            scientificName: value.binomialName,
            imagePath: value.referencePhoto
        }
    })

    return (
        <div className="relative w-full h-full min-w-0 pt-[8rem] border-2">
            <div className="mx-auto px-[2.5rem] md:px-0 md:max-w-2xl min-w-0 transition-all pb-[4rem]">
                <SearchBar value={searchParams.q} type={'normal'} />
                {results.length !== 0 ? <ResultCards props={results} /> : <NoResults value={searchParams.q} />}
            </div>
            {/* <Footer /> */}
        </div>
    )
}
