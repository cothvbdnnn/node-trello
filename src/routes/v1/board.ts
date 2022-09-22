import express from 'express'
import BoardController from '../../middlewares/BoardController'

const router = express.Router()

router.get('/', BoardController.index)
router.post('/create', BoardController.create)

export default router