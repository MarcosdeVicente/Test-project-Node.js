const express = require('express');
const response = require('../../network/response')

const controller = require('./controller');
const router = express.Router();

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

router.post('/', function (req, res) {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(e => {
            response.error(req, res, 'Información invalida', 400, 'Error en el controlador')
        })
});

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

router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })
})

module.exports = router;
