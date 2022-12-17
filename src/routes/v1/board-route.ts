import express from 'express'
import BoardController from '../../controllers/board-controller'

const router = express.Router()

router.get('/', BoardController.getBoards)
router.post('/', BoardController.createBoard)
router.get('/:id', BoardController.getBoardDetail)
router.put('/:id/swap-column', BoardController.swapColumn)

export default router