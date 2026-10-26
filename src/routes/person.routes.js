import { Router } from "express";
import { createPerson, 
        getAllPeople, 
        getPersonById, 
        updatePerson,
        deletePerson
} from "../controllers/person.controller.js";
import { validate } from "../middlewares/validate.js";
import {createPersonValidation, updatePersonValidation} from "../middlewares/validations/person.validation.js"


export const personRouter = Router();

// Ruta para crear una persona
personRouter.post("/people", createPerson);

// Ruta para traer todas las personas
personRouter.get("/people", getAllPeople);

// Ruta para traer una persona por id
personRouter.get("/people/:id", getPersonById);

// Ruta para actualizar una persona
personRouter.put("/people/:id",updatePerson);

// Ruta para eliminar una persona
personRouter.delete("/people/:id", deletePerson);