import { DataTypes} from "sequelize";
import { sequelize } from "../config/database.js";

export const Notificacion = sequelize.define("Notificacion", {
texto: {
    type: DataTypes.STRING, 
    allowNull: false },
tipo:  { 
    type: DataTypes.ENUM("nueva_task", "nuevo_mensaje", "task_actualizada"),
    allowNull: false },
leida: { 
    type: DataTypes.BOOLEAN,
    defaultValue: false }
});