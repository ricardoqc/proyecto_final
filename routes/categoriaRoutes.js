import express from 'express';
import { getAllCategories, addCategory, updateCategoryById, deleteCategoryById } from '../controllers/categoriaController.js';

const router = express.Router();

// gestión de categorías
router.get('/categorias', getAllCategories);
router.post('/categorias', addCategory);
router.put('/categorias/:id', updateCategoryById);          
router.delete('/categorias/:id', deleteCategoryById);

export default router;
