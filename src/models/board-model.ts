import mongoose from "mongoose";

const Schema = mongoose.Schema

const Board = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    columnOrder: {
      type: Array,
      default: [],
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

export const BoardModel = mongoose.model('Board', Board, 'boards')
