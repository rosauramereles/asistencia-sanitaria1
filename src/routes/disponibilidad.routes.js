import { Router } from "express";
import {createDisponibilidad,
        getAllDisponibilidades,
        getDisponibilidadById,
        updateDisponibilidad,
        deleteDisponibilidad,
} from "../controllers/disponibilidad.controller.js";

export const disponibilidadRouter = Router();

// Ruta para agregar un horario a la agenda del asistente
disponibilidadRouter.post("/disponibilidades", createDisponibilidad);

// Ruta para traer todos los horarios
disponibilidadRouter.get("/disponibilidades", getAllDisponibilidades);

// Ruta para traer un horario por id
disponibilidadRouter.get("/disponibilidades/:id", getDisponibilidadById);

// Ruta para actualizar un horario
disponibilidadRouter.put("/disponibilidades/:id", updateDisponibilidad);

// Ruta para eliminar un horario
disponibilidadRouter.delete("/disponibilidades/:id", deleteDisponibilidad);