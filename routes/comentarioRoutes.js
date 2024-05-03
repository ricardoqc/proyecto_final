import express from 'express';
import { addComment, getCommentsForPost } from '../controllers/comentarioController.js';

const router = express.Router();

// crear un nuevo comentario
router.post('/comentarios/:postId', addComment);

// obtener comentarios por ID de publicación
router.get('/comentarios/:postId', getCommentsForPost);

export default router;
