/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>” 
Nota: vowels = "aeiou" (no incluyas acentos)
*/
export function exercise03(string) {
  const vowels = "aeiou";
  const splittered = string.split("");
  const filtered = splittered.filter((letter) => vowels.includes(letter));
  const result = filtered.length;
  return `Number of vowels in '${string}' is ${result}`;
}
