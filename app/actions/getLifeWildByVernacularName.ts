import { dbRequestObject } from '@/app/libs/types/API.types';
import { LifeWildType } from '@/app/libs/types/LifeWild.types';
import { getLifeWildByVernacularNameProps } from '@/app/libs/types/actions.types';
import { PrismaClient, lifedatas } from '@prisma/client'
const prisma = new PrismaClient()

/**
 * Fetchs either a `single` or `multiple` documents from mongodb.
 * @param name string
 * @param mode string which can be either "single" or "many"
 * @returns `lifedatas`, `lifedatas[]` or `null`
 */
export default async function getLifeWildByVernacularName({ query, quantity }: getLifeWildByVernacularNameProps): Promise<LifeWildType[] | null> {
    quantity = quantity || "many"

    const dbRequestObject: dbRequestObject = {
        where: {
            vernacularName: {
                "contains": `${query}`,
                mode: "insensitive"
            }
        }
    }

    try {
        let fetch: lifedatas | lifedatas[] | null
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

        const result: LifeWildType[] = LifeWild.map((value) => {
            return { _id: value.id, ...value }
        })

        return result

    } catch (err: any) {
        throw err
    }
}