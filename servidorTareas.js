var express = require('express');
var app = express();		// createServer() me da error
var tareas = new Array;		// Contenedor de tareas
var puerto = process.argv[2]?process.argv[2]:8080;
var listado;			// Texto que contendra el listado de tareas cuando se pida


// Funcion "CORS" de express para flexibilizar las URLs de peticiones
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/', function (req, res) {		// Inicio
	res.send("Bienvenido al servicio de tareas.\nConsulta /tareas para ver tareas disponibles. Pueden tener dos valores: 'Pendiente' o 'Completada'.");
});

app.put('/tareas/:id', function( req,res ) {	// Crear tarea
	tareas[req.params.id] = "Pendiente";
	res.send( "Creada tarea: " + req.params.id );
});

app.get('/tareas/:id', function (req, res) {	// Consultar tarea
	res.send( "{ " + req.params.id + ": "+ tareas[req.params.id] + " }" );
});

app.post('/tareas/:id', function (req, res) {	// Marcar tarea como terminada
	tareas[req.params.id] = "Completada";
	res.contentType('application/json');
	res.send( { resultado: tareas[req.params.id] } );
});

app.get('/tareas/', function (req, res) {	// Listar tareas
	listado = "LISTADO DE TAREAS:\n";

	for (var tarea in tareas){
		listado += "{"+ tarea +": "+ tareas[tarea] + "}\n";
	}

	res.send( listado );
});

app.listen(puerto);
console.log('Server running at http://127.0.0.1:'+puerto+'/');

