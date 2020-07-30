import morgan from 'morgan'

import logger from '../startup/logger'

morgan.format('logFormat', ':date[clf], :resource, :remote-addr, :status, :response-time ms')

export default morgan('combined', { stream: logger.stream })
