import { verifyToken } from "../helpers/jwt.helper.js";

// Autenticación: revisa que haya iniciado sesión
export const authenticate = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Debe iniciar sesión para realizar esta acción." });
  }

  try {
    req.user = verifyToken(header.split(" ")[1]); // { id, roles, perfilId }
    next();
  } catch (error) {
    return res.status(401).json({ message: "La sesión no es válida o ha expirado. Inicie sesión nuevamente." });
  }
};

// Autorización: revisa que tenga el rol permitido
export const authorizeRoles = (...rolesPermitidos) => {
  return (req, res, next) => {
    const tienePermiso = req.user.roles.some((rol) => rolesPermitidos.includes(rol));
    if (!tienePermiso) {
      return res.status(403).json({ message: "No tiene permisos para realizar esta acción." });
    }
    next();
  };
};