import express from "express";
import { startDB } from "./src/config/database.js";
import { Role } from "./src/models/index.js"; // carga los modelos y las relaciones


const app = express ();
const PORT = 3000;

app.use(express.json());

//configuracion de las rutas 

app.listen(PORT, async () => {
  await startDB(); // conecta a la base y crea las tablas con sync()

  // Crea los roles una sola vez (si ya existen, no los duplica)
  await Role.findOrCreate({ where: { nombre: "familiar" } });
  await Role.findOrCreate({ where: { nombre: "asistente" } });

  console.log("El servidor listo");
});




