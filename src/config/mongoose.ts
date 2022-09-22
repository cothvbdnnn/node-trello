import mongoose from 'mongoose'
import { env } from './environment'

export const connect = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI, {
      dbName: env.DATABASE_NAME,
    })
  } catch (error) {
    throw new Error(error)
  }
}