import errorMiddleware from './ErrorMiddleware'
import notFoundMiddlware from './NotFoundMiddleware'

export default (app) => {
  app.use(errorMiddleware)
  app.use(notFoundMiddlware)
}
