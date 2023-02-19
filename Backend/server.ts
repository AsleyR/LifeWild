import express, { Application, Request, Response } from 'express'
import { config } from 'dotenv'
import path from 'path'
const mongoose = require("mongoose")
const helmet = require('helmet')
const favicon = require('serve-favicon');
import lifeWildData from './exampleData.json'
// console.log(lifeWildData)

// Import Routes Handlers
const routeController = require('./api/Routes')

// Config Enviromental Variables
config()

// Current server enviroment
const currentEnviroment: string = process.env.CURRENT_ENVIROMENT || 'PRODUCTION'

// MongoDB URIs
const localDB: string | undefined = process.env.LOCAL_DB_CONNECTION_STRING
const mongoDBAtlasUri: string | undefined = process.env.MONGODB_CONNECTION_STRING

// Uri to connect to Mongodb
const serverMongoDB = currentEnviroment === "DEVELOPMENT" ? localDB : mongoDBAtlasUri

mongoose.set('strictQuery', false)

mongoose.connect(serverMongoDB, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(() => {

    // Setup Express
    const app: Application = express()

    // Middleware
    app.use(express.json())
    app.use(helmet())
    app.use(favicon(path.join(__dirname, 'assets', 'LifeWild.ico')))

    // Routes Handlers
    app.use('/', routeController)
    app.use('/api', routeController)

    const PORT: string | number = process.env.PORT || 4000;

    app.listen(PORT, (): void => {
        console.log(`[Server] Server SUCCESSFULLY started`)
        console.log(`[Server] Listening on port: ${PORT}`)

        if (currentEnviroment === "DEVELOPMENT") {
            console.log(`[Server DEV] Server hosted at: http://localhost:${PORT}`)
        }
    })

}).catch((err: any) => {
    console.log({error: err})
    console.log("[Server] Database connection FAILED, stopping server...")
})

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("[Server] Database connection established SUCCESFULLY")
})