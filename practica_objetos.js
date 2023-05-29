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
