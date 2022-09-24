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
      const result = await ColumnService.createColumn(req.body)
      res.status(httpStatusCode.OK).json(result)
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }
}

export default new ColumnController