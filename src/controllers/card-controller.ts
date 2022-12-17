import { ColumnService } from './../services/column-service';
import { CardService } from './../services/card-service';
import { Request, Response } from 'express';
import { httpStatusCode } from '../config/constants';

class CardController {

  /**
   * @path /cards
   * @method GET
   */

  async getCards(req: Request, res: Response) {
    try {
      const cards = await CardService.getCards()
      res.status(httpStatusCode.OK).json(cards)
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }

  /**
   * @path /cards/create
   * @method POST
   */

  async createCard(req: Request, res: Response) {
    try {
      const newCard = await CardService.createCard({ data: req.body })
      await ColumnService.pushCard({
        columnId: newCard?.columnId?.toString(),
        cardId: newCard?._id?.toString()
      });
      res.status(httpStatusCode.OK).json(newCard)
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }

  /**
  * @path /cards/:id/update
  * @method PUT
  */

  async deleteCard(req: Request, res: Response) {
    try {
      const result = await CardService.deleteCard({ cardId: req.params.id })
      await ColumnService.pullCard({
        columnId: req.body.columnId,
        cardId: req.params.id
      });
      res.status(httpStatusCode.OK).json(result)
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }

  /**
 * @path /cards/:id/update
 * @method PUT
 */

  async updateCard(req: Request, res: Response) {
    try {
      const result = await CardService.updateCard({ cardId: req.params.id, data: req.body })
      res.status(httpStatusCode.OK).json(result)
    } catch (error) {
      res.status(httpStatusCode.INTERNAL_SERVER).json(error)
    }
  }
}

export default new CardController