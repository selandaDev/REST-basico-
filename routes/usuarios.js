
const { Router } = require('express')

// Importar cos controladores de las rutas
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios')

const router = Router()

router.get('/', usuariosGet)

router.put('/:id', usuariosPut)

router.post('/', usuariosPost)

router.delete('/', usuariosDelete)


module.exports = router