/* 
EJERCICIO 13:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con el título y la descripción 
de las mejores peliculas ordenadas de mejor a peor, siendo las mejores aquellas cuya 
valoración es superior a la valoración media de todas las películas
*/
export function exercise13(movies) {
  const arrayCopied = [...movies];
  let averageRating =
    arrayCopied.reduce(
      (accumulative, movie) => accumulative + movie.rating,
      0
    ) / arrayCopied.length;

  return arrayCopied
    .filter((movie) => movie.rating >= averageRating)
    .sort((a, b) => b.rating - a.rating)
    .map((movie) => `${movie.title}: ${movie.description}`);
}
