var url = "http://127.0.0.1:8080";

$(document).ready(function() {
	$('#adelante').click(function(){

		if($('#opcion option:selected').val() == "1"){	// Listar tareas
			$.get(url+'/tareas', function( data) {
				$('#Resultado').html("Resultado: " + data);
			});
		}

		if($('#opcion option:selected').val() == "2"){	// Aniadir tarea
			$.post(url+'/tareas/'+$('#nombre').val(), function( data) { 
				$('#Resultado').html('Resultado: '+ data.resultado);
			});
		}

		if($('#opcion option:selected').val() == "3"){	// Consultar tarea
			$.get(url+'/tareas/'+$('#nombre').val(), function( data) { 
				$('#Resultado').html('Resultado: '+ data);
			});
		}

		if($('#opcion option:selected').val() == "4"){	// Marcar tarea completada
			$.post(url+'/tareas/'+$('#nombre').val(), function( data) { 
				$('#Resultado').html('Resultado: '+ data.resultado);
			});
		}
	});
});


