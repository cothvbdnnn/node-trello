import { BoardService } from './../services/board-service';
import { Request, Response } from 'express';
import { httpStatusCode } from '../config/constants';

class BoardController {

  /**
   * @path /boards
   * @method GET
   */

  async getBoards(req: Request, res: Response) {
    try {
      const boards = await BoardService.getBoards()
      res.status(httpStatusCode.OK).json(boards)
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }

  /**
   * @path /boards
   * @method POST
   */

  async createBoard(req: Request, res: Response) {
    try {
      const result = await BoardService.createBoard({ data: req.body })
      res.status(httpStatusCode.OK).json(result)
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }

  /**
 * @path /boards/:id
 * @method PUT
 */

  async updateBoard(req: Request, res: Response) {
    try {
      const result = await BoardService.updateBoard({ boardId: req.params.id, data: req.body })
      res.status(httpStatusCode.OK).json(result)
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }

  /**
 * @path /boards/:id
 * @method GET
 */

  async getBoardDetail(req: Request, res: Response) {
    try {
      const result = await BoardService.getBoardDetail({ boardId: req.params.id })
      res.status(httpStatusCode.OK).json(result?.[0])
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }
}

export default new BoardController