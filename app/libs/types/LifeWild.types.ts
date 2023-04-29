export interface LifeWildType {
    readonly _id: string;
    vernacularName: string;
    binomialName: string;
    referencePhoto: string;
    about: string[];
    conservationStatus: string;
    otherNames: string[];
    classification: {
        domain: string;
        kingdom: string;
        phylum: string;
        subPhylum: string;
        class: string;
        subClass: string;
        order: string;
        subOrder: string;
        infraOrder: string;
        family: string;
        subFamily: string;
        genus: string;
        species: string;
        subSpecies: string;
    };
    references: string[]
}