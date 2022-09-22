import { httpStatusCode } from './../config/constants';
import Board from '../models/Board'
import { NextFunction } from 'express-serve-static-core';

class BoardController {

  /**
   * @path /boards
   * @method GET
   */

  async index(req, res, next) {
    try {
      const boards = await Board.find()
      res.status(httpStatusCode.OK).json(boards)
    } catch (error) {
      next()
    }
  }

  /**
   * @path /boards/create
   * @method POST
   */

  async create(req, res, next) {
    try {
      console.log(req.body);
      res.status(httpStatusCode.OK).json(req.body)
    } catch (error) {
      next()
    }
  }
}

export default new BoardController