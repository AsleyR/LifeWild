import { requestQuantity } from "./types/API.types"


const determineRequestQuantity = (string: string | undefined | null): requestQuantity => {
    if (string !== undefined && string !== null) {
        if (string === "single" || string === "many") {
            return string
        }
    }

    return "many"
}

export default determineRequestQuantity