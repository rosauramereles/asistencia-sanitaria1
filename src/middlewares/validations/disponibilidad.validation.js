import { body } from "express-validator";

const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
const formatoHora = /^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/;

export const createDisponibilidadValidation = [
  body("dia")
    .notEmpty()
    .withMessage("Debe indicar el día de la semana.")
    .bail()
    .isIn(dias)
    .withMessage("El día debe ser: lunes, martes, miercoles, jueves, viernes, sabado o domingo."),
  body("horaInicio")
    .notEmpty()
    .withMessage("Debe indicar la hora de inicio.")
    .bail()
    .matches(formatoHora)
    .withMessage("La hora de inicio debe tener el formato HH:MM, por ejemplo 08:00."),
  body("horaFin")
    .notEmpty()
    .withMessage("Debe indicar la hora de finalización.")
    .bail()
    .matches(formatoHora)
    .withMessage("La hora de finalización debe tener el formato HH:MM, por ejemplo 12:00.")
    .bail()
    .custom((horaFin, { req }) => {
      const inicio = req.body.horaInicio;
      if (inicio && horaFin.slice(0, 5) <= inicio.slice(0, 5)) {
        throw new Error("La hora de finalización debe ser posterior a la hora de inicio.");
      }
      return true;
    }),
  body("barrio")
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Debe indicar el barrio en el que atiende (entre 2 y 100 caracteres)."),
  body("asistenteId").notEmpty().withMessage("Debe indicar el asistente al que pertenece el horario."),
];

export const updateDisponibilidadValidation = [
  body("dia")
    .optional()
    .isIn(dias)
    .withMessage("El día debe ser: lunes, martes, miercoles, jueves, viernes, sabado o domingo."),
  body("horaInicio")
    .optional()
    .matches(formatoHora)
    .withMessage("La hora de inicio debe tener el formato HH:MM, por ejemplo 08:00."),
  body("horaFin")
    .optional()
    .matches(formatoHora)
    .withMessage("La hora de finalización debe tener el formato HH:MM, por ejemplo 12:00.")
    .bail()
    .custom((horaFin, { req }) => {
      const inicio = req.body.horaInicio;
      if (inicio && horaFin.slice(0, 5) <= inicio.slice(0, 5)) {
        throw new Error("La hora de finalización debe ser posterior a la hora de inicio.");
      }
      return true;
    }),
  body("barrio")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("El barrio debe tener entre 2 y 100 caracteres."),
];