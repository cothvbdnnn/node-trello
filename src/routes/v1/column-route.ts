import express from 'express'
import ColumnController from '../../controllers/column-controller'

const router = express.Router()

router.get('/', ColumnController.getColumns)
router.post('/create', ColumnController.createColumn)
router.get('/:id', ColumnController.getColumnDetail)
router.put('/:id/update', ColumnController.updateColumn)

export default router