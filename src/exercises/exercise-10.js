/* 
EJERCICIO 10:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar funciones auxiliares de ejercicios anteriores si las declaraste.
*/
export function exercise10(string) { // Ok,we introduce a string like a phrase
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; // this the alphabet
  const alphabetSplittered = alphabet.split(""); // we split, later were gonna use it to get de index
  let stringTolowerCase = string.toLowerCase(); // we transform text to convert uppercase letters
  const stringFiltered = stringTolowerCase.split("").filter(char => (alphabet.includes(char))) // we split in array, and we filter our any character is not in our alphabet
  
  const positions = stringFiltered.map(char => { // get positions in index with the filtered string map
    const indexPosition = alphabetSplittered.indexOf(char) + 1; //get the index in the alphabet for the selected letter (+1 because arrays starts at 0)
    return indexPosition; //return that numbers into array positions
  })
  return `the positions for ${string} are ${positions}`
}
exercise10('Hello, world');