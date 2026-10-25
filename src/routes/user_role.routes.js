import { Router } from "express";
import { createUserRole,
        deleteUserRole, 
        getAllUserRoles
} from "../controllers/user_role.controller.js";

export const userRoleRouter = Router();

// Ruta para asignarle un rol a un usuario
userRoleRouter.post("/user-roles", createUserRole);

// Ruta para traer todas las asignaciones de roles
userRoleRouter.get("/user-roles", getAllUserRoles);

// Ruta para quitarle un rol a un usuario (lleva el usuario y el rol)
userRoleRouter.delete("/user-roles/:userId/:roleId", deleteUserRole);