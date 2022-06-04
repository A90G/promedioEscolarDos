/*•El DT de los infantiles del equipo de fútbol desea
saber el promedio de la edad de los chicos
• La edad de los chicos va de 3 a 7 años. Las
edades son cargadas al azar (use la función
aleatorio(menorValor, mayorValor), es decir
aleatorio(3,7))
• Muestre todas las edades y el promedio de las
mismas*/


let dimensionArreglo: number = Number(
  prompt(`Ingrese la dimensión del equipo de fùtbol:`)
);
// la dimensiòn es solicitada al usuario
let arreglo1: number[] = new Array(dimensionArreglo);
let indice1: number;
let mayor:number = 7;
let menor:number = 3;

function aleatorio(menor: number, mayor: number): number {
  return Math.floor(Math.random() * (mayor + 1 - menor) + menor);
}

for (indice1 = 0; indice1 < dimensionArreglo; indice1++) {
  arreglo1[indice1] = aleatorio (menor, mayor); 
  console.log(`El niño posición ${indice1} tiene: ${arreglo1[indice1]}`);
}
// cumple con las funciones solicitadas
function promedio (arreglo1: number[]): number {
  let resultado: number = 0;
  let prom: number = 0;
  for (let i = 0; i < arreglo1.length; i++) {
    resultado += arreglo1[i];
  }
  prom = resultado / arreglo1.length;
  return prom;
}
//se muestran los resultados de la manera solicitada
console.log("el promedio de las edades es:", promedio(arreglo1));
