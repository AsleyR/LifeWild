import SearchBar from "../(component)/SearchBar"
import { ResultCardType } from "@/app/libs/types/ResultCard.type"
import Footer from "../(component)/Footer"
import getLifeWildByVernacularName from "../actions/getLifeWildByVernacularName"
import ResultCards from "../(component)/resultcards/ResultCards"
import NoResults from "../(component)/NoResults"

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
        <div className="relative w-full h-full pt-[4rem] pb-[8rem] bg-gradient">
            <div className="mx-auto px-[2.5rem] md:px-0 md:max-w-2xl transition-all">
                <SearchBar value={searchParams.q} type={'normal'} />
                {results.length !== 0 ? <ResultCards props={results} /> : <NoResults value={searchParams.q} />}
            </div>
            <Footer />
        </div>
    )
}
