const {response, request} = require('express')

// Los controladores se encargan de realizar las funciones que se 
// piden a la api. Son accesibles desde las rutas

const usuariosGet = (req = request , res = response) => {

    const {q, nombre, apikey} = req.query // lectura de los parametros del get

    res.json({
        msg: 'Get api'
    })
}

const usuariosPost = (req, res = response) => {

    const body = req.body // lectura del body de la peticion

    res.json({
        msg: 'Post api',
        body
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id // lectura del id de la peticion que viene en la ruta

    res.json({
        msg: 'Put api'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete api'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}