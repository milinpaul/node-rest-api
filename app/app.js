import express from 'express'
import mongoose from 'mongoose'

import config from './configs'
import startup from './startup'
import dbConfig from './startup/db'
import logger from './startup/logger'
import router from './router'
import middlewares from './middlewares'

const app = express()

startup(app, express)

dbConfig(mongoose)

// Importing Routes & Modules
router(app)

//Error Handling & Not Found Middlewares
middlewares(app)

const PORT = config.PORT
app.listen(PORT, () => logger.info(`--- Sever is running on http://localhost:${PORT} ---`))
