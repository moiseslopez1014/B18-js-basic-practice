/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite en el string cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}

Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/
export function exercise18(string) {

  const letterCounter = {}; //set an object for the counter
  const ex18ToArray = string.toLowerCase().match(/[a-z]/g); //transform the string into array with just characters a to z
  
  ex18ToArray.forEach(letter => { // for each letter of the array
    if (letterCounter[letter]) { // if lettercounter property named (letter from the array) already exist..
      letterCounter[letter]++; //increment value of that property
    }
    else {
      letterCounter[letter] = 1; // if still not exist, create the property with value 1.
    }
  })

  return letterCounter;
}
