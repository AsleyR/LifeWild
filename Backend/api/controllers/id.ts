import { Request, Response } from 'express'
const LifeWildModel = require('../models/LifeWildModel')

// Controller for getting all LifeWild object
// Note: Placed here for arbitrary reasons, so yeah
exports.allData = async (req: Request, res: Response) => {
    const LifeWildData = await LifeWildModel.find()
    res.status(200).send(LifeWildData)
}

exports.idSection = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS "_ID" IN THE URL PARAMS. EX: /id/eXAmpleId123$`)
}

exports.findById = async (req: Request, res: Response) => {
    const requestId = req.params.id

    try {
        const LifeWildData = await LifeWildModel.findById(requestId)
        res.status(200).send(LifeWildData)
    } catch (err) {
        res.status(400).send({result: "Object was not found.", error: err})
    }
}