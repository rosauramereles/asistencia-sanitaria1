import { Router } from "express";
import {
  createDisponibilidad,
  getAllDisponibilidades,
  getDisponibilidadById,
  updateDisponibilidad,
  deleteDisponibilidad,
} from "../controllers/disponibilidad.controller.js";
import { validate } from "../middlewares/validate.js";
import {
  createDisponibilidadValidation,
  updateDisponibilidadValidation,
} from "../middlewares/validations/disponibilidad.validation.js";

export const disponibilidadRouter = Router();

// Ruta para agregar un horario a la agenda del asistente
disponibilidadRouter.post("/disponibilidades", createDisponibilidadValidation, validate, createDisponibilidad);

// Ruta para traer todos los horarios
disponibilidadRouter.get("/disponibilidades", getAllDisponibilidades);

// Ruta para traer un horario por id
disponibilidadRouter.get("/disponibilidades/:id", getDisponibilidadById);

// Ruta para actualizar un horario
disponibilidadRouter.put("/disponibilidades/:id", updateDisponibilidadValidation, validate, updateDisponibilidad);

// Ruta para eliminar un horario
disponibilidadRouter.delete("/disponibilidades/:id", deleteDisponibilidad);