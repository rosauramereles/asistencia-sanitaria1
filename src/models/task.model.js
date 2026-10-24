import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

//Acá seria para el pedido del asistente 

export const Task = sequelize.define("Task", {
titulo: { 
    type: DataTypes.STRING, 
    allowNull: false },
descripcion: {
    type: DataTypes.TEXT },
fecha: { 
    type: DataTypes.DATE },
estado: {
    type: DataTypes.ENUM("pendiente", "aceptada", "rechazada", "finalizada"),
    defaultValue: "pendiente"}
});