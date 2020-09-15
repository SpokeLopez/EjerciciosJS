// (2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, miFuncion("Hola Mundo", 4) devolverá "Hola".

const cortarTexto = (palabra = "", numero = undefined) =>
    !(numero)
        ? console.warn('No ingresaste ninguna palabra')
        : console.info(`El texto recortado es: ${palabra.substr(0, numero)}`);

cortarTexto('Pablito clavo un clavito', 9);
cortarTexto('Mi laptop', 2);
