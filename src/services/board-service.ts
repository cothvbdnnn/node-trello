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

const pullColumn = async ({ boardId, columnId }: { boardId: string, columnId: string }) => {
  try {
    const result = await BoardModel.findOneAndUpdate(
      { _id: boardId },
      { $pull: { columns: columnId } },
      { returnOriginal: false },
    )
    return result
  } catch (error: any) {
    throw new Error(error)
  }
}

const swapColumn = async ({ boardId, data }: { boardId: string, data: { oldIndex: number, newIndex: number } }) => {
  try {
    const oldIndexColumn = `columns.${data?.oldIndex}`
    const newIndexColumn = `columns.${data?.newIndex}`
    const boardSelected = await BoardModel.find({ _id: boardId })
    const result = await BoardModel.update(
      { _id: boardId },
      {
        $set: {
          [oldIndexColumn]: boardSelected?.[0]?.columns?.[data?.newIndex],
          [newIndexColumn]: boardSelected?.[0]?.columns?.[data?.oldIndex],
        },
      }
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
  pullColumn,
  swapColumn,
  getBoardDetail,
}