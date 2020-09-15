//  (5) Programa una función que invierta las palabras de una cadena de texto, ("Hola Mundo") devolverá "odnuM aloH".

const Cinvertida = (cadena = "") => 
    (!cadena)
        ? console.warn("No ingresaste ninguna cadena de texto")
        : console.info(cadena.split("").reverse().join(""))

    Cinvertida("spokelopez");