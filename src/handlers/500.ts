'use strict';

import { Errback, Request, Response, NextFunction } from 'express'

export default function (error: Errback, req: Request, res: Response, next: NextFunction) {
  res.status(500).send({
    error: 500,
    route: req.baseUrl,
    query: req.query,
    message: `Internal Server Error: ${error}`,
  });
}