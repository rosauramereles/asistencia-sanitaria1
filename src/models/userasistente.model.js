import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const UserAsistente = sequelize.define("UserAsistente", {
foto: { 
    type: DataTypes.STRING },
descripcion: { 
    type: DataTypes.TEXT },
experiencia: { 
    type: DataTypes.STRING },
especialidad: { 
    type: DataTypes.STRING },
zona: { 
    type: DataTypes.STRING },
tarifa: { 
    type: DataTypes.DECIMAL(10, 2) },
disponibleAhora: { 
    type: DataTypes.BOOLEAN, 
    defaultValue: false }
});