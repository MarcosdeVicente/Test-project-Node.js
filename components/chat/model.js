const mongoose = require('mongoose');

//Separar desde mongoose la clase schema
const Schema = mongoose.Schema;
const mySchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'User',
    }],
});


//Modelo para la bbdd en relación a menssage
const model = mongoose.model('Chat', mySchema);
module.exports = model;
