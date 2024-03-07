// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* /* let giveMeRandom = function (n) {
  let randomArray = [];
  for (let i = 0; i < n; i++) {
    randomArray.push(Math.floor(Math.random() * 11));
  }
  return randomArray;
}; */

// console.log(giveMeRandom(4)); */

let checkArray = function (array) {
  let sum = 0;
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      console.log(array[i]);
      sum += array[i];
    }
  }
  return `Questo è il valore della somma di tutti i numeri maggiorri di 5 presenti nell'array: ${sum}`;
};

console.log(checkArray(giveMeRandom(4)));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  {
    name: "dog",
    qty: 4,
    price: 800,
    id: "7a2f94b5-03fa-4aaf-83b0-dcc9dd4d672d",
  },
  {
    name: "cat",
    qty: 2,
    price: 600,
    id: "3d37fb6f-ea1f-4a1e-814e-5f50bdba5399",
  },
  {
    name: "snake",
    qty: 1,
    price: 2200,
    id: "d492f2de-108d-49b1-ab12-e38f686e910e",
  },
];

let shoppingCartTotal = function (bag) {
  let total = 0;
  for (let i = 0; i < bag.length; i++) {
    total += bag[i].price * bag[i].qty;
  }
  return total;
};

console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let addToShoppingCart = function (newObj) {
  shoppingCart.push(newObj);
  return shoppingCart.length;
};

let obj = {
  name: "elefant",
  qty: 1,
  price: 2000,
  id: "1907120e-3259-435b-84ce-ebab5adb4cbd",
};

console.log(addToShoppingCart(obj));
console.log(shoppingCart); // verifica d'inserimento nell'array di partenza

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let maxShoppingCart = function (carrello) {
  if (carrello.length === 0) {
    return null;
  }
  let maxPrice = carrello[0];
  for (let i = 0; i < carrello.length; i++) {
    if (carrello[i].price > /*carrello[0].price*/ maxPrice.price) {
      maxPrice = carrello[i];
    }
  }
  return maxPrice;
};

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let latestShoppingCart = function (lastItem) {
  if (lastItem.length === 0) {
    return null;
  }
  return lastItem[lastItem.length - 1];
};

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 let loopUntil = function (x) {
  if (x >= 0 && x <= 9) {
    let i = 0;
    let randomNumber = 0
    while (i < 3) {
      randomNumber = Math.floor(Math.random() * 10);
      console.log(randomNumber);
      if (randomNumber > x) {
        i++;
      } else {
        i = 0;
      }
    }
  }
};

loopUntil(2); 



/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let mixedArray = [2, 5, "b", 7, "aiuto", true, 10];

let average = function (averagedArray) {
  let total = 0;
  let count = 0;
  for (let i = 0; i < averagedArray.length; i++) {
    if (typeof averagedArray[i] === "number") {
      total += averagedArray[i];
      count++;
    }
  }
  return total / count;
};

console.log(average(mixedArray));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringArray = ["cane", "gatto", "elefante", "dromedario"];

let longest = function (stringed) {
  if (stringed.length === 0) {
    return null;
  }
  let maxStringLength = stringed[0];
  for (let i = 0; i < stringed.length; i++) {
    if (stringed[i].length > maxStringLength.length) {
      maxStringLength = stringed[i];
    }
  }
  return maxStringLength;
};

console.log(longest(stringArray));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let antiSpam = function (emailContent) {
  if (/(SPAM|SCAM)/i.test(emailContent)) {
    return false;
  } else {
    return true;
  }
};

console.log(antiSpam("Questa mail contien la parola spam"));
console.log(antiSpam("Benvenuto nella nostra newsletter"));
console.log(antiSpam("Benvenuto in Epicode"));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let giorniTrascorsi = function (data) {
  // Creiamo la data di oggi
  let today = new Date();
  // console.log(today); prova di stampa della data

  // Creiamo una variabile che abbia come valore la differenza la data di oggi e quella fornita come parametro
  let differenza = today - data;
  // Calcoliamo i giorni passati utilizzando la differenza precedentemente calcolata e convertendo tutto in giorni
  // dividendo per il numero di millisecondi in un giorno
  let giorniPassati = Math.floor(differenza / (1000 * 60 * 60 * 24));
  // ritorniamo i giorni passati
  return giorniPassati;
};

console.log(giorniTrascorsi(new Date(2024, 0, 28))); // stampiato i giorni trascorsi tra la data che inseriamo come parametro
// e quella di oggi

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function matrixGenerator(x, y) {
  // Creiamo un array matrice:
  let matrix = [];
  // Cicliamo per quanto riguarda x (i) ed y (j)
  for (let i = 0; i < x; i++) {
    // Creiamo un array righe:
    let row = [];
    for (let j = 0; j < y; j++) {
      // Inseriamo nell'array righe il valore ciclato di i trasformato in stringa e così anche il valore di y
      row.push(i.toString() + j.toString());
    }
    // pushiamo all'interno del nostro array matrix il nostro array row
    matrix.push(row);
  }
  // ritorniamo matrix
  return matrix;
}

console.log(matrixGenerator(4, 5));
