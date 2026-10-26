import { Router } from "express";
import { createRole, 
        deleteRole, 
        getAllRoles,
        getRoleById, 
        updateRole 
} from "../controllers/role.controller.js";
import {validate} from "../middlewares/validate.js"
import {createRoleValidation, updateRoleValidation} from "../middlewares/validations/role.validation.js"

export const roleRouter = Router();

// Ruta para crear un rol
roleRouter.post("/roles", createRole);

// Ruta para traer todos los roles
roleRouter.get("/roles", getAllRoles);

// Ruta para traer un rol por id
roleRouter.get("/roles/:id", getRoleById);

// Ruta para actualizar un rol
roleRouter.put("/roles/:id", updateRole);

// Ruta para eliminar un rol
roleRouter.delete("/roles/:id", deleteRole);