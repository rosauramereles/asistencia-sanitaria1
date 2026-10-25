import { Mensaje } from "../models/index.js";

export const createMensaje = async (req, res) => {
try {
    const { texto, taskId, emisorId } = req.body;
    if (!texto || !taskId || !emisorId) {
    return res.status(400).json({
        message: "Debe escribir el mensaje e indicar el pedido y la persona que lo envía.",
    });
    }
    const mensaje = await Mensaje.create({ texto, taskId, emisorId });
    // TODO: acá después se envía el correo electrónico (nodemailer)
    return res.status(201).json(mensaje);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getAllMensajes = async (req, res) => {
try {
    return res.status(200).json(await Mensaje.findAll());
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getMensajeById = async (req, res) => {
try {
    const mensaje = await Mensaje.findByPk(req.params.id);
    if (!mensaje) return res.status(404).json({ message: "No se encontró el mensaje solicitado." });
    return res.status(200).json(mensaje);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const updateMensaje = async (req, res) => {
try {
    const mensaje = await Mensaje.findByPk(req.params.id);
    if (!mensaje) return res.status(404).json({ message: "No se encontró el mensaje solicitado." });
    await mensaje.update(req.body);
    return res.status(200).json(mensaje);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const deleteMensaje = async (req, res) => {
try {
    const mensaje = await Mensaje.findByPk(req.params.id);
    if (!mensaje) return res.status(404).json({ message: "No se encontró el mensaje solicitado." });
    await mensaje.destroy();
    return res.status(200).json({ message: "El mensaje fue eliminado correctamente." });
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};