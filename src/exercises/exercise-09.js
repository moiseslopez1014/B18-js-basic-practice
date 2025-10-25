/* 
EJERCICIO 9:
Genera un array de un determinado tamaño con números aleatorios entre dos valores
y calcula el menor y el mayor de estos números.
Pista: Usar Math.round() y  Math.random() viendo documentación

Ejemplo: 
  exercise09(5, 0, 100) 
  devuelve "The minimum number is 0 and the maximum number is 100 in [0,50,99,49,100]"
*/
export function exercise09(length, start, end) {
  const arrayOfRandomNumbers = [];
  for (let i = 0; i < length; i++) {
    let randomized = Math.random() * (end - start) + start;
    randomized = Math.round(randomized);
    arrayOfRandomNumbers.push(randomized);
  }
  const arraySorted = [...arrayOfRandomNumbers].sort(
    (num1, num2) => num1 - num2
  );
  const min = arraySorted[0];
  const max = arraySorted[arraySorted.length - 1];

  return `The minimum number is ${min} and the maximum number is ${max} in ${arrayOfRandomNumbers}`;
}
