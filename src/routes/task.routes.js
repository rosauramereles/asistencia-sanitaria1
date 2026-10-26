import { Router } from "express";
import { createTask, 
        getAllTasks, 
        getTaskById, 
        updateTask,
        deleteTask 
} from "../controllers/task.controller.js";
import {validate} from "../middlewares/validate.js"
import {createTaskValidation, updateTaskValidation} from "../middlewares/validations/task.validation.js"

export const taskRouter = Router();

// Ruta para crear un pedido
taskRouter.post("/tasks", createTask);

// Ruta para traer todos los pedidos
taskRouter.get("/tasks", getAllTasks);

// Ruta para traer un pedido por id
taskRouter.get("/tasks/:id", getTaskById);

// Ruta para actualizar un pedido (también sirve para cambiar su estado)
taskRouter.put("/tasks/:id", updateTask);

// Ruta para eliminar un pedido
taskRouter.delete("/tasks/:id", deleteTask);