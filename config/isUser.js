const isUser = async (req, res, next) => {
  try {
    const roleId = req.params.role_id;
    
    if (roleId && roleId === '2') {
      next();
    } else {
      res.status(403).json({ message: 'No tienes permisos de usuario' });
    }
  } catch (error) {
    console.error('Error al verificar permisos de usuario:', error);
    res.status(500).json({ message: 'Error al verificar permisos de usuario' });
  }
};

export { isUser };
