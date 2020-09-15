// (3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, miFuncion('hola que tal', ' ') devolverá['hola', 'que', 'tal'].

const separadorArreglo = (cadena = "", separador = undefined) => 
    (!cadena)
        ? console.log("No ingresaste ninguna cadena")
        : (separador === undefined)
            ? console.log("No ingresaste el separador")
            : console.info(cadena.split(separador))

    separadorArreglo("Pablito, clavo, un, clavito", ",")