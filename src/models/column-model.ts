
import mongoose from "mongoose";

const Schema = mongoose.Schema

const Column = new Schema(
  {
    boardId: {
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
    cards: [{
      type: Schema.Types.ObjectId,
      ref: 'Card'
    }],
    _destroy: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
)

export const ColumnModel = mongoose.model('Column', Column, 'columns')
