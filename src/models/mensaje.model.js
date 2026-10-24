import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

//Comunicación por el email, y será registrada en la app si se pudo comunicar

export const Mensaje = sequelize.define("Mensaje", {
texto: { 
    type: DataTypes.TEXT, 
    allowNull: false },
enviadoEmail: {
    type: DataTypes.BOOLEAN, 
    defaultValue: false } // true cuando el mail salió bien
});