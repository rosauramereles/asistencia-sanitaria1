import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const User = sequelize.define("User", {
email: { 
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true, 
    validate: { isEmail: true } },
password: {
    type: DataTypes.STRING, 
    allowNull: false }
});
