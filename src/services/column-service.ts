import { ColumnModel } from '../models/column-model'

const getColumns = async () => {
  try {
    return ColumnModel.find()
  } catch (error: any) {
    throw new Error(error)
  }
}

const createColumn = async (data: {}) => {
  try {
    const board = new ColumnModel(data)
    return board.save()
  } catch (error: any) {
    throw new Error(error)
  }
}

const updateColumn = async (id: string, data: {}) => {
  try {
    return ColumnModel.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { returnOriginal: false },
    )
  } catch (error: any) {
    throw new Error(error)
  }
}

export const ColumnService = {
  getColumns,
  createColumn,
  updateColumn,
}