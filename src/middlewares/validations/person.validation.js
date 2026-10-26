import { body } from "express-validator";

export const createPersonValidation = [
  body("nombre").notEmpty().withMessage("Debe ingresar el nombre."),
  body("apellido").notEmpty().withMessage("Debe ingresar el apellido."),
];

export const updatePersonValidation = [
  body("nombre").optional().notEmpty().withMessage("El nombre no puede quedar vacío."),
  body("apellido").optional().notEmpty().withMessage("El apellido no puede quedar vacío."),
];