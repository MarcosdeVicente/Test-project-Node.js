const store = require('./store');

function addChat(users) {
    //Comprueba si existen usuarios, y si es un Array
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }
    const chat = {
        users: users,
    };
    return store.add(chat)
}

function listChats(userId) {
    return store.list(userId)
}

module.exports = {
    addChat,
    listChats
}