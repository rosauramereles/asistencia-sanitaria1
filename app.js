import express from "express";
import { startDB } from "./src/config/database.js";

const app = express ();
const PORT = 3000;

app.use(express.json());

//configuracion de las rutas 


app.listen(PORT,async () => {
  await startDB();
  console.log ("El servidor listo")
});





