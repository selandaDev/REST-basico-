
// Importar config de servidor definida en models/server.js
const Server = require('./models/server')

// Importar variables de entorno
require('dotenv').config()

// Instanciar servidor
const server = new Server()

// Llamar a la funcion para iniciar el servidor
server.listen()



