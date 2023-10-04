var valores = [true, 10, false, "codigo", "herramientas", 7];

var textomayor = valores[3] > valores[4];


var suma = valores[1] + valores[5];
var resta = valores[1] - valores[5];
var mult = valores[1] * valores[5];
var div = valores[1] / valores[5];

var valorTrue = valores[0] != valores[2];  
var valorFalse = valores[0] == valores[2];

alert("El texto '"+ valores[3] +"' es mas grande que el texto '"+ valores[4] +"': "+textomayor +"\n\nEl valor '"+valores[0]+"' es diferente a "+valores[2]+": "+valorTrue+
"\nEl valor '"+valores[0]+"' es igual que le valor '"+valores[2]+"': "+valorFalse+"\n\nOperaciones basicas\nSuma: "+suma+"\nResta: "+resta+"\nMultiplicacion: "+mult+"\nDivision: "+div);
