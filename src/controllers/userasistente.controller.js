import { UserAsistente, Disponibilidad, User, Person } from "../models/index.js";

const incluirDatosPersonales = {
  model: User,
  attributes: ["id", "email"],
  include: [{ model: Person, attributes: ["nombre", "apellido", "telefono"] }],
};

export const createUserAsistente = async (req, res) => {
  try {
    const { userId, foto, descripcion, experiencia, especialidad, zona, tarifa } = req.body;
    if (!userId) {
      return res.status(400).json({ message: "Debe indicar el usuario al que pertenece el perfil del asistente." });
    }
    const asistente = await UserAsistente.create({
      userId, foto, descripcion, experiencia, especialidad, zona, tarifa,
    });
    return res.status(201).json(asistente);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
  }
};

export const getAllUserAsistentes = async (req, res) => {
  try {
    const asistentes = await UserAsistente.findAll({ include: [incluirDatosPersonales] });
    return res.status(200).json(asistentes);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
  }
};

export const getUserAsistenteById = async (req, res) => {
  try {
    const asistente = await UserAsistente.findByPk(req.params.id, {
      include: [incluirDatosPersonales, Disponibilidad],
    });
    if (!asistente) return res.status(404).json({ message: "No se encontró el perfil del asistente solicitado." });
    return res.status(200).json(asistente);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
  }
};

export const updateUserAsistente = async (req, res) => {
  try {
    const asistente = await UserAsistente.findByPk(req.params.id);
    if (!asistente) return res.status(404).json({ message: "No se encontró el perfil del asistente solicitado." });
    await asistente.update(req.body);
    return res.status(200).json(asistente);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
  }
};

export const deleteUserAsistente = async (req, res) => {
  try {
    const asistente = await UserAsistente.findByPk(req.params.id);
    if (!asistente) return res.status(404).json({ message: "No se encontró el perfil del asistente solicitado." });
    await asistente.destroy();
    return res.status(200).json({ message: "El perfil del asistente fue eliminado correctamente." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
  }
};