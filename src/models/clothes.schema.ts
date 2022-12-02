'use strict';

import { Sequelize, Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";


export interface ClothesModel extends Model<InferAttributes<ClothesModel>, InferCreationAttributes<ClothesModel>> {
  id: CreationOptional<number>;
  name: string;
  clothing_type: string;
  size: string;
  gender: string;
}

export default (sequelizeDatabase: Sequelize) => sequelizeDatabase.define<ClothesModel>("clothes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  clothing_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.ENUM,
    values: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    allowNull: false
  },
  gender: {
    type: DataTypes.ENUM,
    values: ['men', 'women', 'unisex'],
    allowNull: false
  }
}, { tableName: 'clothes' });