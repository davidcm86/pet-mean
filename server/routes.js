var express = require('express'); // requerimos express
var router = express.Router(); // requerimos el enrutador
var Mascotas = require("./model/mascotas"); // requerimos nuestro modelo
var util = require("./util"); // libreria con utilidades

var mascotas = new Mascotas(); // instanciamos nuestro modelo

// insertar y actualizar datos sobre mascotas
router.route('/api/mascotas')
    .post(function (req, res, next) {
        var doc = req.body; // desmenuzamos el request
        mascotas.postMascota(res.mascota, doc, function (err, docs) { // ****¿De dónde salen el res.mascota, doc?****
            if (err) {
                util.tratarError(err, res);
            } else {
                res.json(doc);
            }
        });
    });
// datos sobre las mascotas perdidas
router.route('/api/mostrarMascotasPerdidas')
    .get(function (req, res, next) {
        mascotas.getMascotasPerdidas(function (err, docs) {
            if (err) util.tratarError(err, res);
            res.json(docs);
        });
    });
// datos sobre las mascotas encontradas
router.route('/api/mostrarMascotasEncontradas')
    .get(function (req, res, next) {
        mascotas.getMascotasEncontradas(function (err, docs) {
            if (err) util.tratarError(err, res);
            res.json(docs);
        });
    });
// datos sobre las mascotas en adopcion
router.route('/api/mostrarMascotasAdopcion')
    .get(function (req, res, next) {
        mascotas.getMascotasAdopcion(function (err, docs) {
            if (err) util.tratarError(err, res);
            res.json(docs);
        });
    });
// devolvemos el enrutador
module.exports.router = router; 