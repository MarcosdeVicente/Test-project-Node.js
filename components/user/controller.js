// Toda la lógica del controlador
const store = require('./store');

function addUser(name) {
    if (!name) {
        return Promise.reject('Invalid name');
    }
    const user = {
        name,
    };
    return store.add(user);
}

function getUser(filterName) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterName))
    })
}


module.exports = {
    addUser,
    getUser
}