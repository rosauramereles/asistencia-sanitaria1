import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.js";
import { registerValidation, loginValidation } from "../middlewares/validations/auth.validation.js";

export const authRouter = Router();

authRouter.post("/auth/register", registerValidation, validate, register);
authRouter.post("/auth/login", loginValidation, validate, login);