'use strict';

import { Request, Response, NextFunction } from 'express'

export default function (req: Request, res: Response, next: NextFunction) {
  res.status(404).send({
    error: 404,
    route: req.baseUrl,
    message: 'Not found',
  });
}