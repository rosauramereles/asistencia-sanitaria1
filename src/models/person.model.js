import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Person = sequelize.define("Person", {
nombre: { 
    type: DataTypes.STRING,
    allowNull: false },
apellido: { 
    type: DataTypes.STRING,
    allowNull: false },
telefono: { 
    type: DataTypes.STRING }
});