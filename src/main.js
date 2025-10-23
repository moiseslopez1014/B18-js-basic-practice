// ***** NO TOCAR ESTE ARCHIVO ***** //
import "./style.css";
import { showResult } from "./utils.js";
import { movies, categories } from "./data.js";
import * as exercises from "./exercises";

showResult(1, exercises.exercise01("Pepe"));
showResult(2, exercises.exercise02(10));
showResult(3, exercises.exercise03("Hello world!"));
showResult(4, exercises.exercise04("Hi, I am learning Javascript AAA"));
showResult(5, exercises.exercise05("Supercalifragilisticexpialidocious")); //I couldn't resist
showResult(6, exercises.exercise06("TENET")); // I needed to investigate about what exactly a palindrome is, because I was wrong. I didnt even know a palindrome could be numbers, phrases with commas, dates with numbers and / symbol or also that a palindrome could be an odd string with a central letter that doesn't repeat, so I also discover one of the first palindromes historically recorded, TENET, wich is one of the most insane brain-grinder Nolan's films. wich gives me an insight on how is this lenguage going to be (spoiler: I couldn't understand TENET, so...)
showResult(7, exercises.exercise07(new Date()));
showResult(8, exercises.exercise08(2000));
showResult(9, exercises.exercise09(10, 0, 100));
showResult(10, exercises.exercise10("Hello world"));
showResult(11, exercises.exercise11(movies));
showResult(12, exercises.exercise12(movies));
showResult(13, exercises.exercise13(movies.slice(0, 5)));
showResult(14, exercises.exercise14(movies.slice(0, 5), categories));
showResult(15, exercises.exercise15(movies.slice(0, 5)));
// showResult(16, exercises.exercise16(movies));
// showResult(17, exercises.exercise17("This is a hashtag"));
// showResult(18, exercises.exercise18("Hello world"));
// showResult(19, exercises.exercise19("Code deco"));
// showResult(20, exercises.exercise20("10"));
// showResult(20, exercises.exercise20Iterative("10"));
