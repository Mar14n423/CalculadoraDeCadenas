function calcularSumaCadena(cadena) {
    let suma = 0;
    if(cadena.length === 0){
        return 0;
    }
    if(cadena.length === 1)
        return parseInt(cadena);
      
    suma += parseInt(cadena[0]) + parseInt(cadena[2]);
    return suma;
}
export default calcularSumaCadena;