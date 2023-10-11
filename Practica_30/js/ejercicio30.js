// MARIO ABRAHAM ESTRADA GALLEGOS
for(var i = 1; i <= 7; i++){
    if(i == 4){
        console.log(i+" SOY EL 4TO HOLA");
    }else if(i == 7){
        console.log(i+" ACABAMOS DE SALUDAR");
    }else{
        console.log(i+" HOLA\n");
    }
}

console.log("\n\nFOR IN");


var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

// FOR IN

for (var i in meses) {
    console.log(meses[i]);
}

console.log("\n\nFOR EACH");

// FOR EACH

meses.forEach(function(mes) {
    console.log(mes);
});

// FOR OF

console.log("\n\nFOR OF");

for (var mes of meses) {
    console.log(mes);
}

console.log("\n\n");

for (var mes of meses) {
    if (mes === "Julio") {
        continue;
    }
    console.log(mes);
}

var diciembre = "Diciembre";

for (let mes of [...meses, diciembre]) {
    console.log(mes);
}