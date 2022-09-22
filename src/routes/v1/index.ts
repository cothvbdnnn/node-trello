import express from 'express'
import boardRouter from './board'

const router = express.Router()

router.use('/boards', boardRouter)

export default router