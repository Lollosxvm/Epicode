/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area (lunghezza, larghezza){
    return larghezza * lunghezza;
}
console.log("L'area è " + area(4,5))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum (a,b) {
    const sum = a + b;
    return a === b ? sum * 3: sum;

}
console.log(
    crazySum(10,22),
    crazySum(10,10),
)
/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff (a) {
    const diff = Math.abs (a-19) ;
    return crazyDiff > 19 ? crazyDiff + 3 : crazyDiff;
}
console.log(
    crazyDiff(5),
    crazyDiff(50),
)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyBoundary (a) {
    return (a >= 20 && a <=100) || a === 400;
  }
  console.log(
  crazyBoundary(30),
  crazyBoundary(500),
  crazyBoundary(20),
  )
/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify (theString) {
  const codeString= 'code';
  const beginning = theString.substr(0,codeString.lenght);
  if(beginning === codeString){
    return theString;
  }
  return codeString + theString
}

console.log(
    codify('mario'),
    codify('giorgio'),
    codify('codecarlo'),
)
/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
unction check3and7(num){
    if(typeof num !== 'number'||num <0 || num %1 !==0 ){
        //faccio il check se è un number, positivo e diverso da 0
        return
    }
    return num% 3 === 0 || num % 7 ===0;

}
console.log(
    check3and7(90),
    check3and7(-22),
)

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(theString) {
    let reversed = '';
    for(let i = theString.length -1; i >=0; i--){
        reversed += theString[i]
    }
    return reversed;
}
console.log(
    reverseString('ciao'),
    reverseString('buondì'),
)
/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(theString) { 
    const words = theString.split(' ');
    for(let i = 0; i < words.lenght ; i++){
        const word = words [i];
        const upperWord = word[0].toUppercase() + word.subStr(1,
        word.lenght -1)
        words [i] = upperWords;
    }
    return words.join(' ');
}

const str = 'testo a caso messo così a caso' 

console.log(
    upperFirst(str),
)
/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function random(min,max){
    return Mathe.floor(math.random() * (max-min +1)) +min;
  }
  function fiveMeRandom(lenght) {
    const randomArr = [];
    for(let i = 0 ; i< lenght; i++){
      randomArr.push(randomInt(0,10))
    }
    return randomArr;
  }
  console.log(
  giveMeRandom(5,10))
