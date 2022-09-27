/*
    Le pedimos al user su nombre y en qué año nació.
    La máquina procesa y muestra un saludo y su
    edad.
*/
let nombreUsuario;
let anioDeNacimiento;
let edad;

// ENTRADA
nombreUsuario = prompt("¿Cuál es tu nombre?");
anioDeNacimiento = prompt("¿En qué año naciste?");
anioActual = new Date().getFullYear();

// PROCESO
anioDeNacimiento = parseInt(anioDeNacimiento);
edad = anioActual - anioDeNacimiento;

// SALIDA(S)
console.log("Hola " + nombreUsuario + "! Tenés " + edad + " años");