import { Valoracion } from "../models/index.js";

// El familiar valora al asistente que lo atendió en un pedido
export const createValoracion = async (req, res) => {
try {
    const { puntaje, comentario, taskId, familiarId, asistenteId } = req.body;
    if (!puntaje || !taskId || !familiarId || !asistenteId) {
    return res.status(400).json({
        message: "Debe indicar el puntaje, el pedido atendido, el familiar que realiza la valoración y el asistente valorado.",
    });
    }
    const valoracion = await Valoracion.create({ puntaje, comentario, taskId, familiarId, asistenteId });
    return res.status(201).json(valoracion);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getAllValoraciones = async (req, res) => {
try {
    return res.status(200).json(await Valoracion.findAll());
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getValoracionById = async (req, res) => {
try {
    const valoracion = await Valoracion.findByPk(req.params.id);
    if (!valoracion) return res.status(404).json({ message: "No se encontró la valoración solicitada." });
    return res.status(200).json(valoracion);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const updateValoracion = async (req, res) => {
try {
    const valoracion = await Valoracion.findByPk(req.params.id);
    if (!valoracion) return res.status(404).json({ message: "No se encontró la valoración solicitada." });
    await valoracion.update(req.body);
    return res.status(200).json(valoracion);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const deleteValoracion = async (req, res) => {
try {
    const valoracion = await Valoracion.findByPk(req.params.id);
    if (!valoracion) return res.status(404).json({ message: "No se encontró la valoración solicitada." });
    await valoracion.destroy();
    return res.status(200).json({ message: "La valoración fue eliminada correctamente." });
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};