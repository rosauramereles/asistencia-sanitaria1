import { Router } from "express";
import { createUserFamiliar,
        deleteUserFamiliar,
        getAllUserFamiliares,
        getUserFamiliarById, 
        updateUserFamiliar 
} from "../controllers/userfamiliar.controller.js";

export const userFamiliarRouter = Router();

// Ruta para crear el perfil de un familiar
userFamiliarRouter.post("/familiares", createUserFamiliar);

// Ruta para traer todos los familiares
userFamiliarRouter.get("/familiares", getAllUserFamiliares);

// Ruta para traer un familiar por id
userFamiliarRouter.get("/familiares/:id", getUserFamiliarById);

// Ruta para actualizar el perfil de un familiar
userFamiliarRouter.put("/familiares/:id", updateUserFamiliar);

// Ruta para eliminar el perfil de un familiar
userFamiliarRouter.delete("/familiares/:id", deleteUserFamiliar);