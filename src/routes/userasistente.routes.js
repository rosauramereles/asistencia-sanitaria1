import { Router } from "express";
import { createUserAsistente,
        getAllUserAsistentes,
        getUserAsistenteById,
        updateUserAsistente,
        deleteUserAsistente,
} from "../controllers/userasistente.controller.js";
import {validate} from "../middlewares/validate.js"
import {createUserAsistenteValidation, updateUserAsistenteValidation} from "../middlewares/validations/userasistente.validation.js"

export const userAsistenteRouter = Router();

// Ruta para crear el perfil de un asistente
userAsistenteRouter.post("/asistentes", createUserAsistente);

// Ruta para traer todos los asistentes
userAsistenteRouter.get("/asistentes", getAllUserAsistentes);

// Ruta para traer un asistente por id
userAsistenteRouter.get("/asistentes/:id", getUserAsistenteById);

// Ruta para actualizar el perfil de un asistente
userAsistenteRouter.put("/asistentes/:id", updateUserAsistente);

// Ruta para eliminar el perfil de un asistente
userAsistenteRouter.delete("/asistentes/:id", deleteUserAsistente);