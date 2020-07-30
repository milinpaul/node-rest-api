import { UNPROCESSABLE_ENTITY } from 'http-status-codes'
import { validationResult } from 'express-validator'

import logger from '../../startup/logger'

export default (rules) => [
  rules,
  (req, res, next) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
      logger.error(`Validation error occurred ${JSON.stringify(errors.array())}`)
      errors = errors.mapped()
      const errorInfo = Object.keys(errors).reduce(
        (err, key) => Object.assign(err, { [key]: errors[key].msg }),
        {}
      )
      const errorResponse = {
        success: false,
        statusCode: UNPROCESSABLE_ENTITY,
        errorInfo,
      }
      return next(errorResponse)
    }
    return next()
  },
]
