/* 
EJERCICIO 11:
Escribe una función que pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js" devuelve un array con el título de las 
películas ordenadas alfabéticamente por el título.

Consejo: 
puedes definir en utils.js una función auxiliar para ordenar las cadenas
que recibe como parámetro dos cadenas y devuelve -1 si la primera es menor que la segunda, 
0 si son iguales y 1 si la primera es mayor que la segunda.
*/
import { sortStrings } from "../utils.js";
import { movies } from "../data.js";
export function exercise12(movies) { //receive array with objects
    const arrayFiltered = [...movies]; //Make a copy not referenced
    const arrayTitles = []; //create new array for the titles
    arrayFiltered.forEach(movie => { //alternative to map, get title strings from array and push it to new array
        arrayTitles.push(movie.title);
    })
    return arrayTitles.sort(sortStrings); //Auxiliary function, add functionality to sort, ignore uppercase before comparing and then return -1, 0 or 1
}
