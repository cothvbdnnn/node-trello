import cors from 'cors'

const configCors = (app: any) => {

  const whitelistDomain = ['http://localhost:3000', 'http://localhost:5000']

  const checkDomain = (origin: string, callback: any) => {
    if (!origin) return callback(null, true) // allow postman
    if (whitelistDomain.includes(origin)) return callback(null, true)
    callback(new Error('Not allowed by CORS'))
  }

  const corsOptions: {} = {
    origin: checkDomain,
    optionsSuccessStatus: 200,
  }

  app.use(cors(corsOptions))
}

export { configCors }