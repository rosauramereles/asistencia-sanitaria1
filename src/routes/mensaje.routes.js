import { Router } from "express";
import { createMensaje, 
        getAllMensajes, 
        getMensajeById, 
        updateMensaje,
        deleteMensaje 
} from "../controllers/mensaje.controller.js";
import {validate} from "../middlewares/validate.js"
import {createMensajeValidation, updateMensajeValidation} from "../middlewares/validations/mensaje.validation.js"


export const mensajeRouter = Router();

// Ruta para enviar un mensaje dentro de un pedido
mensajeRouter.post("/mensajes", createMensaje);

// Ruta para traer todos los mensajes
mensajeRouter.get("/mensajes", getAllMensajes);

// Ruta para traer un mensaje por id
mensajeRouter.get("/mensajes/:id", getMensajeById);

// Ruta para actualizar un mensaje
mensajeRouter.put("/mensajes/:id", updateMensaje);

// Ruta para eliminar un mensaje
mensajeRouter.delete("/mensajes/:id", deleteMensaje);