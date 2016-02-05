module.exports.test = function (value) {
    console.log("Desde nodemon: " + value);
}

module.exports.tratarError = function (err, res) {
    if(err) console.log(err);
    if(res )res.status(500).send(err);
}
// desde util conectamos con mongodb
var MongoClient = require('mongodb').MongoClient;
// conectamos a nuestor localhost y a nuestra bbdd
var mongoDB = "mongodb://localhost:27017/mascotaPerdida"; 
// exportamos nuestra conexion
module.exports.conectarMongo = 
    function connect(coleccion, callBackFunction ) {
        MongoClient.connect(mongoDB, function (err, db) {
            if (err) {
                cb(err, null); //*** ¿De dónde sale ese cb? ***
            }
            var collection = db.collection(coleccion);
            callBackFunction(null, collection);
        })
    };