import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'

import morgan from './morgan'
import config from '../configs'

export default (app, express) => {
  app.use(
    compression({
      level: 1,
    })
  )
  app.use(helmet())
  app.use(morgan)
  app.use(
    cors({
      origin: config.CORS_ORIGIN,
    })
  )
  app.use(express.json())
}
