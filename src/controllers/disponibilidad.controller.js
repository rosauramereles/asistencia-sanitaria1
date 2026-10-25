import { Disponibilidad } from "../models/index.js";

export const createDisponibilidad = async (req, res) => {
try {
    const { dia, horaInicio, horaFin, asistenteId } = req.body;
    if (!dia || !horaInicio || !horaFin || !asistenteId) {
    return res.status(400).json({
        message: "Debe indicar el día, el horario de inicio, el horario de fin y el asistente.",
    });
    }
    const disponibilidad = await Disponibilidad.create({ dia, horaInicio, horaFin, asistenteId });
    return res.status(201).json(disponibilidad);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getAllDisponibilidades = async (req, res) => {
try {
    return res.status(200).json(await Disponibilidad.findAll());
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getDisponibilidadById = async (req, res) => {
try {
    const disponibilidad = await Disponibilidad.findByPk(req.params.id);
    if (!disponibilidad) return res.status(404).json({ message: "No se encontró el horario solicitado." });
    return res.status(200).json(disponibilidad);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const updateDisponibilidad = async (req, res) => {
try {
    const disponibilidad = await Disponibilidad.findByPk(req.params.id);
    if (!disponibilidad) return res.status(404).json({ message: "No se encontró el horario solicitado." });
    await disponibilidad.update(req.body);
    return res.status(200).json(disponibilidad);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const deleteDisponibilidad = async (req, res) => {
try {
    const disponibilidad = await Disponibilidad.findByPk(req.params.id);
    if (!disponibilidad) return res.status(404).json({ message: "No se encontró el horario solicitado." });
    await disponibilidad.destroy();
    return res.status(200).json({ message: "El horario fue eliminado correctamente." });
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};