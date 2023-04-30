import { requestQuantity } from "./API.types";

export interface getLifeWildBase {
    query: string;
}

export interface getLifeWildByVernacularNameProps extends getLifeWildBase {
    quantity?: requestQuantity
}

export interface getLifeWildByBinomialNameProps extends getLifeWildBase {
    quantity?: requestQuantity
}

export interface getLifeWildByConservationStatusProps extends getLifeWildBase {
    quantity?: requestQuantity
}

export interface getLifeWildByIdProps extends getLifeWildBase {
}