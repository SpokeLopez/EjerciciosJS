// (9) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const limpiarCadena = (texto ="", patron ="") =>
    (!texto)
        ? console.warn("No ingresaste ninguna cadena")
        : (!patron)
            ? console.warn("No ingresaste ningun patron a limpiar")
            : console.info(texto.replace(new RegExp(patron, "ig"), ""))

limpiarCadena("xyz1, xyz2, xyz3, xyz4, xyz5, xyz", "xyz");