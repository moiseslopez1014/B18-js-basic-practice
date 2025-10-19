/* 
EJERCICIO 8:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
Nota: los siglos comienzan el 1 de enero de un año terminado en 1 y finalizan el 31 de diciembre de un año terminado en 0. 
*/
export function exercise08(year) {
  let century = Math.ceil(year/100) //Always round up decimal (2/100 0.02 -- 1st century. 1348/100 13.48 -- 14th century)  
  return `The year ${year} belongs to the ${century}st century`; //this will alway show st no matter the century, maybe an if to determine suffix
}
