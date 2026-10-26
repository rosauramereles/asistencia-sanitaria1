import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

//Agenda del asistente 

export const Disponibilidad = sequelize.define("Disponibilidad", {
dia: {
    type: DataTypes.ENUM("lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"),
    allowNull: false},
horaInicio: { 
    type: DataTypes.TIME, 
    allowNull: false },
horaFin: {
    type: DataTypes.TIME, 
    allowNull: false },
barrio: { 
    type: DataTypes.STRING, 
    allowNull: false }
});