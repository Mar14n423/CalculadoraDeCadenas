function calcularSumaCadena(cadena) {
    let suma = 0;
    if(cadena.length === 0){
        return 0;
    }
    const numeros = cadena.split(/[,-]/);
    for (let i = 0; i < numeros.length; i++) {
        suma += parseInt(numeros[i]);
    }
    return suma;
}
export default calcularSumaCadena;