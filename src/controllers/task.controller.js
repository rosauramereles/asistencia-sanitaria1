import { Task } from "../models/index.js";

export const createTask = async (req, res) => {
  try {
    const { titulo, descripcion, fecha, familiarId, asistenteId } = req.body;
    if (!titulo || !familiarId || !asistenteId) {
      return res.status(400).json({
        message: "Debe completar el título del pedido e indicar el familiar y el asistente involucrados.",
      });
    }
    const task = await Task.create({ titulo, descripcion, fecha, familiarId, asistenteId });
    return res.status(201).json(task);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Ocurrió un error interno del servidor. Intente nuevamente más tarde." });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    return res.status(200).json(await Task.findAll());
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Ocurrió un error interno del servidor. Intente nuevamente más tarde." });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: "No se encontró el pedido solicitado." });
    return res.status(200).json(task);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Ocurrió un error interno del servidor. Intente nuevamente más tarde." });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: "No se encontró el pedido solicitado." });
    await task.update(req.body);
    return res.status(200).json(task);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Ocurrió un error interno del servidor. Intente nuevamente más tarde." });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).json({ message: "No se encontró el pedido solicitado." });
    await task.destroy();
    return res.status(200).json({ message: "El pedido fue eliminado correctamente." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Ocurrió un error interno del servidor. Intente nuevamente más tarde." });
  }
};