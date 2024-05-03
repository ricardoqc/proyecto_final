import { createComment, getCommentsByPostId, updateCommentById as updateCommentModel, deleteCommentById as deleteCommentModel } from '../models/comentarioModel.js';

// crear un nuevo comentario
const addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { ID_usuario, Contenido } = req.body;
    const commentData = { ID_publicacion: postId, ID_usuario, Contenido };
    const commentId = await createComment(commentData);
    res.status(201).json({ message: 'Se agregó el comentario' });
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar comentario' });
  }
};

// obtener comentarios
const getCommentsForPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await getCommentsByPostId(postId);

    // Verificar si no hay comentarios para la publicación
    if (comments.length === 0) {
      res.status(404).json({ message: 'No hay comentarios para esta publicación' });
    } else {
      res.json(comments);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener comentarios' });
  }
};

// actualizar un comentario
const updateCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { Contenido } = req.body;
    await updateCommentModel(id, { Contenido });
    res.json({ message: 'Comentario actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar comentario' });
  }
};

// eliminar un comentario
const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCommentModel(id);
    res.json({ message: 'Comentario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar comentario' });
  }
};

export { addComment, getCommentsForPost, updateCommentById, deleteCommentById };
