import { exercise18 } from "./exercise-18.js";
/* 
EJERCICIO 19:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje.

Ejemplos:
"the string 'Code deco' is an isogram"
"the string 'hello world' is not an isogram"
*/
export function exercise19(string) {
  const letterValues = Object.values(lettersOcurrences(string));
  const isIsogram = letterValues.every((val) => val === letterValues[0]);
  return `the string '${string}' is ${isIsogram ? "" : "not "}an isogram`;
}

function lettersOcurrences(string) {
  return exercise18(string);
}
