import { Router } from "express";
import { createTask, 
        getAllTasks, 
        getTaskById, 
        updateTask,
        deleteTask 
} from "../controllers/task.controller.js";
import {validate} from "../middlewares/validate.js"
import {createTaskValidation, updateTaskValidation} from "../middlewares/validations/task.validation.js"
import { authenticate, authorizeRoles } from "../middlewares/auth.middleware.js";

export const taskRouter = Router();

// Ruta para crear un pedido
taskRouter.post("/tasks", authenticate, authorizeRoles("familiar"), createTaskValidation, validate, createTask);

// Ruta para traer todos los pedidos
taskRouter.get("/tasks", authenticate, getAllTasks);

// Ruta para traer un pedido por id
taskRouter.get("/tasks/:id", authenticate, getTaskById);

// Ruta para actualizar un pedido (también sirve para cambiar su estado)
taskRouter.put("/tasks/:id", authenticate, authorizeRoles("asistente"), updateTask);

// Ruta para eliminar un pedido
taskRouter.delete("/tasks/:id", authenticate, authorizeRoles("familiar"), deleteTask);