const mongoose = require('mongoose');

//Separar desde mongoose la clase schema
const Schema = mongoose.Schema;
const mySchema = new Schema({
    user: String,
    message: {
       type: String,
       required: true,
    },
    date: Date, 
});

//Modelo para la bbdd en relación a menssage
const model = mongoose.model('Message', mySchema);
module.exports = model;



