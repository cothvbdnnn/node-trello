import express from 'express'
import boardRouter from './board-route'
import columnRouter from './column-route'
import cardRouter from './card-route'

const router = express.Router()

router.use('/boards', boardRouter)
router.use('/columns', columnRouter)
router.use('/cards', cardRouter)

export default router