
const store = require('./store');
const socket = require('../../socket').socket;

//Vienes de crear la petición en el network

function addMessage(user, message, chat, file) {
    return new Promise((resolve, reject) => {
        if (!user || !message || !chat) { //Si no existe ni user ni message entonces
            console.error('[messageController] No hay usuario o mensaje')
            return reject('Los datos son incorrectos');
        }

        let fileUrl = '';
        if (file) {
            fileUrl = 'http://localhost:3000/app/files/' + file.filename
        }

        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
        };

        store.add(fullMessage);

        socket.io.emit('message', fullMessage);
        //Con esto ya está emitiendo los mensajes

        resolve(fullMessage);
    })
    console.log(fullMessage)
}

function getMessages(filterUser) { //Cogemos nuestro filterUser
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser)); //Se lo pasamos al store
    })
}

function updateMessage(id, message) {
    //Creamos una promise
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data');
            return false;
        }
        //En el caso que todo esté bien, hacemos un await que está en el store.js
        const result = await store.updateText(id, message);
        resolve(result)
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Id inválido');
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e)
            })
    })
}

//Una vez generas estas funciónes vas directo al store
module.exports = { addMessage, getMessages, updateMessage, deleteMessage };