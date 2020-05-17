import './dotenv'
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_DB,
  MONGO_HOSTNAME,
  MONGO_URL,
} = process.env

const host = process.env.NODE_ENV === 'test' ? 'localhost' : MONGO_HOSTNAME
const url = process.env.MONGO_URL
  ? MONGO_URL
  : `mongodb://${host}:${MONGO_PORT}/${MONGO_DB}`

export default {
  url,
  options: {
    auth: { authSource: 'admin' },
    user: MONGO_USERNAME,
    pass: MONGO_PASSWORD,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
}
