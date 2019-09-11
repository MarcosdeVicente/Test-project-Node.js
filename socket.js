//Este archivo se va a encargar de inicializar nuestro servidor socket.io
//Generar una instancia
//Poderla compartir


const socketIO = require('socket.io');
const socket = {}; //Generamos el socket como un objeto


function connect(server){
    socket.io = socketIO(server);
}

module.exports = {
    connect,
    socket,
}