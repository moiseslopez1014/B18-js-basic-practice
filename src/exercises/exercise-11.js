/* 
EJERCICIO 11:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con las peliculas ordenadas 
por valoracion (propiedad "rating") de mayor a menor  
*/
export function exercise11(movies) {
  const moviesToSort = [...movies]; // not reference the original array
  const moviesSortedByRating = moviesToSort.sort((movie1,movie2) => movie2.rating - movie1.rating); // sort all the objects by biggest object.rating to smallest object.rating
  return moviesSortedByRating;
}
