const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_DB,
  MONGO_HOSTNAME,
} = process.env

const host = process.env.NODE_ENV === 'test' ? 'localhost' : MONGO_HOSTNAME
const url = process.env.DOCKER
  ? `mongodb://${host}:${MONGO_PORT}/${MONGO_DB}`
  : `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@savedbot-6tes2.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`

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
