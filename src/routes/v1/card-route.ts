import express from 'express'
import CardController from '../../controllers/card-controller'

const router = express.Router()

router.get('/', CardController.getCards)
router.post('/create', CardController.createCard)

export default router