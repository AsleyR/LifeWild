import express, { Router } from 'express'
import path from 'path'
import { config } from 'dotenv'

const create = require('./controllers/create')
const ids = require('./controllers/id')
const names = require('./controllers/names')
const classification = require('./controllers/classification')
const conservationStatus = require('./controllers/conservationStatus')

config()

const router: Router = express.Router()

const publicDirPath: string = path.join(__dirname, "../views") 

// Routes
router.use('/', express.static(path.join(publicDirPath, '/homepage')))
router.use('/api', express.static(path.join(publicDirPath, '/api-section')))

// POST
router.post('/api/create', create.createLFData)
router.post('/api/create-many', create.createManyLFData)

// ALL
router.get('/api/all', ids.allData)

// FIND BY ID
router.get('/api/id/', ids.idSection)
router.get('/api/id/:id', ids.findById)

// VERNACULAR NAMES
router.get('/api/vernacular-name', names.allVernacularNames)
router.get('/api/vernacular-name/:vname', names.findByVernacularName)

// BINOMIAL NAMES
router.get('/api/binomial-name', names.allBinomialNames)
router.get('/api/binomial-name/:bname', names.findByBinomialName)

// CLASSIFICATIONS
router.get('/api/classification', classification.allClassification)

router.get('/api/classification/domain', classification.allDomains)
router.get('/api/classification/domain/:domain', classification.findByDomain)

router.get('/api/classification/kingdom', classification.allKingdoms)
router.get('/api/classification/kingdom/:kingdom', classification.findByKingdom)

router.get('/api/classification/phylum', classification.allPhylums)
router.get('/api/classification/phylum/:phylum', classification.findByPhylum)

router.get('/api/classification/subphylum', classification.allSubphylums)
router.get('/api/classification/subphylum/:subphylum', classification.findBySubphylum)

router.get('/api/classification/class', classification.allClasses)
router.get('/api/classification/class/:class', classification.findByClass)

router.get('/api/classification/subclass', classification.allSubclasses)
router.get('/api/classification/subclass/:subclass', classification.findBySubclass)

router.get('/api/classification/order', classification.allOrders)
router.get('/api/classification/order/:order', classification.findByOrder)

router.get('/api/classification/suborder', classification.allSuborders)
router.get('/api/classification/suborder/:suborder', classification.findBySuborder)

router.get('/api/classification/infraorder', classification.allInfraorders)
router.get('/api/classification/infraorder/:infraorder', classification.findByInfraorder)

router.get('/api/classification/family', classification.allFamilies)
router.get('/api/classification/family/:family', classification.findByFamily)

router.get('/api/classification/subfamily', classification.allSubfamilies)
router.get('/api/classification/subfamily/:subfamily', classification.findBySubfamily)

router.get('/api/classification/genus', classification.allGenuses)
router.get('/api/classification/genus/:genus', classification.findByGenus)

router.get('/api/classification/species', classification.allSpecies)
router.get('/api/classification/species/:species', classification.findBySpecies)

router.get('/api/classification/subspecies', classification.allSubspecies)
router.get('/api/classification/subspecies/:subspecies', classification.findBySubspecies)

// CONSERVATION STATUS
router.get('/api/conservation-status', conservationStatus.allConservationStatus)
router.get('/api/conservation-status/:conservationStatus', conservationStatus.findByConservationStatus)

module.exports = router;

