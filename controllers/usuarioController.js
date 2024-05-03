import db from '../config/db.js';
import { getAllUsers, registerUser, getUserById, updateUser, deleteUser } from '../models/usuarioModel.js';

const getAllUser = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener todos los usuarios:', error);
    res.status(500).json({ message: 'Error al obtener todos los usuarios' });
  }
};

// registrar un nuevo usuario
const createUser = async (req, res) => {
  try {
    const userId = await registerUser(req.body);
    res.status(201).json({ message: 'Usuario registrado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
};

// obtener un usuario
const getUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await getUserById(user_id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuario' });
  }
};

// actualizar datos de usuario
const updateUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    await updateUser(id, req.body);
    res.json({ message: 'Datos de usuario actualizados correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar datos de usuario' });
  }
};

// eliminar usuario
const deleteUserAccount = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar usuario' });
  }
};

export { getAllUser, createUser, getUser, updateUserDetails, deleteUserAccount };
