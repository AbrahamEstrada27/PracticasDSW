var totalNotas = 0;
var todasLasNotasCapturadas = true;

function guardarDatos(){

     for (var i = 1; i <= 8; i++) {
        var calf = parseFloat(document.getElementById('a' + i).value);

        if (isNaN(calf) || calf < 0 || calf > 100) {
            alert('Por favor ingresa una nota válida (entre 0 y 100).');
            document.getElementById('a' + i).focus();
            todasLasNotasCapturadas = false;
            break;
        }
        totalNotas += calf;
    }

    if (todasLasNotasCapturadas === true) {
        let promedio = totalNotas/8;
        var mensaje = "Promedio final: " + promedio.toFixed(2) + "\n";

        if (promedio > 85) {
            mensaje += "¡Estás exento de ordinario!";
        } else {
            mensaje += "Debes presentar examen ordinario.";
        }

        alert(mensaje);
        }
}

