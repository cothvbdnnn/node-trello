import express from 'express'
import CardController from '../../controllers/card-controller'

const router = express.Router()

router.get('/', CardController.getCards)
router.post('/', CardController.createCard)
router.delete('/:id', CardController.deleteCard)
router.put('/:id', CardController.updateCard)

export default router