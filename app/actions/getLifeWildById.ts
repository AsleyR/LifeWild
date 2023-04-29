import { dbRequestObject } from '@/app/libs/types/API.types';
import { LifeWildType } from '@/app/libs/types/LifeWild.types';
import { getLifeWildByIdProps } from '@/app/libs/types/actions.types';
import { Prisma, PrismaClient, lifedatas } from '@prisma/client'
const prisma = new PrismaClient()

/**
 * Fetchs either a `single` or `multiple` documents from mongodb.
 * @param name string
 * @param mode string which can be either "single" or "many"
 * @returns `lifedatas`, `lifedatas[]` or `null`
 */
export default async function getLifeWildById({ query }: getLifeWildByIdProps): Promise<LifeWildType | null> {

    const dbRequestObject: Prisma.lifedatasFindUniqueArgs = {
        where: {
            id: `${query}`
        }
    }

    try {
        let LifeWild: lifedatas | null
        LifeWild = await prisma.lifedatas.findUnique(dbRequestObject)

        if (!LifeWild) {
            return null
        }

        return {
            _id: LifeWild['id'],
            ...LifeWild
        }

    } catch (err: any) {
        throw err
    }
}