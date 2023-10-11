// MARIO ABRAHAM ESTRADA GALLEGOS

var arreglo = [];

for (var i = 1; i <= 7; i++) {
    var elemento = prompt(`Ingresa el dia de la semana ${i}:`);
    arreglo.push(elemento);
}

console.log(`El arreglo ingresado es: `);
for (var dia of arreglo) {
    console.log(dia);
}

var eliminar = prompt("Ingrese el numero de la ubicacion del elemento a eliminar: ");

arreglo.splice(eliminar-1, 1); 

console.log(`\nEl arreglo sin el dia en la posicion ${eliminar}: \n`); 

for (var dia of arreglo) {
    console.log(dia);
}
var numero = 1;
var suma = 0;

while (numero <= 5) {
    suma += numero;
    numero++;
}

console.log(`\nLa suma de los números del 1 al 5 es: ${suma}`);

var numero = 5;
var factorial = 1;

do {
    factorial *= numero;
    numero--;
} while (numero > 0);

console.log(`El factorial de 5 es:  ${factorial}`);
