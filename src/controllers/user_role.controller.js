import { UserRole } from "../models/index.js";

export const createUserRole = async (req, res) => {
try {
    const { userId, roleId } = req.body;
    if (!userId || !roleId) {
    return res.status(400).json({ message: "Debe indicar el usuario y el rol que desea asignar." });
    }
    const userRole = await UserRole.create({ userId, roleId });
    return res.status(201).json(userRole);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getAllUserRoles = async (req, res) => {
try {
    return res.status(200).json(await UserRole.findAll());
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const deleteUserRole = async (req, res) => {
try {
    const { userId, roleId } = req.params;
    const userRole = await UserRole.findOne({ where: { userId, roleId } });
    if (!userRole) {
    return res.status(404).json({ message: "No se encontró el rol asignado a ese usuario." });
    }
    await userRole.destroy();
    return res.status(200).json({ message: "El rol fue quitado del usuario correctamente." });
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};