import { UserFamiliar } from "../models/index.js";

export const createUserFamiliar = async (req, res) => {
try {
    const { userId, nombreAdulto, edadAdulto, necesidades } = req.body;
    if (!userId || !nombreAdulto) {
    return res.status(400).json({
        message: "Debe indicar el usuario y el nombre del adulto mayor que requiere asistencia.",
    });
    }
    const familiar = await UserFamiliar.create({ userId, nombreAdulto, edadAdulto, necesidades });
    return res.status(201).json(familiar);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getAllUserFamiliares = async (req, res) => {
try {
    return res.status(200).json(await UserFamiliar.findAll());
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getUserFamiliarById = async (req, res) => {
try {
    const familiar = await UserFamiliar.findByPk(req.params.id);
    if (!familiar) return res.status(404).json({ message: "No se encontró el perfil del familiar solicitado." });
    return res.status(200).json(familiar);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const updateUserFamiliar = async (req, res) => {
try {
    const familiar = await UserFamiliar.findByPk(req.params.id);
    if (!familiar) return res.status(404).json({ message: "No se encontró el perfil del familiar solicitado." });
    await familiar.update(req.body);
    return res.status(200).json(familiar);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const deleteUserFamiliar = async (req, res) => {
try {
    const familiar = await UserFamiliar.findByPk(req.params.id);
    if (!familiar) return res.status(404).json({ message: "No se encontró el perfil del familiar solicitado." });
    await familiar.destroy();
    return res.status(200).json({ message: "El perfil del familiar fue eliminado correctamente." });
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};