/* Ejercicios de Funciones: */
/* Escribe una función llamada esMayorEdad; que reciba una edad como parámetro y devuelva
true si la edad es mayor o igual a 18, y false en caso contrario. */
function esMayorEdad (edad){
    return edad>=18
    }

/* Crea una función llamada calcularAreaRectangulo; que tome dos parámetros: base y altura.
La función debe calcular y devolver el área del rectángulo utilizando la fórmula área = base *
altura. */
function calcularAreaRectangulo (base, altura) {
    let area = base * altura;
    return area;
}

/* Implementa una función llamada esPalindromo que reciba una cadena como parámetro y
devuelva true si la cadena es un palíndromo (se lee igual de izquierda a derecha y de derecha a
izquierda), y false en caso contrario. Por ejemplo, para la cadena radar la función debería
devolver true. */
function esPalindromo (cadena) {
    let t = cadena.length;


  for (let i = 0;i < t / 2;i++) {
      if (cadena[i] != cadena[t-1-i]) {
          return false;
      }
  }
  return true;
}


/* Crea una función llamada generarNumeroAleatorio que no tome parámetros y devuelva un
número entero aleatorio entre 1 y 10. */
function generarNumeroAleatorio() {
    let num = parseFloat(Math.random() * 10) + 1;
    return generarNumeroAleatorio;
}


/* Ejercicios de Arreglos: */
/* Crea una función llamada obtenerSuma que reciba un arreglo de números como parámetro y
devuelva la suma de todos los elementos del arreglo.*/
function obtenerSuma (arreglo) {
    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    return suma;
}


/*Implementa una función llamada obtenerPares que tome un arreglo de números como
parámetro y devuelva un nuevo arreglo con solo los números pares del arreglo original.*/
function obtenerPares (arreglo) {
    let numpares = [];

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
          numpares.push(arreglo[i]);
        }
      }
    
      return numpares;

}


/*Escribe una función llamada obtenerPromedioPondera que reciba dos arreglos: uno con
las notas de los estudiantes y otro con los pesos correspondientes. La función debe calcular y
devolver el promedio ponderado de las notas.*/
function obtenerPromedioPonderado (notas, pesos) {

    let sumaponderada = 0;
    let sumapesos = 0;

    for (let i = 0; i<notas.length; i++) {
        sumaponderada += notas[i] * pesos[i];
        sumapesos += pesos[i];
    }

    let promedioPon = sumaponderada / sumapesos;
    return promedioPon;
}


/*Crea una función llamada obtenerMaximo que tome un arreglo de números como
parámetro y devuelva el número máximo encontrado en el arreglo.*/
function obtenerMaximo (arreglo) {
    let numMayor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++){
        if (arreglo[i] > numMayor){
            numMayor = arreglo[i];
        }
    }
    return numMayor;
}


/*Ejercicios de Objetos:*/
/*Crea un objeto llamado producto con las propiedades nombre, precio y cantidad.
Luego, escribe una función llamada calcularTotal que tome un objeto producto como
parámetro y devuelva el total a pagar (precio * cantidad).*/
const producto = {
    nombre: "remera",
    precio: 1500,
    cantidad: 2,
}

function calcularTotal(producto){
    let totalAPagar = producto.precio * producto.cantidad;
    return totalAPagar;
}


/*Implementa un objeto llamado persona con las propiedades nombre, edad y profesion.
A continuación, escribe una función llamada presentarPersona que tome un objeto persona
como parámetro y muestre en la consola una presentación de la persona.*/
const persona = {
    nombre: "Cristian",
    edad: 40,
    profesion: "Estudiante",
}

function presentarPersona (persona) {
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("Profesión: " + persona.profesion);

}

console.log(presentarPersona(persona));


/*Crea una función llamada esMayorEdad que reciba un objeto persona como parámetro y
devuelva true si la persona es mayor de edad (edad mayor o igual a 18), y false en caso
contrario.*/
const persona1 = {
    nombre: "Cristian",
    edad: 21,
}
function esMayorEdad(persona) {
    if(persona.edad>=18){
        return true;
    }
        else {
        return false;
    }
    
}


/*Resolver los siguientes ejercicios utilizando Funciones, Arreglos y Objetos (Si es necesario)*/
/*1) Crear un programa que pida al usuario que ingrese un número y le devuelva un
mensaje indicando si el número es positivo, negativo o si es 0.*/
let num = parseInt(prompt("Ingrese un número:"));

if(num > 0){
  console.log("El número es positivo");
}
else if (num < 0){
  colole.log("El número es negativo");
}
else {
  console.log("El número es cero");
}


/*2) Crear un programa que pida un numero al usuario y le devuelva un mensaje diciendo si
el número es primo o no.*/
let numero = parseInt(prompt("Ingrese un número"));

function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
          return false;
        }
      }
      return true;
    }

    if (esPrimo(numero)) {
        console.log("El número es primo");

      } else {
        console.log("El número no es primo");
      }



/*3) Crear un programa que convierta la temperatura de grados Celsius a Faranheit y
viceversa. El usuario debería ingresar la temperatura y a que unidad la quiere convertir.*/
// Función para convertir de Celsius a Fahrenheit
let temperatura = prompt("Ingresa la temperatura:");
let unidad = prompt("Ingresa la unidad de temperatura (C para Celsius, F para Fahrenheit):");

function celsiusAFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
function fahrenheitACelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }
  
if (unidad == "C" || unidad == "c") {
    let fahrenheit = celsiusAFahrenheit(parseFloat(temperatura));
    console.log(temperatura + "°C es igual a " + fahrenheit.toFixed(2) + "°F");

  } else if (unidad == "F" || unidad == "f") {
    let celsius = fahrenheitToCelsius(parseFloat(temperatura));
    console.log(temperatura + "°F es igual a " + celsius.toFixed(2) + "°C");

  } else {
    console.log("Unidad de temperatura inválida. Debe ser C o F.");
  }
  


/*4) Crear un programa para calcular el total de una compra. Para ello se tiene que pedir al
usuario que ingrese el precio de cada producto y cuando se le pide que ingrese la
palabra total devolverle el total de la compra.*/
let precioProducto;
let total = 0;

while (true) {
    precioProducto = parseFloat(prompt("Ingresa el precio del producto (o escribe 'total' para obtener el total de la compra):"));
  
    if (precioProducto.toLowerCase() == "total") {
      break;
    }
    
    total += parseFloat(precioProducto);
}

console.log("El total de la compra es: $" + total.toFixed(2));
