// (4) Programa una función que repita un texto X veces, miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo HolaMundo.

const repetirTexto = (texto ="", nveces = undefined) =>{
    if(!texto)  return console.warn("No ingresaste texto");
    
    if(nveces === undefined) return console.warn("Debes ingresar el numero de veces a repetir el texto");

    if (nveces === 0) return console.error("Debes ingresar el numero de veces a repetir el texto");

    if (Math.sign(nveces) === -1) return console.error("No puede ser negativo el numero de veces"); 

    for (let i=1; i<= nveces; i++)  console.info(`Resultado:  ${texto}, ${i}`);

}

    repetirTexto("Hola", 3);
