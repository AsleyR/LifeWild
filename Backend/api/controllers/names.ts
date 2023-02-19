import { Request, Response } from 'express'
const LifeWildModel = require('../models/LifeWildModel')

exports.allVernacularNames = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING THE VERNACULAR NAME IN THE URL PARAMS. EX: /vernacular-name/cat`)
}

exports.findByVernacularName = async (req: Request, res: Response) => {
    const requestVName = req.params.vname

    try {
        const LifeWildData = await LifeWildModel.find({vernacularName: {$regex: `${requestVName}`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: "Object not found", error: 404})
    }
}

exports.allBinomialNames = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING THE BINOMIAL NAME IN THE URL PARAMS. EX: /binomial-name/felis catus`)
}

exports.findByBinomialName = async (req: Request, res: Response) => {
    const requestBName = req.params.bname

    try {
        const LifeWildData = await LifeWildModel.find({binomialName: {$regex: `${requestBName}`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        } else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: "Object not found", error: 404})
    }
}