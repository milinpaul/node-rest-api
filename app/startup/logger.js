import winston from 'winston'

import { IS_DEV } from '../configs'

const logger = winston.createLogger({
  format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  level: !IS_DEV ? 'info' : 'debug',
  transports: [
    new winston.transports.File({
      filename: './logs/log.txt',
      level: 'info',
    }),
    new winston.transports.File({
      filename: './logs/errors.txt',
      level: 'error',
    }),
    new winston.transports.Console(),
  ],
})

logger.stream = {
  write: function (message) {
    logger.info(message)
  },
}

export default logger
