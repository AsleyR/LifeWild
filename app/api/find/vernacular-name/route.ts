import { NextResponse } from "next/server";
import getLifeWildByVernacularName from "@/app/actions/getLifeWildByVernacularName";
import determineRequestQuantity from "@/app/libs/determineRequestQuantity";
import { APIResponse, requestQuantity } from "@/app/libs/types/API.types";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const vernacularName = searchParams.get('query') || ""
    let searchMode = searchParams.get('quantity')

    const requestQuantity: requestQuantity = determineRequestQuantity(searchMode)

    try {
        const dbRes = await getLifeWildByVernacularName({ query: vernacularName, quantity: requestQuantity })
        const dbResLength = Array.isArray(dbRes) ? dbRes.length : 1 // Checks if dbRes is an array. In case that is not, defaults to 1.

        const response: APIResponse<typeof dbRes> = {
            response: dbRes,
            length: dbResLength
        }

        return NextResponse.json(response)

    } catch (err: unknown) {
        const response: APIResponse<typeof err> = {
            response: err,
            length: 0
        }

        return NextResponse.json(response)
    }
}