import express from 'express'
import boardRouter from './board-route'
import columnRouter from './column-route'

const router = express.Router()

router.use('/boards', boardRouter)
router.use('/columns', columnRouter)

export default router