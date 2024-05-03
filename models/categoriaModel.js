import db from '../config/db.js';

// todas las categorías
const getCategories = async () => {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM categoria');
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    throw error;
  }
};

// nueva categoría
const createCategory = async (nombre) => {
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query('INSERT INTO categoria SET nombre = ?', [nombre]);
    connection.release();
    return result.insertId;
  } catch (error) {
    console.error('Error al crear categoría:', error);
    throw error;
  }
};

// actualizar una categoría
const updateCategory = async (id, nombre) => {
  try {
    const connection = await db.getConnection();
    await connection.query('UPDATE categoria SET nombre = ? WHERE id = ?', [nombre, id]);
    connection.release();
  } catch (error) {
    console.error('Error al actualizar categoría:', error);
    throw error;
  }
};

// eliminar una categoría
const deleteCategory = async (id) => {
  try {
    const connection = await db.getConnection();
    await connection.query('DELETE FROM categoria WHERE id = ?', [id]);
    connection.release();
  } catch (error) {
    console.error('Error al eliminar categoría:', error);
    throw error;
  }
};

export { getCategories, createCategory, updateCategory, deleteCategory };
