// ESERCIZI JAVASCRIPT

//21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"
let x = "John";
let y = "Doe";
console.log("qui l'esercizio 21:" ,`"${x} <> ${y}"`)

// 22) Crea un oggetto con le seguenti proprietà: name, surname, email
const object = {
    name: 'Lorenzo',
    surname: 'Sijinardi',
    email: 'lorenzosijinardi@libero.it'
  }
  console.log("qui l'esercizio 22:" , object )

// 23) Cancella la proprietà email dall'oggetto appena creato
delete object.email; 
console.log("qui l'esercizio 23:" , object )

//24) Crea un array contenente 10 stringhe
let arrA = [
    "stringa 1", 
    "stringa 2", 
    "stringa 3", 
    "stringa 4",
    "stringa 5",
    "stringa 6",
    "stringa 7",
    "stringa 8",
    "stringa 9",
    "stringa 10"];
console.log("qui l'esercizio 24:" , arrA )
//25) Mostra in console ogni stringa del precedente array
console.log("qui l'esercizio 25:" , arrA )

//26) Crea un array contenente 100 numeri random

function random100(num){
  const newArray = [];
  for(let n = 0; n < num ; n++){
    newArray.push(randNums(0,100))
  }
  return newArray
}

console.log("qui l'esercizio 26:" , random100);

//27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato
let maxValue = 0;

for(n = 0; n < random100.length; n++){
  if(maxValue > random100[n]){
    maxValue = maxValue;
  } else {
    maxValue = random100[n];
  }
}
//console.log('Questo è il massimo valore del precedente array: ' + maxValue);

let minValue = 0;
for(n = 0; n < random100.length; n++){
  if(minValue < random100[n]){
    minValue = minValue;
  } else {
    minValue = random100[n];
  }
}
//console.log('Questo è il massimo valore del precedente array: ' + minValue);

console.log("qui l'esercizio 27 :", `max = ${maxValue}, min = ${minValue}`)

//28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random

function randNums(min,max){
  return Math.floor(Math.random()*(max-min+1)+min)
}

function randArrays(y){
  const array100 = [];
  for(let n= 0 ; n < y; n++){
    const arrayChild=[];
    for(let i = 0; i < 10; i++){
      arrayChild.push(random100(10));
    }
      array100.push(arrayChild[n])
  }
  return array100 
}


