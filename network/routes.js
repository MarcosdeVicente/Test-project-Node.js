const express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network');

 //Todas las llamadas hacia message, las gestiona el componente de message
const routes = function(server){
    server.use('/message', message);
    server.use('/user',user)
}


module.exports = routes;