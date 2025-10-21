/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>” 
Nota: vowels = "aeiou" (no incluyas acentos)
*/
export function exercise03(string) {
  const vowels = "aeiou";
  const splittered = string.split(""); // tranform all character in string into array
  const filtered = splittered.filter(letter => vowels.includes(letter));  // Set a new array filterin (if letter is a vowel)
  const result = filtered.length; // result is number of elements in filtered array
  return `Number of vowels in '${string}' is ${result}`;
}
