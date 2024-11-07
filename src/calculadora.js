function calcularSumaCadena(cadena) {
    let suma = 0;
    if(cadena.length === 0){
        return 0;
    }
    let delimitadores = /[,-]/;
    let numerosCadena = cadena;
    if(cadena.startsWith("//")){
        const delimitadorEspesificado = cadena[3];
        delimitadores = new RegExp(`[${delimitadorEspesificado},-]`);
        numerosCadena = cadena.substring(6);
    }
    const numeros = numerosCadena.split(delimitadores);
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i] <= 1000)
            suma += parseInt(numeros[i]);
    }
    return suma;
}
export default calcularSumaCadena;