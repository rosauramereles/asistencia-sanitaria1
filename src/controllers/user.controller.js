import bcrypt from "bcrypt";
import { User } from "../models/index.js";

export const createUser = async (req, res) => {
try {
    const { email, password, personId } = req.body;
    if (!email || !password || !personId) {
    return res.status(400).json({
        message: "Debe completar el correo electrónico, la contraseña e indicar a qué persona pertenece la cuenta.",
    });
    }

    const existe = await User.findOne({ where: { email } });
    if (existe) {
    return res.status(400).json({ message: "El correo electrónico ya se encuentra registrado." });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash, personId });
    return res.status(201).json({ id: user.id, email: user.email, personId: user.personId });
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getAllUsers = async (req, res) => {
try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    return res.status(200).json(users);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getUserById = async (req, res) => {
try {
    const user = await User.findByPk(req.params.id, { attributes: { exclude: ["password"] } });
    if (!user) return res.status(404).json({ message: "No se encontró el usuario solicitado." });
    return res.status(200).json(user);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const updateUser = async (req, res) => {
try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "No se encontró el usuario solicitado." });

    const { email, password } = req.body;
    const datos = {};
    if (email) datos.email = email;
    if (password) datos.password = await bcrypt.hash(password, 10);

    await user.update(datos);
    return res.status(200).json({ id: user.id, email: user.email });
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const deleteUser = async (req, res) => {
try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "No se encontró el usuario solicitado." });
    await user.destroy();
    return res.status(200).json({ message: "El usuario fue eliminado correctamente." });
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};