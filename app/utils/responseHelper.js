import { OK } from 'http-status-codes';

import logger from '../startup/logger';

export const successResponse = ({
  req,
  res,
  status = OK,
  data,
  isList = false,
}) => {
  if (data) {
    logger.info(
      `http_status:${status}, content:${JSON.stringify(data)}, accessed_url:${
        req.originalUrl
      }, http_method:${req.method}, accessed_ip:${req.ip}`
    );
    if (isList) {
      res.status(status).json(listResponseHelper(data));
    } else {
      res.status(status).json(successHelper(data));
    }
  }
  return null;
};

export const successWithPagination = ({
  req,
  res,
  status = OK,
  data,
  paginationParams,
}) => {
  if (data) {
    logger.info(
      `http_status:${status}, content:${JSON.stringify(data)}, accessed_url:${
        req.originalUrl
      }, http_method:${req.method}, accessed_ip:${req.ip}`
    );

    res.status(status).json({
      success: true,
      meta: { ...paginationParams },
      data,
    });
  }
  return null;
};

const successHelper = (data) => ({
  success: true,
  data,
});

const listResponseHelper = (data) => ({
  success: true,
  count: data.length,
  data,
});

const errorHelper = (message) => ({
  success: false,
  message,
});

export { successHelper, errorHelper, listResponseHelper };
