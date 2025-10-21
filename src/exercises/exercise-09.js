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
  const arrayOfRandomNumbers = []; // all numbers will go here
  for (let i = 0; i < length; i++) { // repeat the same times as length
    let randomized = Math.random() * (end-start) + start;//Declares a random 0.nnnnn...  multiply it to get from min to max (Example: 0.75247252 * 100-0  + 0(min)= 75.247252)
    randomized = Math.round(randomized); // 75.247252 roundup = 75
    arrayOfRandomNumbers.push(randomized); //introduces number in array
  }
  const arraySorted = [...arrayOfRandomNumbers].sort((num1,num2) => num1 - num2);// copy array and sort
  const min = arraySorted[0]; //min is first index arraysorted
  const max = arraySorted[arraySorted.length - 1]; //max is last index arraysorted

  return `The minimum number is ${min} and the maximum number is ${max} in ${arrayOfRandomNumbers}`;
}
