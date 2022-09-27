/*
    El usuario ingresa su edad. La PC le dice si pasa o no al casino.
    Upgrade: Si es menor, decirle cuántos años le faltan para entrar.
    Upgrade: Si se ingresa una edad negativa, informar que no es válido.
*/

let edad;
let difEdad;
const NO_VALIDA = "no es una edad válida";
const MENOR_EDAD = "No, todavía sos menor de edad";
const EDAD_MINIMA = 0;
const EDAD_MINIMA_CASINO = 18;
const EDAD_VALIDA = "Sí, podés pasar";

edad = parseInt(prompt("Ingresá tu edad"));
/*
if(edad > EDAD_MINIMA) {
    if ( edad >= EDAD_MINIMA_CASINO ) {
        console.log("Sí, podés pasar");
    } else {
        difEdad =  EDAD_MINIMA_CASINO - edad;
        console.log("No, todavía sos menor de edad");
        //console.log("Te faltan " + difEdad + " años para entrar"); // Sintaxis vieja
        console.log(`Te faltan ${difEdad} años para entrar`); // Sintaxis moderna
    }
    console.log("Adiós");
} else {
    console.log(`${edad} no es una edad válida`);
}
console.log("Finalizó el programa"); // Sale siempre*/

if (edad <= EDAD_MINIMA) {
    console.log(`${edad} ${NO_VALIDA} `);
} else if (edad < EDAD_MINIMA_CASINO) {
    difEdad = EDAD_MINIMA_CASINO - edad;
    console.log(`${MENOR_EDAD}`);
    console.log(`Te faltan ${difEdad} ${difEdad > 1 ? "años" : "año"} para entrar`); // Sintaxis moderna
} else {
    console.log(`${EDAD_VALIDA}`);
}