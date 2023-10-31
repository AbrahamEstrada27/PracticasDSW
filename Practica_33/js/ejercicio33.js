// MARIO ABRAHAM ESTRADA GALLEGOS
// Aqui hace un arreglo que se llama "peliculas" y mete las imagenes .svg
let peliculas = ["cenicienta.svg", "frozen.svg", "repunsel.svg", "mulan.svg", "blanca.svg","tiana.svg","bella.svg","aurora.svg","moana.svg","valiente.svg"];
//Declara las respuestas correctas a=0 b=1 c=2
let correcta = [3,0,2,1,2,0,1,3,0,2];

//Hace un arreglo vacio donde se guardaran las diferentes opciones cada vez
let opciones = [];

//Se empujan las constantes al arreglo vacio
opciones.push(["Enrredados", "Frozen", "La princesa y el sapo", "Cenicienta"]);
opciones.push(["Frozen", "Mulan", "La princesa y el sapo","Enrredados"]);
opciones.push(["La princesa y el sapo", "Mulan", "Enrredados","Cenicienta"]);
opciones.push(["La princesa y el sapo", "Mulan", "Blanca Nieves", "Moana"]);
opciones.push(["Moana", "La princesa y el sapo", "Blanca Nieves", "La bella y la bestia"]);
opciones.push(["La princesa y el sapo", "Moana", "La bella y la bestia", "La bella durmiente"]);
opciones.push(["Moana", "La bella y la bestia", "La bella durmiente", "Mulan"]);
opciones.push(["La princesa y el sapo", "Mulan", "Blanca Nieves", "La bella durmiente"]);
opciones.push(["Moana", "La princesa y el sapo", "Blanca Nieves", "La bella y la bestia"]);
opciones.push(["La princesa y el sapo", "Moana", "Valiente", "La bella durmiente"]);

//Se declara la variable posActual que guardara la posicion actual
let posActual = 0;
//Contador que guardara las respuestas correctas
let cantidadAcertadas = 0;

// Crea una funcion en donde se comenzara el juego.
function comenzarJuego(){
    //Establece que la posicion actual es 0
    posActual = 0;
    //Establece que la cantidad de respuestas acertadas es 0 ya que el juego apenas empieza.
    cantidadAcertadas = 0;
    //Obtiene un elemento por medio del ID por ejemplo obtiene el elemento "pantalla-inicial" y cambia el Display a none con un style.display
    document.getElementById("pantalla-inicial").style.display = "none";
    //Obtiene un elemento por medio del ID por ejemplo obtiene el elemento "pantalla-juego" y cambia el Display a block con un style.display
    //Lo cual bloquea o oculta esta seccion
    document.getElementById("pantalla-juego").style.display = "block";
    //Corre la funcion cargaMaravilla()
    cargarPeliculas();

}

//Declara la funcion con nombre cargarMaravilla
function cargarPeliculas(){
    //Compara si el tamaño del arreglo maracillas es menor o igual a 0
    if(peliculas.length <= posActual){
        //Si si es menor o igual a 0 corre la funcion terminarJuego()
        terminarJuego();
    }
    else{//Si no es menor o igual a 0 entra al else
        //Corre la funcion limpiarOpciones()
        limpiarOpciones();
        //Obtiene o reconoce el elemento con id "imgMaravilla" y pone un ruta para mostrar la imagen
        document.getElementById("imgPeliculas").src = "../img/" + peliculas[posActual];
        //Cambia el contenido que tenga el ID "n{0 o 1 o 2}" y lo reemplasa con el contenido de los nombres de las opciones
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}

//Declara una funcion de nombre limpiarOpciones()
function limpiarOpciones(){
    //Quita las opciones de la pregunta anterior 
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}

//Declara una funcion para comprobarRespuesta obteniendo la opcion elegida "(opElegida)"
function comprobarRespuesta(opElegida){
    //Entra a esta condicion si es que la respuesta haya sido correcta
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        //Hace el conteo de la cantidad de preguntas acertadas
        cantidadAcertadas++;
    }else{
    //Entra a esta condicion si es que la respuesta haya sido incorrecta y se manipulan las clases
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    //Se incrementa la cariable posActual para seguir comprobando en las diferentes posiciones
    posActual++;
    //Hay un timer para al llegar 1000ms se ejecute cargarMaravilla
    setTimeout(cargarPeliculas,1000);
}
//Se declara la funcion terminarJuego()
function terminarJuego(){
    //Establece que en el id pantalla-juego se ponga el display como none (se oculta)
    document.getElementById("pantalla-juego").style.display = "none";
    //En este el display se cambia a block o sea que se bloquea
    document.getElementById("pantalla-final").style.display = "block";
    //Se toma el valor del id numCorrectas
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = peliculas.length - cantidadAcertadas;
}

//Se declara la funcion volverAlInicio()
function volverAlInicio(){
    //Se establecen los displays correctos para que se pueda volver al inicio
    document.getElementById("pantalla-final").style.display = "none";
    //En este el display se cambia a block o sea que se bloquea
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}