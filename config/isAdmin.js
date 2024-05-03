/* import db from '../config/db.js';

const isAdmin = async (req, res, next) => {
  try {
    const userId = req.user.id; // Suponiendo que req.user contiene el ID del usuario

    const connection = await db.getConnection();
    const [rows] = await connection.query('SELECT role_id FROM usuario WHERE id = ?', [userId]);
    connection.release();

    if (rows.length > 0 && rows[0].role_id === 1) { // Verificamos si el roleId es igual a 1 (administrador)
      next(); // Si es administrador, pasamos al siguiente middleware
    } else {
      res.status(403).json({ message: 'No tienes permisos de administrador' });
    }
  } catch (error) {
    console.error('Error al verificar permisos de administrador:', error);
    res.status(500).json({ message: 'Error al verificar permisos de administrador' });
  }
};

export { isAdmin };
 */

const isAdmin = async (req, res, next) => {
  try {
    const roleId = req.params.role_id;
    
    if (roleId && roleId === '1') {
      next();
    } else {
      res.status(403).json({ message: 'No tienes permisos de usuario' });
    }
  } catch (error) {
    console.error('Error al verificar permisos de usuario:', error);
    res.status(500).json({ message: 'Error al verificar permisos de usuario' });
  }
};

export { isAdmin };