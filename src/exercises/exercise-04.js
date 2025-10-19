/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
Pasándole el string “Hi, I am learning Javascript” la función debe devolver “H,I m lrnng Jvscrpt”
Nota: vowels = "aeiouAEIOU" (no incluyas los acentos)
Atención: cuidado con vocales aisladas y con espacios en blanco dobles
*/
export function exercise04(string) {
  const vowels = "aeiouAEIOU";
  const splittered = string.split(""); // tranform all character in string into array
  const filtrado = splittered.filter(letter => !vowels.includes(letter));  // Set a new array filterin (if letter is NOT in vowel)
  const result = filtrado.join("").replace(/\s+/g, " ").trim(); // result is the new array set into string, replace for double spaced, trim for spaces at start and end.
  return result;
}
