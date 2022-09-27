/*
    El usuario informa nota de examen escrito y nota de examen oral.
    Condiciones para aprobar:
        1) Aprobar ambos exámenes con 6 o más.
        2) Aprobar algún examen con 6 o más.
        3) Aprobar algún examen siempre y cuando estemos en el 2022
*/

let notaEscrito = parseInt(prompt("Nota de examen escrito?"));
let notaOral = parseInt(prompt("Nota de examen oral?"));
let anioActual;
let aprobo;
const NOTA_APROB = 6;
const ANIO_ESPERADO = 2022;

// CASO 1
console.log(`1) Aprobar ambos exámenes con ${NOTA_APROB} o más.`);
if(notaEscrito >= NOTA_APROB && notaOral >= NOTA_APROB) {
    console.log("Aprobaste");
} else {
    console.log("NO Aprobaste");
}

// CASO 2
console.log(`2) Aprobar algún examen con ${NOTA_APROB} o más.`);
if(notaEscrito >= NOTA_APROB || notaOral >= NOTA_APROB) {
    console.log("Aprobaste");
} else {
    console.log("NO Aprobaste");
}

// CASO 3
anioActual = new Date().getFullYear();
console.log(`3) Aprobar algún examen siempre y cuando estemos en el ${ANIO_ESPERADO}`);
if((notaEscrito >= NOTA_APROB || notaOral >= NOTA_APROB) && anioActual == ANIO_ESPERADO) {
    console.log("Aprobaste");
} else {
    console.log("NO Aprobaste");
}

// CASO 4
anioActual = new Date().getFullYear();
console.log(`3) Aprobar algún examen siempre y cuando estemos en el ${ANIO_ESPERADO}. SOLO INFORMAR SI NO APROBÓ`);
aprobo = (notaEscrito >= NOTA_APROB || notaOral >= NOTA_APROB) && anioActual == ANIO_ESPERADO;
if( !aprobo ) {
    console.log("NO Aprobaste");
}