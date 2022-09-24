import express from 'express'
import BoardController from '../../controllers/board-controller'

const router = express.Router()

router.get('/', BoardController.getBoards)
router.post('/create', BoardController.createBoard)

export default router