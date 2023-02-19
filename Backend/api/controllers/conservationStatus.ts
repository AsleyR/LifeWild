import { Request, Response } from "express";
const LifeWildModel = require('../models/LifeWildModel')

exports.allConservationStatus = async (req: Request, res: Response) => {
    res.status(200).send(`SEARCH AN OBJECT BY PUTTING ITS CONSERVATION STATUS IN THE URL PARAMS. EX: /conservation-status/least concern`)
}

exports.findByConservationStatus = async (req: Request, res: Response) => {
    const requestConservationStatus = req.params.conservationStatus

    try {
        const LifeWildData = await LifeWildModel.find({conservationStatus: {$regex: `${requestConservationStatus}$`, $options: 'ims'}})
        if (LifeWildData.length === 0) {
            throw new Error()
        }
        else {
            res.status(200).send(LifeWildData)
        }
    } catch {
        res.status(400).send({result: "Object not found.", error: 404})
    }
}