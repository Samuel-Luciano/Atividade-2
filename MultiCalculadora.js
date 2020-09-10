function acessarIMC(){
			location.href = "MultiCalculadora.html";
		}

function acessarRetangulo(){
			location.href = "retangulo.html";
		}

function acessarCirculo(){
			location.href = "circulo.html";
		}

function calcularIMC(){
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;
	var resultado = peso/(altura*altura);
	alert("O IMC é " + resultado);
}

function calcularRetangulo(){
	var base = document.getElementById("base").value;
	var altura = document.getElementById("altura").value;
	var resultado = base*altura;
	alert("A área do retângulo é " + resultado);
}

function calcularCirculo(){
	var raio = document.getElementById("raio").value;
	var resultado = raio*raio*3.14
	alert("A área do círculo é " + resultado);
}