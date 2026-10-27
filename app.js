import "dotenv/config"
import express from "express";
import { startDB } from "./src/config/database.js";
import { Role } from "./src/models/index.js"; // carga los modelos y las relaciones

import { personRouter } from "./src/routes/person.routes.js";
import { userRouter } from "./src/routes/user.routes.js";
import { roleRouter } from "./src/routes/role.routes.js";
import { userRoleRouter } from "./src/routes/user_role.routes.js";
import { userFamiliarRouter } from "./src/routes/userfamiliar.routes.js";
import { userAsistenteRouter } from "./src/routes/userasistente.routes.js";
import { taskRouter } from "./src/routes/task.routes.js";
import { disponibilidadRouter } from "./src/routes/disponibilidad.routes.js";
import { mensajeRouter } from "./src/routes/mensaje.routes.js";
import { notificacionRouter } from "./src/routes/notificacion.routes.js";
import { valoracionRouter } from "./src/routes/valoracion.routes.js";
import { authRouter } from "./src/routes/auth.routes.js";


const app = express ();
const PORT = 3000;

app.use(express.json());

//configuracion de las rutas 

app.use("/api", personRouter);
app.use("/api", userRouter);
app.use("/api", roleRouter);
app.use("/api", userRoleRouter);
app.use("/api", userFamiliarRouter);
app.use("/api", userAsistenteRouter);
app.use("/api", taskRouter);
app.use("/api", disponibilidadRouter);
app.use("/api", mensajeRouter);
app.use("/api", notificacionRouter);
app.use("/api", valoracionRouter);
app.use("/api", authRouter);


app.listen(PORT, async () => {
  await startDB(); // conecta a la base y crea las tablas con sync()

  // Crea los roles una sola vez (si ya existen, no los duplica)
  await Role.findOrCreate({ where: { nombre: "familiar" } });
  await Role.findOrCreate({ where: { nombre: "asistente" } });

  console.log("El servidor listo");
});




