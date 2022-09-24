require('dotenv').config()

export const env = {
  MONGODB_URI: process.env.MONGODB_URI as string,
  HOST: process.env.HOST as string,
  PORT: process.env.PORT as string,
  DATABASE_NAME: process.env.DATABASE_NAME as string,
}