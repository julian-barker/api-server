'use strict';

import express, { Request, Response, NextFunction } from "express";
import { clothesInterface } from "../models";

export const router = express.Router();

router.get('/clothes', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const clothes = await clothesInterface.read();
    res.status(200).send(clothes);
  } catch (error) {
    next(error);
  }
});

router.get('/clothes/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const clothingItem = await clothesInterface.read(id);
    res.status(200).send(clothingItem);
  } catch (error) {
    next(error);
  }
});

router.post('/clothes', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newClothingItem = await clothesInterface.create(req.body);
    res.status(200).send(newClothingItem);
  } catch (error) {
    next(error);
  }
});

router.delete('/clothes/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.params.id) {
      throw 'No id supplied!!!'
    }
    const id: string = req.params.id;
    await clothesInterface.delete(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.put('/clothes/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id: string = req.params.id;
    const dbResponse = await clothesInterface.update(id, req.body);

    console.log(dbResponse);
    res.status(200).send(dbResponse);
  } catch (error) {
    next(error);
  }
});
