import { Router } from "express";
import {
    createValoracion,
    getAllValoraciones,
    getValoracionById,
    updateValoracion,
    deleteValoracion,
} from "../controllers/valoracion.controller.js";
import { validate } from "../middlewares/validate.js";
import {createValoracionValidation, updateValoracionValidation} from "../middlewares/validations/valoracion.validation.js"

export const valoracionRouter = Router();

// Ruta para que un familiar valore a un asistente
valoracionRouter.post("/valoraciones", createValoracion);

// Ruta para traer todas las valoraciones
valoracionRouter.get("/valoraciones", getAllValoraciones);

// Ruta para traer una valoración por id
valoracionRouter.get("/valoraciones/:id", getValoracionById);

// Ruta para actualizar una valoración
valoracionRouter.put("/valoraciones/:id", updateValoracion);

// Ruta para eliminar una valoración
valoracionRouter.delete("/valoraciones/:id", deleteValoracion);