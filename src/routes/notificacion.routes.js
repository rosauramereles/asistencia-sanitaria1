import { Router } from "express";
import {
    createNotificacion,
    getAllNotificaciones,
    getNotificacionById,
    updateNotificacion,
    deleteNotificacion,
} from "../controllers/notificacion.controller.js";

export const notificacionRouter = Router();

// Ruta para crear una notificación
notificacionRouter.post("/notificaciones", createNotificacion);

// Ruta para traer todas las notificaciones
notificacionRouter.get("/notificaciones", getAllNotificaciones);

// Ruta para traer una notificación por id
notificacionRouter.get("/notificaciones/:id", getNotificacionById);

// Ruta para actualizar una notificación (por ejemplo, marcarla como leída)
notificacionRouter.put("/notificaciones/:id", updateNotificacion);

// Ruta para eliminar una notificación
notificacionRouter.delete("/notificaciones/:id", deleteNotificacion);