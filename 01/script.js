// (1) Programa una función que cuente el número de caracteres de una cadena de texto. miFuncion("Hola Mundo") devolverá = 10.
        
// Ejercicio 1 con funcion
function numCaracteres(cadena = "") {
    if (!cadena) {
        console.warn('No has ingresado ninguna cadena');
        } else {
        console.info(`La cadena: ${cadena} tiene ${cadena.length} caracteres`);
            }
        }
    // numCaracteres("Hola Mundo");

// Ejercicio con arrowFunction
const contarCaracteres = (oracion = "") =>
    (!oracion) ?
        console.warn('No has ingresado ninguna cadena') :
        console.info(`La cadena: ${cadena} tiene ${cadena.length} caracteres`);

numCaracteres("Te estaba avisando");