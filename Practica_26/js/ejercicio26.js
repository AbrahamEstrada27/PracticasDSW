var num = 8;

if (num < 10){
    console.log("El numero es menor a 10");
} else if (num > 10){
    console.log("El numero es mayor a 10");
} else{
    console.log("El numero es igual de 10");
}

var estacion = prompt("Escribe una estacion en minusculas:");

switch (estacion){
    case "primavera":
        alert("Se colorea todo el mundo.");
        break;
    case "verano":
        alert("Las noches se hacen largas.");
        break;
    case "invierno":
        alert("Todo esta frio.");
        break;
    case "otoño":
        alert("Donde habia color ya no hay nada.");
        break;
    default:
        alert("No esta bien escrito o eso no es una estacion.");
        break;

}