// (7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (palabra ="") => {
    if(!palabra) return console.log("No has ingresado ninguna palabra");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves)

        ? console.info(`Si es un palindromo la palabra: ${palabra} y al reves es: ${alReves}`)
        : console.log(`No es un palindromo la palabra: ${palabra}`)
}

palindromo("La ruta nos aporto otro paso natural")