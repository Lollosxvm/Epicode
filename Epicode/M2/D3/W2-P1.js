/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 5;
let num2 = 10;

if (num1 > num2) {
  alert("num1 < num2 ")
} else {
  alert("num1 > num2")
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 20

if (num3 !== 0) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num5 = 50;
if (num5 % 5 == 0) {
  console.log("divisible by 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num5 = 10;
let num6 = 40;
if ((num5 === 8) || (num6 === 8) || (num5 - num6 === 8) || (num5 + num6 === 8)) {
  console.log("true")
}else {
  console.log("false")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 20;
    let shipping = 10;
     if(totalShoppingCart >= 50) {
         console.log("free")
       }else {
           console.log("pay for shipping")
         }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 5;
     let shipping = 10;
     let BlackFriday = (totalShoppingCart / 100) * 20;
     let total = totalShoppingCart - BlackFriday; 
     if(total >= 50) {
         console.log("l'ordine ha un costo di euro " + total )
       }else {
           console.log("l'ordine ha un costo di euro "+ total + " + (spese di spedizione) euro "+ shipping , "Per un totale di" , total + shipping )
         }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 1 ;
let b = 2 ;
let c = 3 ;
if (a>b && a>c){
  if (b>c){
    console.log(a + ", " + b + ", " +c);
  } else{
    console.log(a + ", " + c + ", " +b);
  }
} else if (b>a && b>c){
  if (a>c){
    console.log(b + ", " + a + ", " +c);
  } else {
    console.log(b + ", " + c + ", " +a);
  }
} else if (c>a && c>b) {
  if (a>b){
    console.log(c + ", " + a + ", " +b);
  } else {
    console.log(c + ", " + b + ", " +a);
  }
} 

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 15;
console.log(typeof a);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num10 = 58420;
 if (num10 % 2 == 0 ) {
  console.log("pari")
 }else {
  console.log("dispari")
 }
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 4
if (val < 10 && val >= 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }


/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 155 ;
if (num < 5 && num >=0 ){
  console.log("Tiny")
}else if (num <10 && num >=5){
  console.log("Small")
}else if (num <15 && num >=10){
  console.log("Medium")
  }else if (num <19 && num >=15){
  console.log("Large")
  }else {
      console.log('Huge');
    }
    

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let isMale = true;
    let gender = isMale == true ? 'Male' : 'Female';
    console.log(gender);

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 100;
while (num <=110) {
  console.log(num);
  num++;
}
/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for(let a = 0; a <= 10; a++){
  console.log(a);
}
/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 0;
      while(a < 10){
      a++;
        if(a == 3 || a == 8){
          a-1;
          continue;
        }
        console.log(a);
      }
/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for(i=0; i<=15; i++){
  
  if(i % 2 == 0){
    console.log(i+' pari');
    continue;
  } else {
    console.log(i+' dispari');
    continue;
  }

  console.log(i);
}
/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for(i=0; i<=100; ++i){
  
  if((i % 3 == 0) && (i % 5 == 0)){
    console.log('FizzBuzz');
      continue;
 } else if(i % 3 == 0){
    console.log('Fizz');
    continue;
  } else if(i % 5 == 0){
    console.log('Buzz');
    continue;
  } 
  console.log(i);
}
/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let day = 3;
    switch(day){
      case 1: 
        console.log('Lunedì');
        break;
      case 2:
        console.log('Martedì');
        break;
      case 3:
        console.log('Mercoledì');
        break;
      case 4:
        console.log('Giovedì');
        break;
      case 5:
        console.log('Venerdì');
        break;
      case 6:
        console.log('Sabato');
        break;
      case 7:
        console.log('Domenica');
        break;
    }
