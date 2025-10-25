/* 
EJERCICIO 17:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "This is a hashtag" se transforma en "#ThisIsAHashtag"
*/
export function exercise17(string) {
  const byWord = string.split(" ");
  const byLetters = byWord.map((word) => word.split(""));
  byLetters.forEach((word) => {
    word[0] = word[0].toUpperCase();
  });
  const hashTag = byLetters.map((word) => word.join("")).join("");
  return `#${hashTag}`;
}
