import { INTERNAL_SERVER_ERROR, getStatusText } from 'http-status-codes'

import logger from '../startup/logger'

export default (err, req, res, next) => {
  if (err.statusCode) {
    logger.error(
      `http_status:${err.statusCode}, error_info:${JSON.stringify(
        err.errorInformation
      )}, accessed_url:${req.originalUrl}, http_method:${req.method}, accessed_ip:${req.ip}`
    )
    return res.status(err.statusCode).json(err)
  }

  logger.error(
    `http_status:${INTERNAL_SERVER_ERROR}, accessed_url:${req.originalUrl}, http_method:${req.method}, accessed_ip:${req.ip}`
  )
  logger.error(`Error occured: ${err}`)
  return res.status(INTERNAL_SERVER_ERROR).json({
    success: false,
    statusCode: INTERNAL_SERVER_ERROR,
    errorInfo: { error: getStatusText(INTERNAL_SERVER_ERROR) },
  })
}
