import { BoardModel } from '../models/board-model'

const getBoards = async () => {
  try {
    return BoardModel.find()
  } catch (error: any) {
    throw new Error(error)
  }
}

const createBoard = async (data: {}) => {
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
}