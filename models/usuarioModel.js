import db from '../config/db.js';

const SQL_SELECT_ALL_USERS = 'SELECT * FROM usuario';

// todos los usuarios
const getAllUsers = async () => {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query(SQL_SELECT_ALL_USERS);
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error al obtener todos los usuarios:', error);
    throw error;
  }
};

// registrar un nuevo usuario
const registerUser = async (userData) => {
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query('INSERT INTO usuario SET ?', [userData]);
    connection.release();
    return result.insertId;
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    throw error;
  }
};

// obtener un usuario por su ID
const getUserById = async (userId) => {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM usuario WHERE id = ?', [userId]);
    connection.release();
    return rows[0];
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error);
    throw error;
  }
};

// actualizar los datos de un usuario
const updateUser = async (userId, userData) => {
  try {
    const connection = await db.getConnection();
    await connection.query('UPDATE usuario SET ? WHERE id = ?', [userData, userId]);
    connection.release();
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    throw error;
  }
};

// eliminar un usuario
const deleteUser = async (userId) => {
  try {
    const connection = await db.getConnection();
    await connection.query('DELETE FROM usuario WHERE id = ?', [userId]);
    connection.release();
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    throw error;
  }
};

export { registerUser, getUserById, updateUser, deleteUser, getAllUsers };