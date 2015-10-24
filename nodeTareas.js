#!/usr/local/bin/node

/* Cliente para añadir o consultar tareas con interfaz REST (desde un terminal)
Hecho en Ubuntu 12.04, USO:
- Aniadir tarea
node node-tareas.js a <nombre>
- Consultar tarea
node node-tareas.js c <nombre>
- Modificar tarea
node node-tareas.js m <nombre>
- Listar tareas
node node-tareas.js l
Si los argumentos son incorrectos, se muestra el uso correcto y se sale.

Creado por Jose Maria Fernandez Campos*/

var rest = require('restler');
var url = 'http://127.0.0.1:8080/tareas/'; // Local
// var url = 'http://tareas-josemaria.rhcloud.com/tareas/';

var args = new Array;
var instrucciones = "Bienvenido al cliente de manejo de tareas en el servidor. USO:\n-Listar tareas:\nl\n- Añadir tarea:\na <nombre>\n- Consultar tarea:\nc <nombre>\n- Modificar tarea:\nm <nombre>\n";

process.argv.forEach(function (val, index, array) {	// Pasar los argumentos a un array
	if (index > 1){
		args.push(val);
	}
});

if (args[0] == 'l'){					// Listar
	rest.get( url ).on('complete', function( data ) {
		console.log( data );
		}
	);

}else if ((args[0] == 'a') && (args[1] != null)){	// Aniadir
	rest.put( url + args[1] ).on('complete', function( data ) {
		console.log( data );
		}
	);

}else if ((args[0] == 'c') && (args[1] != null)){	// Consultar
	rest.get( url + args[1] ).on('complete', function( data ) {
		console.log( data );
		}
	);

}else if ((args[0] == 'm') && (args[1] != null)){	// Modificar
	rest.post( url + args[1] ).on('complete', function( data ) {
		console.log( data );
		}
	);

}else{
	console.log("Error, no se reconoce la entrada. Instrucciones:\n" + instrucciones);
}


