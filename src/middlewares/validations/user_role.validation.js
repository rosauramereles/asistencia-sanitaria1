import { body } from "express-validator";

export const createUserRoleValidation = [
  body("userId").notEmpty().withMessage("Debe indicar el usuario al que se le asignará el rol."),
  body("roleId").notEmpty().withMessage("Debe indicar el rol que se asignará."),
];