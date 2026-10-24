import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const UserFamiliar = sequelize.define("UserFamiliar", {
nombreAdulto: { 
    type: DataTypes.STRING, 
    allowNull: false },
edadAdulto: { 
    type: DataTypes.INTEGER },
necesidades: { 
    type: DataTypes.TEXT }
});