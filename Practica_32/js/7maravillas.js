// Aqui hace un arreglo que se llama "maravillas" y mete las imagenes .svg
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];
//Declara las respuestas correctas a=0 b=1 c=2
let correcta = [1,0,2,1,2,0,1];

//Hace un arreglo vacio donde se guardaran las diferentes opciones cada vez
let opciones = [];

//Se empujan las constantes al arreglo vacio
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

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
    cargarMaravilla();

}

//Declara la funcion con nombre cargarMaravilla
function cargarMaravilla(){
    //Compara si el tamaño del arreglo maracillas es menor o igual a 0
    if(maravillas.length <= posActual){
        //Si si es menor o igual a 0 corre la funcion terminarJuego()
        terminarJuego();
    }
    else{//Si no es menor o igual a 0 entra al else
        //Corre la funcion limpiarOpciones()
        limpiarOpciones();
        //Obtiene o reconoce el elemento con id "imgMaravilla" y pone un ruta para mostrar la imagen
        document.getElementById("imgMaravilla").src = "../img/" + maravillas[posActual];
        //Cambia el contenido que tenga el ID "n{0 o 1 o 2}" y lo reemplasa con el contenido de los nombres de las opciones
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

//Declara una funcion de nombre limpiarOpciones()
function limpiarOpciones(){
    //Quita las opciones de la pregunta anterior 
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
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
    setTimeout(cargarMaravilla,1000);
}
//Se declara la funcion terminarJuego()
function terminarJuego(){
    //Establece que en el id pantalla-juego se ponga el display como none (se oculta)
    document.getElementById("pantalla-juego").style.display = "none";
    //En este el display se cambia a block o sea que se bloquea
    document.getElementById("pantalla-final").style.display = "block";
    //Se toma el valor del id numCorrectas
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

//Se declara la funcion volverAlInicio()
function volverAlInicio(){
    //Se establecen los displays correctos para que se pueda volver al inicio
    document.getElementById("pantalla-final").style.display = "none";
    //En este el display se cambia a block o sea que se bloquea
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}