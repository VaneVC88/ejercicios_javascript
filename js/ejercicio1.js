//Condicionales simples y multiples pseudocodigo

//ejercicio 1 Aprovado o Reprobado
/*var nota1 = prompt("Ingrese nota1");
var nota2 = prompt("Ingrese nota2");
var nota3 = prompt("Ingrese nota3");
var promedio = (nota1 + nota2 + nota3 / 3);

	if (promedio >= 6){
		alert("Aprueba");
	} else{
		alert("Reprobado");
	}*/


//ejercicio 2 ¿Cual es el numero mas grande?		
/*var valor1 = prompt("Ingrese primer valor");
var valor2 = prompt("Ingrese segundo valor");

	if(valor1 > valor2){
		alert(valor1 + " es mayor");
	} else{
		alert(valor2 + " es mayor");
	}*/


//ejercicio 3 Positivo o negativo
/*var numero = prompt("Ingrese numero");
	
	if (numero > 0){
		alert("El numero " + "" + " es positivo");
	} else if (numero < 0){
		alert("El numero " + "" + " es negativo");
	} else{
		alert("El numero " + "" + "es neutro");
	}*/

//ejercicio 4: Almacenes “El harapiento distinguido”
/*var traje = 0;
var descuento = 0;
var preciof = 0;

traje = prompt("Ingrese valor traje");

if(traje > 25000){
    descuento = (traje * 15)/100;
    preciof = traje - descuento;
}else{
	descuento = (traje * 8)/100;
    preciof = traje - descuento;
}
alert("Valor Precio Es: "+preciof);*/


//ejercicio 5: EL MAYOR DE LOS NÚMEROS
/*var n1, n2, n3;
n1 = prompt("Ingrese valor num1");
n2 = prompt("Ingrese valor num2");
n3 = prompt("Ingrese valor num3");

if (n1==n2 || n1==n3 || n2==n3){
alert("hay numeros iguales ");
}else{
if(n1 > n2  && n1 > n3){
	alert("num1 es mayor");
}else{
	if(n2 > n3){
		alert("num2 es mayor");
	}else{
		alert("num3 es mayor");
	}
}
}*/

//ejercicio 6: BANQUETES “La langosta ahumada”
/*var cantipers, presupuesto;
cantipers = prompt("Ingrese num personas");
if(cantipers > 200 && cantipers <= 300){
	presupuesto = cantipers * 85;
}else{
	if(cantipers > 300){
		presupuesto = cantipers * 75;
	}else{
		presupuesto = cantipers * 95;
	}
}
alert("presupuesto es: " + presupuesto);*/

//ejercicio 7: VIAJE ESCOLAR
/*var cantialumn, costo;
cantialumn = prompt("Ingrese cantidad alumnos");

if(cantialumn >= 100){
	costo = cantialumn * 65;
}else{
		if(cantialumn >= 50 && cantialumn <= 99){
			costo = cantialumn * 70;
		}else{
			if(cantialumn >= 30 && cantialumn <= 49){
					costo = cantialumn * 95;
				}else{
					if(cantialumn < 30){
						costo = 4000;
					}
			    }
			} 
		}
alert("el costo es: " +costo);*/

//ejercicio 8: COMPAÑIA DE AUTOBUSES
/*var cantialumn, costo, TipoBus;
cantipers = prompt("Ingrese cantidad persona");
TipoBus = prompt("Ingrese Tipo de Bus A, B o C");
	if(cantipers <20){
		alert("El numero de persona es menor a lo requerido el calulo sera por 20");
		cantipers=20;
		}
if(cantipers >=20){
	if(TipoBus== "A"){
		costo = cantipers * 2;
	}else{
		if(TipoBus=="B"){
			costo= cantipers * 2.5;
		}else{
			if(TipoBus=="C"){
				costo = cantipers * 3;
			}
		}
	}
}
alert("el costo es: " +costo);*/


//ejercicio 10: FABRICAS "EL COMETA"
/*var articulo, costopro, maobra, materia, gastofa, preciove;
articulo = prompt("Ingrese Tipo de articulo 1, 2, 3, 4, 5 o 6");
materia = prompt("Ingrese materia prima");
if(articulo == 1 || articulo == 5){
	manobra = (materia * 80)/100;
}else{
	if(articulo == 2 || articulo == 6){
		manobra = (materia * 85)/100;
	}else{
		if(articulo == 3 || articulo == 4){
			manobra =(materia * 75)/100;
		}
	}
}
if(articulo == 1 || articulo == 4){
	gastofa = (materia *28)/100;
}else{
	if(articulo == 2 || articulo == 5){
		gastofa = (materia *30)/100;
	}else{
		if(articulo == 3 || articulo == 6){
			gastofa = (materia *35)/100;
		}
	}
}
costopro = parseInt(materia) + parseInt(manobra) + parseInt(gastofa);
preciove = parseInt(costopro + ((parseInt(costopro) * 45)/100));
alert("el costo de produccion es "+ costopro);
alert("el precio de venta es "+ preciove);*/
