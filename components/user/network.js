//Información de red
const express = require('express');
const response = require('../../network/response')
const controller = require('./controller');
const router = express.Router();


router.get('/', function (req, res) {
    const filterName = req.query.name || null
    controller.getUser(filterName)
        .then((userList) => {
            response.success(req, res, userList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, error)
        })
})
router.post('/', function (req, res) {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201)
        }).catch(e => {
            response.error(req, res, 'Internal error', 500, e)
        })
})
router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })
})

module.exports = router