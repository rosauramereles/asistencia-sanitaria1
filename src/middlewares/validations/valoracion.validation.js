import { body } from "express-validator";

export const createValoracionValidation = [
  body("puntaje")
    .notEmpty()
    .withMessage("Debe ingresar el puntaje.")
    .isInt({ min: 1, max: 10 })
    .withMessage("El puntaje debe ser un número entero entre 1 y 10."),
  body("taskId").notEmpty().withMessage("Debe indicar el pedido que se está valorando."),
  body("familiarId").notEmpty().withMessage("Debe indicar el familiar que realiza la valoración."),
  body("asistenteId").notEmpty().withMessage("Debe indicar el asistente que se está valorando."),
];

export const updateValoracionValidation = [
  body("puntaje")
    .optional()
    .isInt({ min: 1, max: 10 })
    .withMessage("El puntaje debe ser un número entero entre 1 y 10."),
];