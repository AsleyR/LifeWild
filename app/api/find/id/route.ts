import { NextResponse } from "next/server";
import { APIResponse } from "@/app/libs/types/API.types";
import getLifeWildById from "@/app/actions/getLifeWildById";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('query') || ""

    try {
        const dbRes = await getLifeWildById({ query: id })
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