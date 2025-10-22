/* 
EJERCICIO 13:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con el título y la descripción 
de las mejores peliculas ordenadas de mejor a peor, siendo las mejores aquellas cuya 
valoración es superior a la valoración media de todas las películas
*/
export function exercise13(movies) {
    const arrayCopied = [...movies]; //Make a copy not referenced
    let averageRating = arrayCopied.reduce((accumulative, movie) => accumulative + movie.rating, 0); // Get the SUM from ratings
    averageRating = averageRating / arrayCopied.length; // get an average 
    const arrayBestMovies = arrayCopied.filter(movie => movie.rating >= averageRating).map(movie => `${movie.title}: ${movie.description}`) //make a new array, with strings made of title and descriptions... from only movies ratings bigger or equal than average
    return arrayBestMovies
}
