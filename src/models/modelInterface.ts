'use strict';

// import { ModelCtor, Model } from 'sequelize-typescript';
// import { InferAttributes, InferCreationAttributes } from 'sequelize';
import { ClothesModelCtor, FoodModelCtor } from '.';
import { ClothesModel } from './clothes.schema';
// import { FoodModel } from './foods.schema'

// type InputDataType = ClothesModel | FoodModel;
// type JSONType = {[key: string]: (string | number | boolean | {[key: string]: JSONType} | Array<JSONType>)}
// type T = ClothesModel | FoodModel;

export class ModelInterface<T extends typeof ClothesModelCtor> {
  model: T;

  constructor(model: T) {
    this.model = model;
  }
  
  async create(json: ClothesModel) {
    try {
      const clothes = await this.model.create(json);
      return clothes;
    } catch (error) {
      throw error;
    }
  }

  async read(idString: string | null = null) {
    try {
      if (idString) {
        return await this.model.findByPk(idString);
      } else {
        return await this.model.findAll();
      }
    } catch (error) {
      throw error;
    }
  }

  async update(idString: string, json: Partial<ClothesModel>) {
    try {
      const clothes = await this.model.update(json, {
        where: { id: idString}
      });

      console.log(clothes);

      const updatedClothes = await this.model.findByPk(idString);
      return updatedClothes;
    } catch (error) {
      throw error;
    }
  }

  async delete(idString: string) {
    try {
      const clothes = await this.model.destroy({
        where: { id: idString }
      });
      return clothes;
    } catch (error) {
      throw error;
    }
  }
}
