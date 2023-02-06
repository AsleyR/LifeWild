import express, { Router } from 'express'
import path from 'path'
import { config } from 'dotenv'

config()

const router: Router = express.Router()

const publicDirPath: string = path.join(__dirname, "../views") 

// Routes
router.use('/', express.static(path.join(publicDirPath, '/homepage')))
router.use('/api', express.static(path.join(publicDirPath, '/api-section')))

module.exports = router;

