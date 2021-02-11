// (10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0) => {
    if(!numero) return console.warn("No ingresaste un número");

    // Evaluamos que el usuario digite siempre un entero

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado NO es nu número`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves)
        ? console.info(`Si es capícua, Número original ${numero}, Número al revés ${alReves}`)
        : console.info(`El número ${numero} no es capícua`);
}

capicua(2002);