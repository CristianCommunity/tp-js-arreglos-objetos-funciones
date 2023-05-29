/*Resolver los siguientes ejercicios utilizando Funciones, Arreglos y Objetos (Si es necesario)*/
/*1) Crear un programa que pida al usuario que ingrese un número y le devuelva un
mensaje indicando si el número es positivo, negativo o si es 0.*/
let num = parseInt(prompt("Ingrese un número:"));

if (num > 0) {
  console.log("El número es positivo");
} else if (num < 0) {
  colole.log("El número es negativo");
} else {
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
let unidad = prompt(
  "Ingresa la unidad de temperatura (C para Celsius, F para Fahrenheit):"
);

function celsiusAFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function fahrenheitACelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
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
  precioProducto = parseFloat(
    prompt(
      "Ingresa el precio del producto (o escribe 'total' para obtener el total de la compra):"
    )
  );

  if (precioProducto.toLowerCase() == "total") {
    break;
  }

  total += parseFloat(precioProducto);
}

console.log("El total de la compra es: $" + total.toFixed(2));
