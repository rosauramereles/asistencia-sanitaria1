import { Person, User, Role, UserFamiliar, UserAsistente } from "../models/index.js";
import { hashPassword, comparePassword } from "../helpers/bcrypt.helper.js";
import { generateToken } from "../helpers/jwt.helper.js";

// Registro completo (Del asistente y familiar)
export const register = async (req, res) => {
  try {
    const { nombre, apellido, telefono, email, password, rol, nombreAdulto, edadAdulto, necesidades } = req.body;

    const existe = await User.findOne({ where: { email } });
    if (existe) {
      return res.status(400).json({ message: "El correo electrónico ya se encuentra registrado." });
    }

    const role = await Role.findOne({ where: { nombre: rol } });
    if (!role) {
      return res.status(400).json({ message: "El rol indicado no es válido." });
    }

    const person = await Person.create({ nombre, apellido, telefono });
    const user = await User.create({
      email,
      password: await hashPassword(password),
      personId: person.id,
    });
    await user.addRole(role);

    if (rol === "asistente") {
      await UserAsistente.create({ userId: user.id });
    } else {
      await UserFamiliar.create({ userId: user.id, nombreAdulto, edadAdulto, necesidades });
    }

    return res.status(201).json({ message: "El usuario fue registrado correctamente." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
  }
};

// Login (Completado)
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email }, include: [Person, Role] });
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(401).json({ message: "El correo electrónico o la contraseña son incorrectos." });
    }

    const roles = user.Roles.map((r) => r.nombre);

    // Id del perfil según el rol
    const perfil = roles.includes("asistente")
      ? await UserAsistente.findOne({ where: { userId: user.id } })
      : await UserFamiliar.findOne({ where: { userId: user.id } });

    const token = generateToken({ id: user.id, roles, perfilId: perfil?.id });

    return res.status(200).json({
      message: "Inicio de sesión correcto.",
      token,
      usuario: {
        nombre: user.Person.nombre,
        apellido: user.Person.apellido,
        email: user.email,
        roles,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Intente nuevamente más tarde." });
  }
};