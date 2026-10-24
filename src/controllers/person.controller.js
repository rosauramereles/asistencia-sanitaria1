import { Person } from "../models/index.js";

export const createPerson = async (req, res) => {
try {
    const { nombre, apellido, telefono } = req.body;
    if (!nombre || !apellido) {
    return res.status(400).json({ message: "Debe completar el nombre y el apellido." });
    }
    const person = await Person.create({ nombre, apellido, telefono });
    return res.status(201).json(person);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getAllPeople = async (req, res) => {
try {
    return res.status(200).json(await Person.findAll());
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const getPersonById = async (req, res) => {
try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ message: "No se encontró la persona solicitada." });
    return res.status(200).json(person);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const updatePerson = async (req, res) => {
try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ message: "No se encontró la persona solicitada." });
    await person.update(req.body);
    return res.status(200).json(person);
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};

export const deletePerson = async (req, res) => {
try {
    const person = await Person.findByPk(req.params.id);
    if (!person) return res.status(404).json({ message: "No se encontró la persona solicitada." });
    await person.destroy();
    return res.status(200).json({ message: "La persona fue eliminada correctamente." });
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
}
};