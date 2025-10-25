/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Crea 2 funcines que dado un número entero devuelva el Fibonacci de ese número como parámetro. 
La primera función debe ser recursiva y la segunda iterativa.

Ejemplo: Fibonacci(20) = 6765

Nota: evita llamar a la función con números altos en la versión recursiva.
*/

export function exercise20(n) {
    if (n === 0) { //first fib position
    return 0;
  }
  if (n === 1) { //second fib position
    return 1;
  }
  return exercise20(n-1) + exercise20(n-2); //returns fib position -1 + fib position -2 (position 10 would be 34(fib9(fib8+fib7)) + 21(fib8)...)
}

export function exercise20Iterative(n) {
  if (n === 0) { //first fib position
    return 0;
  }
  if (n === 1) { //second fib position
    return 1;
  }

  let previousNumber = 0; 
  let currentNumber = 1; //Start here
  let nexNumber; 

  for (let i = 2; i <= n; i++) { // start second fib position
    nexNumber = previousNumber + currentNumber; //next = 0+1
    previousNumber = currentNumber; //when restart for next fib position, previous will be current 0 becomes 1
    currentNumber = nexNumber;//and current will be next 1 becomes 1
  }
  return currentNumber;
}
