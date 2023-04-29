import { dbRequestObject } from '@/app/libs/types/API.types';
import { getLifeWildByBinomialNameProps } from '@/app/libs/types/actions.types';
import { PrismaClient, lifedatas } from '@prisma/client'
const prisma = new PrismaClient()

/**
 * Fetchs either a `single` or `multiple` documents from mongodb.
 * @param name string
 * @param mode string which can be either "single" or "many"
 * @returns `lifedatas`, `lifedatas[]` or `null`
 */
export default async function getLifeWildByBinomialName({ query, quantity }: getLifeWildByBinomialNameProps): Promise<lifedatas[] | null> {
    quantity = quantity || "many"

    const dbRequestObject: dbRequestObject = {
        where: {
            binomialName: {
                "startsWith": `${query}`,
                mode: "insensitive",
            }
        }
    }

    try {
        let fetch: lifedatas | lifedatas[] | null = null
        let LifeWild = []
        if (quantity === "single") {
            fetch = await prisma.lifedatas.findFirst(dbRequestObject)
            if (fetch) {
                LifeWild.push(fetch)
            }

        } else {
            fetch = await prisma.lifedatas.findMany(dbRequestObject)
            LifeWild = fetch
        }

        if (!LifeWild) {
            return null
        }

        return LifeWild

    } catch (err: any) {
        throw err
    }
}