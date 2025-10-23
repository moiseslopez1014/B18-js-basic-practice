/* 
EJERCICIO 14:
Escribe una función que pasándole "movies" y "categories" del archivo data.js
como parámetros filtra las películas que pertenezcan a la categoria "Drama" 
e incluye solo el título y la descripción.
*/
export function exercise14(movies, categories) {
  
  const ex14Movies = [...movies]; //makes a copy, as always
  const ex14DramaCategory = categories.drama; // defines the category as a string
  const filteredByDrama = ex14Movies.filter(movie => movie.category === ex14DramaCategory); // filter movies comparing the category string in categories with the string in movie - category
  return filteredByDrama.map((movie) => `${movie.title}: ${movie.description}`); // Return the filtered array with title: and description
}