import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";


export const Role = sequelize.define("Role", {
nombre: { 
    type: DataTypes.ENUM("familiar", "asistente"), 
    allowNull: false, 
    unique: true }
});