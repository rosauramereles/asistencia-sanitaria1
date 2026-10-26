import { body } from "express-validator";

export const createNotificacionValidation = [
  body("texto").notEmpty().withMessage("Debe ingresar el texto de la notificación."),
  body("tipo")
    .notEmpty()
    .withMessage("Debe indicar el tipo de notificación.")
    .isIn(["nueva_task", "nuevo_mensaje", "task_actualizada"])
    .withMessage("El tipo de notificación debe ser: nueva_task, nuevo_mensaje o task_actualizada."),
  body("userId").notEmpty().withMessage("Debe indicar el usuario que recibirá la notificación."),
];

export const updateNotificacionValidation = [
  body("leida").optional().isBoolean().withMessage("El estado de lectura debe indicarse como verdadero o falso."),
];