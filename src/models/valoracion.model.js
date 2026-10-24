import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Valoracion = sequelize.define("Valoracion", {
puntaje: {
    type: DataTypes.INTEGER, 
    allowNull: false, 
    validate: { min: 1, max: 5 } },
comentario: { 
    type: DataTypes.TEXT }
});