function calcularSumaCadena(cadena) {
    let suma = 0;
    if(cadena.length === 0){
        return 0;
    }
    const numeros = cadena.split(/[,-]/);
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] <= 1000)
            suma += parseInt(numeros[i]);
    }
    return suma;
}
export default calcularSumaCadena;