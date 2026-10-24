// Acá seria el index.js con las relaciones
import { sequelize } from "../config/database.js";
import { Person } from "./person.model.js";
import { User } from "./user.model.js";
import { Role } from "./role.model.js";
import { UserRole } from "./user_role.model.js";
import { UserFamiliar } from "./userfamiliar.model.js";
import { UserAsistente } from "./userasistente.model.js";
import { Task } from "./task.model.js";
import { Disponibilidad } from "./disponibilidad.model.js";
import { Mensaje } from "./mensaje.model.js";
import { Notificacion } from "./notificacion.model.js";
import { Valoracion } from "./valoracion.model.js";

/* ================= UNO A UNO (1:1) ================= */

// Una Person tiene UN User (su cuenta)
Person.hasOne(User,    { foreignKey: "personId" });
User.belongsTo(Person, { foreignKey: "personId" });

// Un User tiene UN perfil de familiar (si su rol es familiar)
User.hasOne(UserFamiliar,    { foreignKey: "userId" });
UserFamiliar.belongsTo(User, { foreignKey: "userId" });

// Un User tiene UN perfil de asistente (si su rol es asistente)
User.hasOne(UserAsistente,    { foreignKey: "userId" });
UserAsistente.belongsTo(User, { foreignKey: "userId" });

// Una Task tiene UNA valoración (se valora cuando está finalizada)
Task.hasOne(Valoracion,    { foreignKey: "taskId" });
Valoracion.belongsTo(Task, { foreignKey: "taskId" });


/* ================= UNO A MUCHOS (1:N) ================= */

// Un familiar crea MUCHAS tasks (pedidos)
UserFamiliar.hasMany(Task,   { foreignKey: "familiarId" });
Task.belongsTo(UserFamiliar, { foreignKey: "familiarId" });

// Un asistente recibe MUCHAS tasks
UserAsistente.hasMany(Task,  { foreignKey: "asistenteId" });
Task.belongsTo(UserAsistente, { foreignKey: "asistenteId" });

// Un asistente tiene MUCHAS franjas de agenda
UserAsistente.hasMany(Disponibilidad,   { foreignKey: "asistenteId" });
Disponibilidad.belongsTo(UserAsistente, { foreignKey: "asistenteId" });

// Una Task tiene MUCHOS mensajes (la conversación por email)
Task.hasMany(Mensaje,    { foreignKey: "taskId" });
Mensaje.belongsTo(Task,  { foreignKey: "taskId" });

// Un User envía MUCHOS mensajes (emisor)
User.hasMany(Mensaje,    { foreignKey: "emisorId" });
Mensaje.belongsTo(User,  { foreignKey: "emisorId", as: "emisor" });

// Un User recibe MUCHAS notificaciones
User.hasMany(Notificacion,    { foreignKey: "userId" });
Notificacion.belongsTo(User,  { foreignKey: "userId" });

// Una Task genera MUCHAS notificaciones
Task.hasMany(Notificacion,    { foreignKey: "taskId" });
Notificacion.belongsTo(Task,  { foreignKey: "taskId" });

// Un asistente recibe MUCHAS valoraciones (para el promedio de su perfil)
UserAsistente.hasMany(Valoracion,   { foreignKey: "asistenteId" });
Valoracion.belongsTo(UserAsistente, { foreignKey: "asistenteId" });

// Un familiar escribe MUCHAS valoraciones
UserFamiliar.hasMany(Valoracion,   { foreignKey: "familiarId" });
Valoracion.belongsTo(UserFamiliar, { foreignKey: "familiarId" });


/* ================= MUCHOS A MUCHOS (N:M) ================= */

// Un User puede tener MUCHOS roles
User.belongsToMany(Role, { through: UserRole, foreignKey: "userId", otherKey: "roleId" });
// Un Role lo tienen MUCHOS users
Role.belongsToMany(User, { through: UserRole, foreignKey: "roleId", otherKey: "userId" });

export {
sequelize, Person, User, Role, UserRole, UserFamiliar, UserAsistente,
Task, Disponibilidad, Mensaje, Notificacion, Valoracion,
};