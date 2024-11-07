function calcularSumaCadena(cadena) {
    let suma = 0;
    if (cadena.length === 0) {
        return 0;
    }

    let delimitadores = /[,-]+/; // Delimitadores predeterminados
    let numerosCadena = cadena;  // Inicializamos con la cadena original

    // Comprobar si hay un delimitador personalizado
    const delimitadorPersonal = cadena.match(/^\/\/\[(.+?)\]\s*/);
    if (delimitadorPersonal) {
        const escapedDelimiter = delimitadorPersonal[1].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escapamos caracteres especiales
        delimitadores = new RegExp(`[${escapedDelimiter},-]+`); // Creamos la expresión regular para el delimitador personalizado junto con ',' y '-'
        numerosCadena = cadena.slice(delimitadorPersonal[0].length); // Recortamos la cadena para eliminar el delimitador
    }

    // Separamos los números usando los delimitadores
    const numeros = numerosCadena.split(delimitadores);

    // Sumamos los números ignorando los que son mayores a 1000
    for (let i = 0; i < numeros.length; i++) {
        const numero = parseInt(numeros[i]);
        if (numero <= 1000) {
            suma += numero;
        }
    }

    return suma;
}

export default calcularSumaCadena;
