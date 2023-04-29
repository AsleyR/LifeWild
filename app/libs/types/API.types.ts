import { Prisma } from "@prisma/client";

export interface APIResponse<T> {
    response: T;
    length: number
}

export type requestQuantity = "single" | "many"

export type dbRequestObject = Prisma.lifedatasFindFirstArgs | Prisma.lifedatasFindManyArgs