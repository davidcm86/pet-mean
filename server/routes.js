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
// datos sobre una mascota perdiada
router.route('/api/mostrarMascotaPerdida/:created')
    /*.get(function (req, res, next) {
        mascotas.getMostrarMascotaPerdida(function (err, docs) {
            if (err) util.tratarError(err, res);
            res.json(docs);
        });
    });*/

    .get(function (req, res, next) {
        var created = "1454864447306";
        console.log('dsddddddddddddddddddd');
        mascotas.getMostrarMascotaPerdida(created, function (err, doc) {
            if (err) {
                util.tratarError(err, res);
            } else {
                //util.test("Buscando proyecto"+ _id + "para : " + JSON.stringify(res.usuario.email) + " encontrado: " + JSON.stringify(doc));
                res.json(doc);
            }
        });
    })
// devolvemos el enrutador
module.exports.router = router; 