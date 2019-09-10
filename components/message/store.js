
const Model = require('./model');

//Vienes del controller.js para crear estas funciones

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save(); //Instancio una nueva clase de este modelo
}

// async function getMessages(filterUser) {
//     let filter = {};
//     if (filterUser !== null) {
//         filter = { user: filterUser }
//         //Trae solo los usuarios que coinciden con filterUser 
//     }
//     const messages = await Model.find(filter);
//     return messages //Retorna toda la lista de mensajes
// }

async function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            filter = { user: filterUser }
            //Trae solo los usuarios que coinciden con filterUser 
        }
        Model.find(filter)
            .populate('user')
            //Relaciona el id que le hemos pasado, con su user
            .exec((error, populated) => { //Forma de ejecutar el populate
                if (error) {
                    reject(error);
                    return false
                }
                resolve(populated)
            })
    })
}

async function updateText(id, message) {
    //Busca el mensaje con el id que le llega
    const foundMessage = await Model.findOne({//findOne encontrar uno
        _id: id
    });
    foundMessage.message = message //Modifica el id
    const newMessage = await foundMessage.save();//Guarda el id
    return newMessage;//Devuelve el id
}
function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage
}