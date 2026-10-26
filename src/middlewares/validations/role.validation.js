import { body } from "express-validator";

export const createRoleValidation = [
  body("nombre")
    .notEmpty()
    .withMessage("Debe ingresar el nombre del rol.")
    .isIn(["familiar", "asistente"])
    .withMessage("El rol debe ser familiar o asistente."),
];

export const updateRoleValidation = [
  body("nombre")
    .optional()
    .isIn(["familiar", "asistente"])
    .withMessage("El rol debe ser familiar o asistente."),
];