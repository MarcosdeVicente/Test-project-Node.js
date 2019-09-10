const db = require('mongoose');

//mlab.com
//cursonodeplatzi
//mongodb+srv://user:user1234@cluster0-1oend.mongodb.net/test?retryWrites=true&w=majority
const url = 'mongodb://user:1234@cluster0-shard-00-00-1oend.mongodb.net:27017,cluster0-shard-00-01-1oend.mongodb.net:27017,cluster0-shard-00-02-1oend.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
db.Promise = global.Promise;

async function connect() {
    console.log('[db]Conectada')
    await db.connect(url, {
        useNewUrlParser: true,
        //version 2.2.1 de Node.js (tuve problemas para conectarme a ella)
    })
}

module.exports = connect;

