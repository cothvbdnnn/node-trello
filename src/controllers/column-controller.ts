import { BoardService } from './../services/board-service';
import { ColumnService } from './../services/column-service';
import { Request, Response } from 'express';
import { httpStatusCode } from '../config/constants';

class ColumnController {

  /**
   * @path /columns
   * @method GET
   */

  async getColumns(req: Request, res: Response) {
    try {
      const columns = await ColumnService.getColumns()
      res.status(httpStatusCode.OK).json(columns)
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }

  /**
   * @path /columns/create
   * @method POST
   */

  async createColumn(req: Request, res: Response) {
    try {
      const newColumn = await ColumnService.createColumn({ data: req.body })
      await BoardService.pushColumn({
        boardId: newColumn?.boardId?.toString(),
        columnId: newColumn?._id?.toString()
      });
      res.status(httpStatusCode.OK).json(newColumn)
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }

  /**
 * @path /columns/:id/update
 * @method PUT
 */

  async updateColumn(req: Request, res: Response) {
    try {
      const result = await ColumnService.updateColumn({ columnId: req.params.id, data: req.body })
      res.status(httpStatusCode.OK).json(result)
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }

  /**
 * @path /columns/:id
 * @method GET
 */

  async getColumnDetail(req: Request, res: Response) {
    try {
      const result = await ColumnService.getColumnDetail({ columnId: req.params.id })
      res.status(httpStatusCode.OK).json(result)
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }
}

export default new ColumnController