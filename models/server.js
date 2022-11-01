const express = require('express')
const cors = require('cors')

// Creacion de el servidor mediante clases para mantener limpio el 
// fichero inicial app.js de esta forma haciendo referencia a Server
// todos los componentes son facilmente accesibles

class Server {
    
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        // Llamada a los Middlewares
        this.middlewares()

        // Llamada a las rutas
        this.routes()
    }

    // Rutas de la aplicacion
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    // Funcion para iniciar el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        })
    }

    // Agrupar todos los middlewares (app.use)
    middlewares() {

        // Implementacion de CORS
        this.app.use(cors())

        // Lectura y parseo del body de la peticion
        this.app.use(express.json())

        // Directorio publico o web a servir
        this.app.use( express.static('public'))

    }

}

module.exports = Server