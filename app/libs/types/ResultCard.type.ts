import { LifeWildType } from "./LifeWild.types";

export interface ResultCardType {
    title: LifeWildType['vernacularName'];
    scientificName: LifeWildType['binomialName'];
    description: LifeWildType['about'];
    imagePath: LifeWildType['referencePhoto'];
    cardId: LifeWildType['_id']
}