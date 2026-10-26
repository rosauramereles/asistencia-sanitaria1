import { body } from "express-validator";

export const createUserAsistenteValidation = [
  body("userId").notEmpty().withMessage("Debe indicar el usuario al que pertenece el perfil."),
  body("tarifa").optional().isFloat({ min: 0 }).withMessage("La tarifa debe ser un número mayor a 0."),
];

export const updateUserAsistenteValidation = [
  body("tarifa").optional().isFloat({ min: 0 }).withMessage("La tarifa debe ser un número mayor a 0."),
  body("disponibleAhora")
    .optional()
    .isBoolean()
    .withMessage("La disponibilidad actual debe indicarse como verdadero o falso."),
];