import express from 'express';
import { getAllPosts, getPostsByCategory, getPostsByUser } from '../controllers/publicacionController.js';

const router = express.Router();

// todas las publicaciones
router.get('/publicaciones', getAllPosts);

// publicaciones por categoría
router.get('/publicaciones/categoria/:categoryId', getPostsByCategory);

// publicaciones de un usuario específico
router.get('/publicaciones/usuario/:userId', getPostsByUser);

export default router;
