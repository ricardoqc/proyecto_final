import db from '../config/db.js';

// obtener las publicaciones
const getPosts = async () => {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM publicacion');
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error al obtener publicaciones:', error);
    throw error;
  }
};

// obtener las publicaciones de un usuario
const getPostsByUserId = async (userId) => {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM publicacion WHERE ID_usuario = ?', [userId]);
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error al obtener las publicaciones del usuario:', error);
    throw error;
  }
};

// obtener publicaciones por categoría
const getPostsByCategory = async (categoryId) => {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM publicacion WHERE categoria_id = ?', [categoryId]);
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error al obtener publicaciones por categoría:', error);
    throw error;
  }
};

// buscar publicaciones por título
const searchPostsByTitle = async (title) => {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM publicacion WHERE titulo LIKE ?', [`%${title}%`]);
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error al buscar publicaciones por título:', error);
    throw error;
  }
};

// crear una nueva publicación
const createPost = async (postData) => {
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query('INSERT INTO publicacion SET ?', [postData]);
    connection.release();
    return { id: result.insertId, ...postData }; // Devolver el ID de la nueva publicación y los datos proporcionados
  } catch (error) {
    console.error('Error al crear la publicación:', error);
    throw error;
  }
};

export { getPosts, getPostsByCategory, searchPostsByTitle, getPostsByUserId, createPost };