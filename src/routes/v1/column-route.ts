import express from 'express'
import ColumnController from '../../controllers/column-controller'

const router = express.Router()

router.get('/', ColumnController.getColumns)
router.post('/', ColumnController.createColumn)
router.get('/:id', ColumnController.getColumnDetail)
router.delete('/:id', ColumnController.deleteColumn)
router.put('/:id', ColumnController.updateColumn)

export default router