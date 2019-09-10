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

function updateUser(id, name) {
    return new Promise(async (resolve, reject) => {
        if (!id || !name) {
            reject('Invalid data');
            return false;
        }
        const result = await store.updateName(id, name);
        resolve(result);
    })
}

module.exports = {
    addUser,
    getUser,
    updateUser
}