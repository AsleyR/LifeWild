import LoadingResultCard from "./LoadingResultCard"

/**
 * Generates LoadingResultCard components
 * @param ammount number of cards to render
 * @returns JSX Elements
 */
const generateLoadingCards = (ammount: number) => {
    let jsxArray = []
    for (let i: number = 0; i < ammount; i++) {
        jsxArray.push(<LoadingResultCard key={`loadingCard-{ammount}`} />)
    }
    return jsxArray
}

const LoadingResultCards = ({ ammount }: { ammount?: number }) => {
    ammount = ammount || 3 // Defaults to three if undefined

    return (
        <div className="flex flex-col gap-3 mt-3">
            {
                generateLoadingCards(ammount)
            }
        </div>
    )
}

export default LoadingResultCards