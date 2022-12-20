import express from 'express'
import BoardController from '../../controllers/board-controller'

const router = express.Router()

router.get('/', BoardController.getBoards)
router.post('/', BoardController.createBoard)
router.get('/:id', BoardController.getBoardDetail)
router.put('/:id', BoardController.updateBoard)

export default router