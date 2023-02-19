import { Request, Response } from 'express'
const LifeWildModel = require('../models/LifeWildModel')


exports.allClassification = async (req: Request, res: Response) => {
    res.status(200).send(`CLASSIFICATION SECTION`)
}

exports.allDomains = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS DOMAIN IN THE URL PARAMS. EX: /domain/eukaryota`)
}

exports.findByDomain = async (req: Request, res: Response) => {
    const requestDomain = req.params.domain.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '. 
    
    try {
        const LifeWildData = await LifeWildModel.find({'classification.domain': {$regex: `${requestDomain}`, $options: "ims"}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }

    } catch {
        res.status(400).send({result: 'Object not found', error: 404})
    }
}

exports.allKingdoms = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS KINGDOM IN THE URL PARAMS. EX: /kingdom/animalia`)
}

exports.findByKingdom = async (req: Request, res: Response) => {
    const requestKingdom = req.params.kingdom.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.
    
    try {
        const LifeWildData = await LifeWildModel.find({'classification.kingdom': {$regex: `${requestKingdom}`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: 'Object not found', error: 404})
    }
}

exports.allPhylums = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS PHYLUM IN THE URL PARAMS. EX: /phylum/chordata`)
}

exports.findByPhylum = async (req: Request, res: Response) => {
    const requestPhylum = req.params.phylum.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.
    
    try {
        const LifeWildData = await LifeWildModel.find({'classification.phylum': {$regex: `${requestPhylum}`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: 'Object not found', error: 404})
    }
}

exports.allSubphylums = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS SUBPHYLUM IN THE URL PARAMS. EX: /subphylum/crustacea`)
}

exports.findBySubphylum = async (req: Request, res: Response) => {
    const requestSubphylum = req.params.subphylum.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.

    try {
        const LifeWildData = await LifeWildModel.find({'classification.subPhylum': {$regex: `${requestSubphylum}`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: 'Object not found', error: 404})
    }
}

exports.allClasses = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS CLASS IN THE URL PARAMS. EX: /class/gastropoda`)
}

exports.findByClass = async (req: Request, res: Response) => {
    const requestClass = req.params.class.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.

    try {
        const LifeWildData = await LifeWildModel.find({'classification.class': {$regex: `${requestClass}`, $options: "ims"}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: "Object not found", error: 404})
    }
}

exports.allSubclasses = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS SUBCLASS IN THE URL PARAMS. EX: /subclass/heterobranchia`)
}

exports.findBySubclass = async (req: Request, res: Response) => {
    const requestSubclass = req.params.subclass.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.
    
    try {
        const LifeWildData = await LifeWildModel.find({'classification.subClass': {$regex: `${requestSubclass}`, $options: "ims"}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: "Object not found", error: 404})
    }
}

exports.allOrders = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS ORDER IN THE URL PARAMS. EX: /order/carnivora`)
}

exports.findByOrder = async (req: Request, res: Response) => {
    const requestOrder = req.params.order.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.
    
    try {
        const LifeWildData = await LifeWildModel.find({'classification.order': {$regex: `${requestOrder}`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: "Object not found", error: 404})
    }
}

exports.allSuborders = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS SUBORDER IN THE URL PARAMS. EX: /suborder/feliformia`)
}

exports.findBySuborder = async (req: Request, res: Response) => {
    const requestSuborder = req.params.suborder.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.
    
    try {
        const LifeWildData = await LifeWildModel.find({'classification.subOrder': {$regex: `${requestSuborder}`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: "Object not found", error: 404})
    }
}

exports.allInfraorders = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS INFRAORDER IN THE URL PARAMS. EX: /infraorder/branchyura`)
}

exports.findByInfraorder = async (req: Request, res: Response) => {
    const requestInfraorder = req.params.infraorder.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.
    
    try {
        const LifeWildData = await LifeWildModel.find({'classification.infraOrder': {$regex: `${requestInfraorder}`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: "Object not found", error: 404})
    }
}

exports.allFamilies = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS FAMILY IN THE URL PARAMS. EX: /family/felidae`)
}

exports.findByFamily = async (req: Request, res: Response) => {
    const requestFamily = req.params.family.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.
    
    try {
        const LifeWildData = await LifeWildModel.find({'classification.family': {$regex: `${requestFamily}`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: "Object not found", error: 404})
    }
}

exports.allSubfamilies = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS SUBFAMILY IN THE URL PARAMS. EX: /subfamily/felinae`)
}

exports.findBySubfamily = async (req: Request, res: Response) => {
    const requestSubfamily = req.params.subfamily.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.
    
    try {
        const LifeWildData = await LifeWildModel.find({'classification.subFamily': {$regex: `${requestSubfamily}`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: "Object not found", error: 404})
    }
}

exports.allGenuses = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS GENUS IN THE URL PARAMS. EX: /genus/felis`)
}

exports.findByGenus = async (req: Request, res: Response) => {
    const requestGenus = req.params.genus.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.
    
    try {
        const LifeWildData = await LifeWildModel.find({'classification.genus': {$regex: `${requestGenus}`, $options: "ims"}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData   )
        }
    } catch {
        res.status(400).send({result: "Object not found", error: 404})
    }
}

exports.allSpecies = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS SPECIES IN THE URL PARAMS. EX: /species/f. catus`)
}

exports.findBySpecies = async (req: Request, res: Response) => {
    const requestSpecies = req.params.species.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.
    
    try {
        const LifeWildData = await LifeWildModel.find({'classification.species': {$regex: `^${requestSpecies}`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: 'Object not found', error: 404})
    }
}

exports.allSubspecies = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS SUBSPECIES IN THE URL PARAMS. EX: /subspecies/canis lupus lycaon`)
}

exports.findBySubspecies = async (req: Request, res: Response) => {

    const requestSubspecies = req.params.subspecies.replace(/[0-9\-\+\_]/g, " ") // Finds all instances of characters '-', '+', '_', and numbers from 0 to 9, and replaces it with a space ' '.
    
    try {
        const LifeWildData = await LifeWildModel.find({'classification.subSpecies': {$regex: `${requestSubspecies}`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        console.log(requestSubspecies)
        res.status(400).send({result: "Object not  found", error: 404})
    }
}