import { Notificacion } from "../models/index.js";

export const createNotificacion = async (req, res) => {
try {
    const { texto, tipo, userId, taskId } = req.body;
    if (!texto || !tipo || !userId) {
    return res.status(400).json({
        message: "Debe indicar el texto, el tipo de notificación y el usuario que la recibirá.",
    });
    }
    const notificacion = await Notificacion.create({ texto, tipo, userId, taskId });
    return res.status(201).json(notificacion);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getAllNotificaciones = async (req, res) => {
try {
    return res.status(200).json(await Notificacion.findAll());
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getNotificacionById = async (req, res) => {
try {
    const notificacion = await Notificacion.findByPk(req.params.id);
    if (!notificacion) return res.status(404).json({ message: "No se encontró la notificación solicitada." });
    return res.status(200).json(notificacion);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const updateNotificacion = async (req, res) => {
try {
    const notificacion = await Notificacion.findByPk(req.params.id);
    if (!notificacion) return res.status(404).json({ message: "No se encontró la notificación solicitada." });
    await notificacion.update(req.body);
    return res.status(200).json(notificacion);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const deleteNotificacion = async (req, res) => {
try {
    const notificacion = await Notificacion.findByPk(req.params.id);
    if (!notificacion) return res.status(404).json({ message: "No se encontró la notificación solicitada." });
    await notificacion.destroy();
    return res.status(200).json({ message: "La notificación fue eliminada correctamente." });
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};