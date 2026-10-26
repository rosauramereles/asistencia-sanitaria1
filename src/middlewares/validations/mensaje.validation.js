import { body } from "express-validator";

export const createMensajeValidation = [
  body("texto").notEmpty().withMessage("Debe escribir el mensaje."),
  body("taskId").notEmpty().withMessage("Debe indicar el pedido al que pertenece el mensaje."),
  body("emisorId").notEmpty().withMessage("Debe indicar quién envía el mensaje."),
];

export const updateMensajeValidation = [
  body("texto").optional().notEmpty().withMessage("El mensaje no puede quedar vacío."),
];