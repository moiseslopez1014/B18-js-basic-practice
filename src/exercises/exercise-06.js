/* 
EJERCICIO 6:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado.

Ejemplos:
"The phrase 'Rats live on no evil star' is palindrome"
"The phrase 'Hello world' is NOT palindrome"

Nota: los signos de puntuación, mayúsculas y espacios deben ser ignorados (no incluyas los acentos). 
*/
export function exercise06(string) {
  const toArray = string.toLowerCase().split("").filter(char => /[a-z0-9]/.test(char)); //set all in lowerCase, split every character into array, and take away everything that is no a letter or a number
return toArray.join('') === toArray.reverse().join('')// compare array with its reversed version (after sit it back to a string)
  ? `The phrase '${string}' is a palindrome` 
  : `The phrase '${string}' is NOT a palindrome`;
}
