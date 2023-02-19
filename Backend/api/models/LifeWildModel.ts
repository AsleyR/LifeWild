import mongoose from "mongoose";

interface ISchema {
    schema: {
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
        references: [string];
    }
}

const schema = new mongoose.Schema<ISchema['schema']>({
    vernacularName: String,
    binomialName: String,
    referencePhoto: String,
    about: [String],
    conservationStatus: String,
    otherNames: [String],
    classification: {
        domain: String,
        kingdom: String,
        phylum: String,
        subPhylum: String,
        class: String,
        subClass: String,
        order: String,
        subOrder: String,
        infraOrder: String,
        family: String,
        subFamily: String,
        genus: String,
        species: String,
        subSpecies: String
    },
    references: [String]
})

module.exports = mongoose.model("LifeData", schema)