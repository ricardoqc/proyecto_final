import { getCategories, createCategory, updateCategory, deleteCategory } from '../models/categoriaModel.js';

// obtener categorías
const getAllCategories = async (req, res) => {
  try {
    const categorias = await getCategories();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener categorías' });
  }
};

// crear categoría
const addCategory = async (req, res) => {
  try {
    const { nombre } = req.body;
    if (!nombre) {
      return res.status(400).json({ message: 'El nombre de la categoría es requerido' });
    }
    await createCategory(nombre);
    res.status(200).json({ message: 'Creado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear categoría' });
  }
};

// actualizar categoría
const updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    await updateCategory(id, nombre);
    res.json({ message: 'Categoría actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar categoría' });
  }
};

// eliminar categoría
const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCategory(id);
    res.json({ message: 'Categoría eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar categoría' });
  }
};

export { getAllCategories, addCategory, updateCategoryById, deleteCategoryById };