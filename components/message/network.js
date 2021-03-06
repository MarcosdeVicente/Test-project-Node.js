const express = require('express');
const response = require('../../network/response')
const multer = require('multer'); //npm i multer

const controller = require('./controller');
const router = express.Router();

const upload = multer({
    dest: 'public/files/', //Ruta donde guardamos el archivo
})


//Tras hacer esta petición directos al controller.js

router.get('/', function (req, res) {
    const filterMessages = req.query.user || null
    //Si tengo que filtrar algún mensaje, aquí tiene la info del filtro
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, error)
        })
});

router.post('/', upload.single('file'), function (req, res) {
    //Añadimos el middleware upload (punto por donde va a pasar antes de entrar en la function)
    console.log(req.file);
    controller.addMessage(req.body.user, req.body.message, req.body.chat, req.file)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => {
            response.error(req, res, 'Información invalida', 400, 'Error en el controlador')
        })
});

router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })
})
//Por el método patch, nos viene un id
router.patch('/:id', function (req, res) {
    console.log(req.params.id)
    //Llamamos updateMessage en el controller.js
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200)
        }).catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })
    res.send('Ok')
});

module.exports = router;
