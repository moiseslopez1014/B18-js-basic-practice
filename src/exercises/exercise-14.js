/* 
EJERCICIO 14:
Escribe una función que pasándole "movies" y "categories" del archivo data.js
como parámetros filtra las películas que pertenezcan a la categoria "Drama" 
e incluye solo el título y la descripción.
*/
export function exercise14(movies, categories) {
  const ex14Movies = [...movies];
  const ex14DramaCategory = categories.drama;
  const filteredByDrama = ex14Movies.filter(
    (movie) => movie.category === ex14DramaCategory
  );
  return filteredByDrama.map((movie) => `${movie.title}: ${movie.description}`);
}
