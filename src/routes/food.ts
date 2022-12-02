'use strict';

import express, { Request, Response, NextFunction } from "express";
import { FoodModelCtor } from "../models";

export const router = express.Router();

router.get('/food', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const foods = await FoodModelCtor.findAll();
    res.status(200).send(foods);
  } catch (error) {
    next(error);
  }
});

router.post('/food', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newFoodItem = await FoodModelCtor.create(req.body);
    res.status(200).send(newFoodItem);
  } catch (error) {
    next(error);
  }
});
