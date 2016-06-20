//Ejercicios de arreglos javascript

//ejercicio 0: calculando numeros impares
/*var num = [3, 5, 10, 16, 13, 2, 8, 14, 20, 1, 36, 27, 45, 41, 7, 28, 31, 21, 64, 100];
var i = 0;
var res = [];
for(i=0; i<num.length; i++){
	if(num[i]%2!=0){
	res.push(num[i]);
	}
}
console.log(res);*/

//ejercicio 1: Calculando dni
/*var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni, i, total;
total = 0;
dni = parseInt(prompt("Ingrese su DNI"));
i = 0;
if(dni < 9999999 || dni > 999999999){
	alert("El dni es invalido");
}else if(dni > 0){
	total = dni % 23;
	document.write(letras[total] + " Es la letra de su DNI");
}*/

//ejercicio 2: Añadir elementos a un array con push(ciclo for)
/*var nombres = ["Tomas","Ignacia", "Vicente", "Emilia"];
var res = [];
nombres.push("lisa");
nombres.push("manuel")
for(var i = 0; i < nombres.length; i++){
	res.push(nombres[i]);
}
document.write(res);*/


//ejercicio 3: Creando arrays
/*var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var i = 0;
for(i=0; i<meses.length; i++){
	alert("Los meses del año son: " + meses[i]);
}*/


//ejercicio 4: Operaciones en arrays
/*var valores = [true, 5, false, "hola", "adios", 2];*/ 

//ejericicio 5: Suma de numeros
/*var i, total;
total= 0;
for(var i = 10; i > 0; i--){
	total = total + parseInt(prompt("Ingrese un numero"));
}
alert("La suma es " + total)*/
