import express from 'express';
import { isAdmin } from '../config/isAdmin.js';
import { createUser, getAllUser, getUser, updateUserDetails, deleteUserAccount } from '../controllers/usuarioController.js';
import { getAllPosts, getPostsByUser } from '../controllers/publicacionController.js';
import { getAllCategories, addCategory, updateCategoryById, deleteCategoryById } from '../controllers/categoriaController.js';
import { addComment } from '../controllers/comentarioController.js';

const router = express.Router();

// Rutas para administrador
router.get('/:role_id/usuarios', isAdmin, getAllUser);
router.get('/:role_id/usuarios/:user_id', isAdmin, getUser);
router.post('/:role_id/usuarios', isAdmin, createUser);
router.put('/:role_id/usuarios/:user_id', isAdmin, updateUserDetails);
router.delete('/:role_id/usuarios/:user_id', isAdmin, deleteUserAccount);

router.get('/:role_id/publicaciones', isAdmin, getAllPosts);
router.get('/:role_id/publicaciones/:user_id', isAdmin, getPostsByUser);

router.get('/:role_id/categorias', isAdmin, getAllCategories);
router.post('/:role_id/categorias', isAdmin, addCategory);
router.put('/:role_id/categorias/:id', isAdmin, updateCategoryById);
router.delete('/:role_id/categorias/:id', isAdmin, deleteCategoryById);

router.post('/:role_id/comentarios', isAdmin, addComment);

export default router;