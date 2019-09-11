const mongoose = require('mongoose');

//Separar desde mongoose la clase schema
const Schema = mongoose.Schema;
const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,//Con esto aseguramos que solo reciba un OBJECT ID
        ref: 'User'
    },
    message: {
       type: String,
       required: true,
    },
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    date: Date,
    file: String, 
});

//Modelo para la bbdd en relación a menssage
const model = mongoose.model('Message', mySchema); 
module.exports = model;



