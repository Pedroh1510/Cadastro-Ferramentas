const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_DB,
  MONGO_HOSTNAME,
} = process.env

const host = process.env.NODE_ENV === 'test' ? 'localhost' : MONGO_HOSTNAME

export default {
  url: `mongodb://${host}:${MONGO_PORT}/${MONGO_DB}`,
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
