import { CardModel } from './../models/card-model';
import { ColumnModel } from './../models/column-model';
import { BoardModel } from '../models/board-model'

const getBoards = async () => {
  try {
    return BoardModel.find()
  } catch (error: any) {
    throw new Error(error)
  }
}

const getBoardDetail = async ({ boardId }: { boardId: string }) => {
  try {
    return BoardModel.find({ _id: boardId }).populate({
      path: ColumnModel.collection.name,
      populate: {
        path: CardModel.collection.name,
      }
    })
  } catch (error: any) {
    throw new Error(error)
  }
}

const pushColumn = async ({ boardId, columnId }: { boardId: string, columnId: string }) => {
  try {
    const result = await BoardModel.findOneAndUpdate(
      { _id: boardId },
      { $push: { columns: columnId } },
      { returnOriginal: false },
    )
    return result
  } catch (error: any) {
    throw new Error(error)
  }
}

const createBoard = async ({ data }: { data: {} }) => {
  try {
    const board = new BoardModel(data)
    return board.save()
  } catch (error: any) {
    throw new Error(error)
  }
}

export const BoardService = {
  getBoards,
  createBoard,
  pushColumn,
  getBoardDetail,
}