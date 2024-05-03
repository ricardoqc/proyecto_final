import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import publicacionRoutes from './routes/publicacionRoutes.js';
import comentarioRoutes from './routes/comentarioRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';

const app = express();

app.use(express.json());

// rutas
app.use('/api', usuarioRoutes);
app.use('/api', adminRoutes);
app.use('/api', publicacionRoutes);
app.use('/api', comentarioRoutes);
app.use('/api', categoriaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});