import { body } from "express-validator";

export const createTaskValidation = [
  body("titulo").notEmpty().withMessage("Debe ingresar el título del pedido."),
  body("familiarId").notEmpty().withMessage("Debe indicar el familiar que realiza el pedido."),
  body("asistenteId").notEmpty().withMessage("Debe indicar el asistente que recibirá el pedido."),
  body("fecha").optional().isISO8601().withMessage("La fecha debe tener el formato AAAA-MM-DD."),
];

export const updateTaskValidation = [
  body("titulo").optional().notEmpty().withMessage("El título del pedido no puede quedar vacío."),
  body("fecha").optional().isISO8601().withMessage("La fecha debe tener el formato AAAA-MM-DD."),
  body("estado")
    .optional()
    .isIn(["pendiente", "aceptada", "rechazada", "finalizada"])
    .withMessage("El estado del pedido debe ser: pendiente, aceptada, rechazada o finalizada."),
];