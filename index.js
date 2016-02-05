var server = require('./server/routes'); // llamamos a las rutas
var express = require('express'); // requerimos el fw express
var bodyParser = require('body-parser'); // conseguimos desmenuzar las peticiones que recibimos
var app = express(); // en app utilizamos el fw express

// app.use lo que hace es ejecutarse en cada petición que se haga en el servidor

app.use(bodyParser.json()); // nos permite interpretar el json del body. Nos llega algo se interpreta y se devuelve en json
// llamadas a carpetas estáticas para poder utilizarlas
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/client/css'));
app.use(express.static(__dirname + '/client/js'));


app.use('/', server.router); // le decimos a la app que use mi enrutador
app.listen(3000);
