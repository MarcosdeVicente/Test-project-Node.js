//Lógica de almacenamiento de datos
const Model = require('./model');

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save()
}

async function getUser(filterName) {
    let filter = {}
    if (filterName !== null) {
        filter = { name: filterName }
    }
    const users = await Model.find(filter);
    return users;
}

module.exports = {
    add: addUser,
    list: getUser
}