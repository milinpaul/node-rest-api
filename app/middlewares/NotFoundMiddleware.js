import { NOT_FOUND, getStatusText } from 'http-status-codes'

import logger from '../startup/logger'

export default (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  logger.error(error)
  return res.status(NOT_FOUND).json({
    success: false,
    statusCode: NOT_FOUND,
    errorInfo: `${getStatusText(NOT_FOUND)} - ${req.originalUrl}`,
  })
}
