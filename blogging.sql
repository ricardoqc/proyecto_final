-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-05-2024 a las 20:28:22
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blogging`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`ID`, `Nombre`) VALUES
(1, 'Categoría 1'),
(2, 'Categoría 2'),
(3, 'Categoría 3'),
(4, 'Categoria 4'),
(5, 'Categoria 6'),
(6, 'Categoría 5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `ID` int(11) NOT NULL,
  `Contenido` text NOT NULL,
  `Fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `ID_usuario` int(11) DEFAULT NULL,
  `ID_publicacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`ID`, `Contenido`, `Fecha_creacion`, `ID_usuario`, `ID_publicacion`) VALUES
(1, 'Este es un comentario de la publicación 1', '2024-05-01 23:59:52', 1, 1),
(2, 'Este es otro comentario de la publicación 1', '2024-05-03 00:45:50', 2, NULL),
(3, 'Este es otro de otro comentario de la publicación 1', '2024-05-03 00:46:47', 2, NULL),
(4, 'Este es otro de otro comentario de la publicación 1, porque no funcionaba el ID', '2024-05-03 00:52:44', 1, NULL),
(5, 'Este es otro de otro comentario de la publicación 1, porque no funcionaba el ID', '2024-05-03 00:55:22', 1, NULL),
(6, 'Este es otro de otro comentario de la publicación 1, porque no funcionaba el ID', '2024-05-03 00:55:57', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE `publicacion` (
  `ID` int(11) NOT NULL,
  `Titulo` varchar(255) NOT NULL,
  `Contenido` text NOT NULL,
  `Fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `ID_usuario` int(11) DEFAULT NULL,
  `Imagen_destacada` varchar(255) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publicacion`
--

INSERT INTO `publicacion` (`ID`, `Titulo`, `Contenido`, `Fecha_creacion`, `ID_usuario`, `Imagen_destacada`, `categoria_id`) VALUES
(1, 'Título de la publicación 1', 'Contenido de la publicación 1', '2024-04-30 00:11:02', 1, 'imagen_destacada1.jpg', 1),
(2, 'Título de la publicación 2', 'Contenido de la publicación 2', '2024-04-30 00:11:02', 2, 'imagen_destacada2.jpg', 1),
(3, 'Título de la publicación 3', 'Contenido de la publicación 3', '2024-04-30 00:11:02', 1, 'imagen_destacada3.jpg', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion_categoria`
--

CREATE TABLE `publicacion_categoria` (
  `ID_publicacion` int(11) NOT NULL,
  `ID_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles_usuario`
--

CREATE TABLE `roles_usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles_usuario`
--

INSERT INTO `roles_usuario` (`id`, `nombre`) VALUES
(1, 'administrador'),
(2, 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Imagen` varchar(255) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`ID`, `Nombre`, `Email`, `Password`, `Imagen`, `rol_id`) VALUES
(1, 'Usuario1', 'usuario1@example.com', 'contraseña1', 'imagen1.jpg', 2),
(2, 'Usuario2', 'usuario2@example.com', 'contraseña2', 'imagen2.jpg', 2),
(3, 'Admin', 'admin@example.com', 'admin123', 'admin.jpg', 1),
(5, 'Ricardo', 'ricardo@example.com', 'ricardo123', 'ricardo.jpg', 1),
(6, 'Luis', 'luis@example.com', 'luis123', 'luis.jpg', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_usuario` (`ID_usuario`),
  ADD KEY `ID_publicacion` (`ID_publicacion`);

--
-- Indices de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_usuario` (`ID_usuario`),
  ADD KEY `fk_categoria` (`categoria_id`);

--
-- Indices de la tabla `publicacion_categoria`
--
ALTER TABLE `publicacion_categoria`
  ADD PRIMARY KEY (`ID_publicacion`,`ID_categoria`),
  ADD KEY `ID_categoria` (`ID_categoria`);

--
-- Indices de la tabla `roles_usuario`
--
ALTER TABLE `roles_usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `fk_usuario_rol` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `roles_usuario`
--
ALTER TABLE `roles_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`ID_usuario`) REFERENCES `usuario` (`ID`),
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`ID_publicacion`) REFERENCES `publicacion` (`ID`);

--
-- Filtros para la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`ID`),
  ADD CONSTRAINT `publicacion_ibfk_1` FOREIGN KEY (`ID_usuario`) REFERENCES `usuario` (`ID`);

--
-- Filtros para la tabla `publicacion_categoria`
--
ALTER TABLE `publicacion_categoria`
  ADD CONSTRAINT `publicacion_categoria_ibfk_1` FOREIGN KEY (`ID_publicacion`) REFERENCES `publicacion` (`ID`),
  ADD CONSTRAINT `publicacion_categoria_ibfk_2` FOREIGN KEY (`ID_categoria`) REFERENCES `categoria` (`ID`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_usuario_rol` FOREIGN KEY (`rol_id`) REFERENCES `roles_usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
