import { ColumnModel } from '../models/column-model'

const getColumns = async () => {
  try {
    return ColumnModel.find()
  } catch (error: any) {
    throw new Error(error)
  }
}

const getColumnDetail = async ({ columnId }: { columnId: string }) => {
  try {
    return ColumnModel.find({ _id: columnId }).populate('cards')
  } catch (error: any) {
    throw new Error(error)
  }
}

const createColumn = async ({ data }: { data: {} }) => {
  try {
    const column = new ColumnModel(data)
    return column.save()
  } catch (error: any) {
    throw new Error(error)
  }
}

const pushCard = async ({ columnId, cardId }: { columnId: string, cardId: string }) => {
  try {
    const result = await ColumnModel.findOneAndUpdate(
      { _id: columnId },
      { $push: { cards: cardId } },
      { returnOriginal: false },
    )
    return result
  } catch (error: any) {
    throw new Error(error)
  }
}

const updateColumn = async ({ columnId, data }: { columnId: string, data: {} }) => {
  try {
    return ColumnModel.findOneAndUpdate(
      { _id: columnId },
      { $set: data },
      { returnOriginal: false },
    )
  } catch (error: any) {
    throw new Error(error)
  }
}

export const ColumnService = {
  getColumns,
  getColumnDetail,
  createColumn,
  pushCard,
  updateColumn,
}