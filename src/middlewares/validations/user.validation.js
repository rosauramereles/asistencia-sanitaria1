import { body } from "express-validator";

export const createUserValidation = [
  body("email")
    .notEmpty()
    .withMessage("Debe ingresar el correo electrónico.")
    .isEmail()
    .withMessage("El correo electrónico ingresado no es válido."),
  body("password")
    .notEmpty()
    .withMessage("Debe ingresar la contraseña.")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres."),
  body("personId").notEmpty().withMessage("Debe indicar la persona a la que pertenece la cuenta."),
];

export const updateUserValidation = [
  body("email")
    .optional()
    .notEmpty()
    .withMessage("El correo electrónico no puede quedar vacío.")
    .isEmail()
    .withMessage("El correo electrónico ingresado no es válido."),
  body("password")
    .optional()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres."),
];