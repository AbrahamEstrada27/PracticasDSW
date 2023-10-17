
// MARIO ABRAHAM ESTRADA GALLEGOS


// var numero = parseInt(prompt("Ingrese el numero que deasea saber si es par o impar: "));

// function par_impar(num){

//     if (num % 2 === 0) {
//         alert(`El número (${num}) es par`);
//     } else {
//         alert(`El número (${num}) es impar`);
//     }
// }

// par_impar(numero);

// var hayUnHuracan = false;

// function aviso_huracan(){

//     if(huracan == true){
//         alert("Hay un huracan");
//     }else{
//         alert("Esta soleado");
//     }
// }

// aviso_huracan(hayUnHuracan);

var texto=prompt("Ingrese un texto (sumar, multiplicar, restar, dividir y residuo)"), numero1= parseInt(prompt("Ingrese el 1er numero: ")), numero2= parseInt(prompt("Ingrese el 2do numero: "));

function operacionesMatematicas(operacion, a, b){

    var cal;
    switch(operacion){
        case "sumar":
            cal = a + b;
            alert(`El resultado de sumar ${a} + ${b} es: ${cal}`);
            break;
        case "restar":
            cal = a - b;
            alert(`El resultado de restar ${a} - ${b} es: ${cal}`);
            break;
        case "multiplicar":
            cal = a * b;
            alert(`El resultado de multiplicar ${a} * ${b} es: ${cal}`);
            break;
        case "dividir":
            cal = a / b;
            alert(`El resultado de dividir ${a} / ${b} es: ${cal}`);
            break;
        case "residuo":
            cal = a % b;
            alert(`El resultado del residuo de ${a} y ${b} es: ${cal}`);
            break;
        default:
            alert("ESE TEXTO NO ES UNA OPERACION BASICA!");
            
    }

}

operacionesMatematicas(texto, numero1, numero2);