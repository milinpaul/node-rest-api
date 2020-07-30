import config from '../configs'
import logger from '../startup/logger'

const dbConnect = async (db) => {
  try {
    const dbConnectionString = `${config.MONGO_DB_URI}/${config.DB_NAME}`
    await db.connect(dbConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    logger.info(`Connected To MongoDb, ${dbConnectionString}`)
  } catch (error) {
    logger.error('db failed', error)
  }
}

export default dbConnect
