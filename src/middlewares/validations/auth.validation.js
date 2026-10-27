import { body } from "express-validator";

export const registerValidation = [
  body("nombre").notEmpty().withMessage("Debe ingresar el nombre."),
  body("apellido").notEmpty().withMessage("Debe ingresar el apellido."),
  body("email")
    .notEmpty().withMessage("Debe ingresar el correo electrónico.").bail()
    .isEmail().withMessage("El correo electrónico ingresado no es válido."),
  body("password")
    .notEmpty().withMessage("Debe ingresar la contraseña.").bail()
    .isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres."),
  body("rol")
    .notEmpty().withMessage("Debe indicar si se registra como familiar o asistente.").bail()
    .isIn(["familiar", "asistente"]).withMessage("El rol debe ser familiar o asistente."),
  body("nombreAdulto")
    .if(body("rol").equals("familiar"))
    .notEmpty().withMessage("Debe ingresar el nombre del adulto mayor."),
];

export const loginValidation = [
  body("email").notEmpty().withMessage("Debe ingresar el correo electrónico."),
  body("password").notEmpty().withMessage("Debe ingresar la contraseña."),
];