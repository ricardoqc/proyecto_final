import db from '../config/db.js';

// obtener comentarios
const getCommentsByPostId = async (ID_publicacion) => {
  try {
    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT * FROM comentario WHERE ID_publicacion = ?', [ID_publicacion]);
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error al obtener comentarios por ID de publicación:', error);
    throw error;
  }
};

// crear un nuevo comentario
const createComment = async (commentData) => {
  try {
    const connection = await db.getConnection();
    const [result] = await connection.query('INSERT INTO comentario SET ?', [commentData]);
    connection.release();
    return result.insertId;
  } catch (error) {
    console.error('Error al crear comentario:', error);
    throw error;
  }
};

// actualizar un comentario
const updateCommentById = async (commentId, newData) => {
  try {
    const connection = await db.getConnection();
    await connection.query('UPDATE comentario SET ? WHERE ID = ?', [newData, commentId]);
    connection.release();
  } catch (error) {
    console.error('Error al actualizar comentario:', error);
    throw error;
  }
};

// eliminar un comentario
const deleteCommentById = async (commentId) => {
  try {
    const connection = await db.getConnection();
    await connection.query('DELETE FROM comentario WHERE ID = ?', [commentId]);
    connection.release();
  } catch (error) {
    console.error('Error al eliminar comentario:', error);
    throw error;
  }
};

export { getCommentsByPostId, createComment, updateCommentById, deleteCommentById };
