import express from 'express';
import usuarioRoutes from '../routes/usuarioRoutes.js';
import publicacionRoutes from '../routes/publicacionRoutes.js';
import comentarioRoutes from '../routes/comentarioRoutes.js';
import categoriaRoutes from '../routes/categoriaRoutes.js';

const app = express();

app.use(express.json());

app.use('/api', usuarioRoutes);
app.use('/api', publicacionRoutes);
app.use('/api', comentarioRoutes);
app.use('/api', categoriaRoutes);

export default app;