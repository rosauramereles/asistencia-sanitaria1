import { Role } from "../models/index.js";

export const createRole = async (req, res) => {
try {
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ message: "Debe completar el nombre del rol." });
    const role = await Role.create({ nombre });
    return res.status(201).json(role);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getAllRoles = async (req, res) => {
try {
    return res.status(200).json(await Role.findAll());
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getRoleById = async (req, res) => {
try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ message: "No se encontró el rol solicitado." });
    return res.status(200).json(role);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const updateRole = async (req, res) => {
try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ message: "No se encontró el rol solicitado." });
    await role.update(req.body);
    return res.status(200).json(role);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const deleteRole = async (req, res) => {
try {
    const role = await Role.findByPk(req.params.id);
    if (!role) return res.status(404).json({ message: "No se encontró el rol solicitado." });
    await role.destroy();
    return res.status(200).json({ message: "El rol fue eliminado correctamente." });
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};