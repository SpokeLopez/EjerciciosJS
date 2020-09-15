// (6) Programa una función para contar el número de veces que se repite una palabra en un texto largo. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const nRepeticion = (cadena = "", palabra = "") =>{
    if(!cadena) return console.log("No has agregado una cadena para validar");

    if(!palabra) return console.log("Debes agregar la palabra a evaluar");

    let i = 0,
        contador = 0;
        cadena = cadena.toLowerCase();

    while(i!==-1){
        i = cadena.indexOf(palabra,i);
    
        if(i!==-1){
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${palabra}, se repite ${contador} veces`);
}

nRepeticion("Hola MUNDO, adios mundo","mundo")