import swaggerAutogen from 'swagger-autogen';
import path from 'path';

// Ruta al archivo de salida de la documentación Swagger
const swaggerOutput = path.resolve(__dirname, './documentation/swagger_output.json');

// Especifica los archivos de endpoints para la generación de Swagger
const endpointsFiles = ['./routes/*.js'];

// Configuración de la información de la API para Swagger
const doc = {
  info: {
    title: 'Blogging Backend',
    description: 'Back para un sistema de Blogging. // Profe rompi mi codigo a ultima tratando de crear rutas especificas para usuario y administrador',
  },
  host: 'localhost:3000',
  basePath: '/api',
  schemes: ['http'],
};

// Genera la documentación Swagger con Swagger Autogen
swaggerAutogen()(swaggerOutput, endpointsFiles, doc).then(() => {
  console.log('Documentación Swagger generada correctamente');
});

export default swaggerOutput;
