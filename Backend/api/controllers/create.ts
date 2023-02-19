import { Request, Response } from 'express'
import { config } from 'dotenv'

config()

const LifeWildModel = require('../models/LifeWildModel')

exports.createLFData = async (req: Request, res: Response) => {
    const lifeWildData = new LifeWildModel(req.body)
    await lifeWildData.save()
    res.status(200).send(lifeWildData)
}

exports.createManyLFData = async (req: Request, res: Response) => {
    const lifeWildArray = req.body
    await LifeWildModel.insertMany(req.body)
    res.status(200).send(lifeWildArray)
}