/* 
EJERCICIO 16:
Escribe una función que devuelva un array que solo incluya el titulo de la pelicula mejor valorada de cada uno de estos actores: 
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks

Nota: asegurate que no hay titulos duplicados
*/
export function exercise16(movies) {
  const actors = ["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"];
  const ex16Movies = [...movies];
  const BestDiCaprio = ex16Movies
    .filter((movie) => movie.actors.includes(actors[0]))
    .sort((a, b) => a.rating - b.rating)
    .pop();
  const BestDeNiro = ex16Movies
    .filter((movie) => movie.actors.includes(actors[1]))
    .sort((a, b) => a.rating - b.rating)
    .pop();
  const BestHanks = ex16Movies
    .filter((movie) => movie.actors.includes(actors[2]))
    .sort((a, b) => a.rating - b.rating)
    .pop();
  const BestMoviesSelected = [];
  BestMoviesSelected.push(
    BestDeNiro.title,
    BestDiCaprio.title,
    BestHanks.title
  );
  return Array.from(new Set(BestMoviesSelected));
}
