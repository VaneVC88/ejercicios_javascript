//Estructuras repetitivas pseudocodigo

//ejercicio 1: Suma 10 n° ciclo while
/*var total, i;
total = 0;
i = 10;
while(i>0){
	i --;
	total = total + parseInt(prompt("Numero, quedan " + (i+1) + " numeros"));
}
alert("La suma es " + total)*/


//ejercicio 2: Suma 10 n° ciclo Do while
/*var total, i;
total = 0;
i = 10;
do{
	i --;
	total = total + parseInt(prompt("Numero, quedan " + (i+1) + " numeros"));
}while(i>0);
alert("La suma es " + total)*/


//ejercicio 3:  Suma 10 n° ciclo For
/*var i, total;
total= 0;
for(var i = 10; i > 0; i--){
	total = total + parseInt(prompt("Numero, quedan " + (i+1) + " numeros"));
}
alert("La suma es " + total)*/

//ejercicio 4: Edad promedio

//FOR
/*var edad, alumnos, total;
alumnos = parseInt(prompt("¿Cuantos alumnos son?"));
total = 0;
for(var i = alumnos; i >= 1; i--){
	edades = parseInt(prompt("Edad alumno"));
	total = total + edades;
	console.log(edades);
}
total = total / alumnos;
alert("El promedio es de " + total)*/

//WHILE
/*var edad, alumnos, total;
alumnos = parseInt(prompt("¿Cuantos alumnos son?"));
i = alumnos;
total = 0;
while( i >= 1){
	i--;
	edades = parseInt(prompt("Edad alumno"));
	total = total + edades;
	console.log(edades);
}
total = total / alumnos;
alert("El promedio es de " + total)

//DO WHILE
var edad, alumnos, total;
alumnos = parseInt(prompt("¿Cuantos alumnos son?"));
i = alumnos;
total = 0;
do{
	i--;
	edades = parseInt(prompt("Edad alumno"));
	total = total + edades;
	console.log(edades);
}while( i >= 1);
total = total / alumnos;
alert("El promedio es de " + total)*/

//ejercicio 5: Numeros pares 0-100
/*for(var i = 0; i <100; i++){
	if((i*i)%2 === 0){
		console.log(i);
	}
}*/

//ejercicio 6: triangulo
/*for(var i = 1; i <= 22; i++){
	for(var j = 1; j <= 22; j++){
		for(var k = 1; k <= 22; k++){
			if(("i * i") + (j * j) === (k *k)){
				console.log("(" + i + ", " + j + ", " + k + ")");
			}
		}
	}
}*/

//ejercicio 7: Tablas de multiplicar
/*var numero;
numero = parseInt(prompt("Ingrese un numero(1-12)", ""));
var i = 0;
 
for (i = 1; i <= 12; i++){
	total = numero * i;
	alert(numero + " * " + i + " = " + total);
}*/

//ejercicio 8: Potencia
/*var potencia, base, total;

do{
	base = parseInt(prompt("Numero base"));
	alert(isNaN(base));
	if(isNaN(base)){
		alert("base no es un numero");
	}
}while(isNaN(base));
do{
	potencia = parseInt(prompt("Numero potencia"));
	alert(isNaN(potencia));
	if(isNaN(potencia)){
		alert("potencia no es un numero");
	}
}while(isNaN(potencia));

total = base;

for(var i = 0; i < potencia-1; i++){
	total = total * base;
}
alert(base + " elevado a " + potencia + " es igual a")*/

//ejercicio 9: Calificacion 40 alumnos

//ejercicio 10: Cubo y cuarta de un numero
/*var numero;
for (i = 1; i <= 10; i++){
	numero = parseInt(prompt("Ingrese un numero", ""));
	total = numero * numero * numero;
	alert("El cubo es " + "= " + total);
	total = total * numero;
 	alert("La cuarta es " + "= " +  total)
}*/

