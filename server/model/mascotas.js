var util = require("../util"); // requerimos la libreria util
module.exports = function Mascotas() { // cuando instancian el modelo, inmediatamente se exporta

    var coleccion = "mascotas"; // nombre de mi tabla

    function getMostrarMascotaPerdida(created, cb) {
        util.conectarMongo(coleccion, function (err, collection) {
            collection.find({ created: created }).toArray(cb);
        })
    }

    function getMascotas(cb) {
        util.conectarMongo(coleccion,function (err,collection) {
            collection.find().toArray(cb);
        })
    }

    function getMascotasPerdidas(cb) {
        util.conectarMongo(coleccion,function (err,collection) {
            collection.find({ tipo_registro: 1 }).toArray(cb);
        })
    }

    return {
        getMostrarMascotaPerdida: getMostrarMascotaPerdida,
        getMascotas: getMascotas,
        getMascotasPerdidas: getMascotasPerdidas
    };

    return {
    	getMascotas: function (cb) {
            util.conectarMongo(coleccion,function (err,collection) {
                collection.find().toArray(cb);
            })
        },
        getMascotasPerdidas: function (cb) {
            util.conectarMongo(coleccion,function (err,collection) {
                collection.find({ tipo_registro: 1 }).toArray(cb);
            })
        },
        getMascotasEncontradas: function (cb) {
            util.conectarMongo(coleccion,function (err,collection) {
                collection.find({ tipo_registro: 2 }).toArray(cb);
            })
        },
        getMascotasAdopcion: function (cb) {
            util.conectarMongo(coleccion,function (err,collection) {
                collection.find({ tipo_registro: 3 }).toArray(cb);
            })
        },
        getMostrarMascotaPerdida: function (cb, created) {
            //var q = {_id:ObjectId("56b777e90c5891c0433df284")};
            /*util.conectarMongo(coleccion,function (err,collection) {
                collection.find( { "_id": new ObjectId("56b777e90c5891c0433df284") }).toArray(cb);
            })*/
            util.conectarMongo(coleccion,function (err,collection,created) {
                collection.find({ created: created }).toArray(cb);
            })
        },
        postMascota: function (mascota, doc, cb) {
            util.conectarMongo(coleccion, function (err, collection) {
                // Comprobar antes si existe el proyecto
                collection.insert(doc, cb);
            });
        }
    }

};