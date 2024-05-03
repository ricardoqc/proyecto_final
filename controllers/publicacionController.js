import { getPosts, getPostsByCategory as getPostsByCategoryModel, searchPostsByTitle, getPostsByUserId, createPost as createPostModel } from '../models/publicacionModel.js';

// obtener las publicaciones
const getAllPosts = async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener publicaciones' });
  }
};

// obtener publicaciones de usuario
const getPostsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await getPostsByUserId(userId);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las publicaciones del usuario' });
  }
};

// obtener publicaciones por categoría
const getPostsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const posts = await getPostsByCategoryModel(categoryId);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener publicaciones por categoría' });
  }
};

// buscar publicaciones por título
const searchPosts = async (req, res) => {
  try {
    const { title } = req.query;
    const posts = await searchPostsByTitle(title);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar publicaciones por título' });
  }
};

// crear una publicación
const createPost = async (req, res) => {
  try {
    const postData = req.body;
    const newPost = await createPostModel(postData);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la publicación' });
  }
};

export { getAllPosts, getPostsByCategory, searchPosts, getPostsByUser, createPost };