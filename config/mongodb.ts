import { ConnectOptions, MongoClient } from 'mongodb'
import { env } from './environment'

export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } as ConnectOptions)
  try {
    await client.connect()

    await listDatabase(client)

    console.log('Success');
  } catch (error) {
    console.log(error);
  } finally {
    await client.close()
  }
}

const listDatabase = async (client) => {
  const databases = await client.db().admin().listDatabases()
  console.log(databases);
}