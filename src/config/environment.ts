require('dotenv').config()

export const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  DATABASE_NAME: process.env.DATABASE_NAME,
}