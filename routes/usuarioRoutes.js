import express from 'express';
import { isUser } from '../config/isUser.js';
import { getUser, updateUserDetails } from '../controllers/usuarioController.js';
import { createPost } from '../controllers/publicacionController.js';
import { addComment, updateCommentById, deleteCommentById } from '../controllers/comentarioController.js';

const router = express.Router();

// gestión del perfil del usuario
router.get('/:role_id/:user_id/perfil', isUser, getUser); 
router.put('/:role_id/:user_id/perfil', isUser, updateUserDetails); 

// gestión de publicaciones del usuario
router.post('/:role_id/:user_id/publicaciones', isUser, createPost);

// gestión de comentarios del usuario
router.post('/:role_id/:user_id/comentarios', isUser, addComment);
router.put('/:role_id/:user_id/comentarios/:id', isUser, updateCommentById);
router.delete('/:role_id/:user_id/comentarios/:id', isUser, deleteCommentById);

export default router;
