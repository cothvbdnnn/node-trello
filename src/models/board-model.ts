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
    columns: [{
      type: Schema.Types.ObjectId,
      ref: 'Column'
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

export const BoardModel = mongoose.model('Board', Board, 'boards')
