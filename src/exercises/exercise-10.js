/* 
EJERCICIO 10:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar funciones auxiliares de ejercicios anteriores si las declaraste.
*/
export function exercise10(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetSplittered = alphabet.split("");
  let stringTolowerCase = string.toLowerCase();
  const stringFiltered = stringTolowerCase
    .split("")
    .filter((char) => alphabet.includes(char));

  const positions = stringFiltered.map((char) => {
    const indexPosition = alphabetSplittered.indexOf(char) + 1;
    return indexPosition;
  });
  return `the positions for ${string} are ${positions}`;
}
