
import mongoose from "mongoose";

const Schema = mongoose.Schema

const Card = new Schema(
  {
    boardId: {
      type: String,
      required: true,
    },
    columnId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    _destroy: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
)

export const CardModel = mongoose.model('Card', Card, 'cards')
