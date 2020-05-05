const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB,
} = process.env

export default {
  url: `mongodb://localhost:${MONGO_PORT}/${MONGO_DB}`,
  options: {
    auth: { authSource: "admin" },
    user: MONGO_USERNAME,
    pass: MONGO_PASSWORD,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
}
