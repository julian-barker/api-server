'use strict';

import { Sequelize, Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional } from "sequelize";


export interface FoodModel extends Model<InferAttributes<FoodModel>, InferCreationAttributes<FoodModel>> {
  id: CreationOptional<number>;
  name: string;
  origin: string;
  hot_cold: string;
  spicy: string;
}

export default (sequelizeDatabase: Sequelize) => sequelizeDatabase.define<FoodModel>('foods', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hot_cold: {
    type: DataTypes.ENUM,
    values: ['hot', 'cold'],
    allowNull: false
  },
  spicy: {
    type: DataTypes.ENUM,
    values: ['Y', 'N'],
    allowNull: false
  },
});
