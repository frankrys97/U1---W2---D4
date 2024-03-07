/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

let area = function (l1, l2) {
  return l1 * l2;
};

console.log(area(5, 4));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

let crazySum = function (a, b) {
  if (a !== b) {
    return a + b;
  } else {
    return (a + b) * 3;
  }
};

console.log(crazySum(5, 4));
console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

let crazyDiff = function (a) {
  if (a < 19) {
    return Math.abs(a - 19);
  } else {
    return Math.abs((a - 19) * 3);
  }
};

console.log(crazyDiff(2));
console.log(crazyDiff(21));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

let boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(25));
console.log(boundary(2));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let epify = function (stringa) {
  if (stringa.slice(0, 7) === "EPICODE") {
    // In questo modo noi tagliamo la stringa e prendiamo
    // solo la prima parola che nel nostro caso dovrebbe essere uguale ad EPICODE
    return stringa;
  } else {
    return "EPICODE" + " " + stringa;
  }
};

// Lo stesso esercizio avremmo potuto anche usare il metodo: stringa.startsWith (EPICODE)

console.log(epify("non è facile"));
console.log(epify("EPICODE è impegnativa"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

let check3and7 = function (n) {
  if (n > 0 && (n % 3 === 0 || n % 7 === 0)) {
    return "n è multiplo di 3 o 7";
  } else {
    return "n è minore di 0 oppure non è multiplo di 3 o 7";
  }
};

console.log(check3and7(3));
console.log(check3and7(21));
console.log(check3and7(-4));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

let reverseString = function (sentence) {
  return sentence.split("").reverse().join("");
};

console.log(reverseString("Epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

let upperFirst = function (words) {
  let arrayWords = words.split(" ");
  for (let i = 0; i < arrayWords.length; i++) {
    arrayWords[i] =
      arrayWords[i].charAt(0).toUpperCase() + arrayWords[i].slice(1);
  }
  let modifiedWords = arrayWords.join(" ");
  return modifiedWords;
};

console.log(upperFirst("cane gatto elefante"));

// Questo esercizio lo svolgiamo in diversi passaggi, facendo in questo modo:
// creiamo una funzione che accetta come parametro una stringa
// creiamo una nuova variabile arrayWords che corrisponde ad un array creato con il metodo .split della stringa
// successivamente iteriamo nell'array e diciamo che gli elementi dell'array devono corrispondere
// al primo carattere (charAt(0), 0 perchè corrisponde proprio al primo carattere di ogni stringa) degli elementi nell'array,
//  ed a questo carattere applichiamo il metodo toUpperCase (), + il resto dei caratteri degli elementi degli array da cui
// abbiamo tolto il primo carattere con il metodo slice (1), uno proprio ad indicare che prendiamo la restante parte della parola
// tagliata del primo carattaere, sostanzialmente cominciando dal secondo che ha valore 1.

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

let cutString = function (cutting) {
  return cutting.split("").slice(1, -1).join("");
};

console.log(cutString("Elefante"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

let giveMeRandom = function (n) {
  let randomArray = [];
  for (let i = 0; i < n; i++) {
    randomArray.push(Math.floor(Math.random() * 11));
  }
  return randomArray;
};

console.log(giveMeRandom(4));
