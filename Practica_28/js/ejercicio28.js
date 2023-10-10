var peso = parseInt(prompt("Escriba su peso:"));
var opcion = parseInt(prompt("Escriba un numero  (1 o 2):"));
var pesoTierra = 9.807;
var pesoMarte = 3.71;
var pesoJupiter = 24.79;
var resultado;

switch(opcion){
    case 1:
        resultado = peso * pesoMarte / pesoTierra;
        alert(`Su peso en Marte es: ${resultado}`);
        break;
    case 2:
        resultado = peso * pesoJupiter / pesoTierra;
        alert(`Su peso en Jupiter es: ${resultado}`);
        break;
    default:
        alert("No existe esa opción");
}

if(opcion == 1){
    resultado = peso * pesoMarte / pesoTierra;
    alert(`Su peso en Marte es: ${resultado}`);
}else if (opcion == 2){
    resultado = peso * pesoJupiter / pesoTierra;
    alert(`Su peso en Jupiter es: ${resultado}`); 
}else{
    alert("No existe esa opción");
}