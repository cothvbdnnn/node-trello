import { CardModel } from '../models/card-model'

const getCards = async () => {
  try {
    return CardModel.find()
  } catch (error: any) {
    throw new Error(error)
  }
}

const createCard = async (data: {}) => {
  try {
    const card = new CardModel(data)
    return card.save()
  } catch (error: any) {
    throw new Error(error)
  }
}

const updateCard = async (id: string, data: {}) => {
  try {
    return CardModel.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { returnOriginal: false },
    )
  } catch (error: any) {
    throw new Error(error)
  }
}

export const CardService = {
  getCards,
  createCard,
  updateCard,
}