import { body } from "express-validator";

export const createUserFamiliarValidation = [
  body("userId").notEmpty().withMessage("Debe indicar el usuario al que pertenece el perfil."),
  body("nombreAdulto").notEmpty().withMessage("Debe ingresar el nombre del adulto mayor."),
  body("edadAdulto")
    .optional()
    .isInt({ min: 0, max: 120 })
    .withMessage("La edad del adulto mayor debe estar entre 0 y 120 años."),
];

export const updateUserFamiliarValidation = [
  body("nombreAdulto").optional().notEmpty().withMessage("El nombre del adulto mayor no puede quedar vacío."),
  body("edadAdulto")
    .optional()
    .isInt({ min: 0, max: 120 })
    .withMessage("La edad del adulto mayor debe estar entre 0 y 120 años."),
];