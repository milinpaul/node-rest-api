import dotenv from 'dotenv'
dotenv.config()

const NODE_ENV = process.env.NODE_ENV || 'development'
export default {
  BASE_URL: process.env.BASE_URL,
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  DB_NAME: process.env.DB_NAME,
  PORT: process.env.PORT || 8000,
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
  IS_DEV: NODE_ENV !== 'production',
}
