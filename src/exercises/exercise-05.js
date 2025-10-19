/* 
EJERCICIO 5:
Escribe una función que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
  exercise05('code') // result: "COoDddEeee"
  exercise05('list') // result: "LIiSssTttt"
  exercise05('function') // result: "FUuNnnCcccTttttIiiiiiOooooooNnnnnnnn"
*/
export function exercise05(string) {
  const splittered = string.split(""); // tranform all character in string into array
  const duplicateLetters = splittered.map((letter, index) => { // function for new array with letter and index
      const repeated = letter.toLowerCase().repeat(index + 1); // transform letters, and repeat the as much as index plus 1 (index start at 0)
      return repeated.charAt(0).toUpperCase() + repeated.slice(1); //return first letter transformed to upperCase, plus the rest
    });
  const result = duplicateLetters.join("") // Transform into string
  return result;
}
