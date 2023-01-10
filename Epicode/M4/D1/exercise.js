//1. Crea una funziona che calcoli e ritorni la somma di due numeri interi. 
// Se i due valori sono uguali, ritorna il triplo della somma.
function sumExs1(a, b) {
    if (a === b) {
        return (a + b) * 3
    }
    else {
        return a + b
    }
}
console.log(sumExs1(2, 2))

//Crea una funzione che controlli sue numeri interi. 
//Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.
function checkSum(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if(a === 50 || b === 50 || a + b === 50){
            return true;
        }else{
            return false;
        }
    } else {
        return false;
    }
}

//Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. 
//Passa la stringa e la posizione come parametri e ritorna la stringa modificata.
function removeCharAtPosition(str, pos) {
    return str.slice(0, pos) + str.slice(pos + 1);
}
let myString = "Hello World";
console.log(removeCharAtPosition(myString, 3));

//Crea una funzione che ritorni il valore più alto tra tre numeri interi.

function findMax(a, b, c) {
    let max = Math.max(a, b, c);
    return max;
}

//Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. 
//Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.
function checkRange(a, b) {
    if ((a >= 40 && a <= 60 || a >= 70 && a <= 100) && (b >= 40 && b <= 60 || b >= 70 && b <= 100)) {
      return true;
    }
    return false;
  }

//Crea una funzione che crei e ritorni una nuova stringa formata ripetendo un numero dato di volte una stringa data. 
//Sia la stringa che il numero devono essere passate come parametri.
function repeatString(str, num) {
    return str.repeat(num);
}

//Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.
function checkCity(city) {
    if (city.startsWith("Los") || city.startsWith("New")) {
        return city;
    } else {
        return false;
    }
}


//Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array con tre elementi. 
//L’array deve essere passato come parametro.
function sumArray(arr) {
    return arr.reduce((a, b) => a + b);
}
console.log(sumArray([1, 2, 3])); // Output: 6

//Crea una funzione che controlli se un array di due elementi contiene il numero 1 o il numero 3. 
//Se li contiene, ritorna `true`, altrimenti ritorna `false`.
function checkArray(arr) {
    if (arr.includes(1) || arr.includes(3)) {
        return true;
    }
    return false;
}

//Crea una funzion che controlli che un array di due elementi NON contenga i numeri 1 o 3. 
//Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.
function checkArray(arr) {
    if (!arr.includes(1) && !arr.includes(3)) {
        return true;
    }
    return false;
}

//Crea una funzione per trovare la stringa più lunga in un array di stringhe. 
//Passa l’array come parametro e tritorna la strtinga più lunga.
function longestString(strings) {
    let longest = "";
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest;
}

//Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
function angleType(degrees) {
    if (degrees < 90) {
      return "acuto";
    } else if (degrees === 90) {
      return "retto";
    } else if (degrees === 180) {
      return "piatto";
    } else if (degrees < 180) {
      return "ottuso";
    } else {
      return "non valido";
    }
  }

//Crea una funzione che trovi e ritorni **l’indice** di del numero più alto in un array passato come parametro.
function highestNumberIndex(arr) {
    let highest = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
            index = i;
        }
    }
    return index;
}

//Crea una funzione per trovare e ritornare il numero PARI più alto in un array di numeri passato come parametro.
function highestEvenNumber(arr) {
    let highest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] > highest) {
            highest = arr[i];
        }
    }
    return highest;
}

//Crea una funzione per controllare che due numeri (passati come parametri) siano uno positivo e uno negativo. 
//Ritorna `true` se la condizione è applicata, `false` se non lo è.
function checkPositiveNegative(num1, num2) {
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
        return true;
    }
    return false;
}

//Crea una funzione per creare e ritornare una nuova stringa che abbia i primi tre caratteri in minuscolo e gli altri in maiuscolo. Se la stringa è più corta di tre caratteri, tutta la stringa deve essere in maiuscolo. 
//La stringa originale deve essere passata come parametro.
function formatString(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    return str[0].toLowerCase() + str[1].toLowerCase() + str[2].toLowerCase() + str.slice(3).toUpperCase();
}

//Crea una funzione che calcoli la somma di due numeri passati come parametri. Se la loro somma è compresa tra 50 e 80, ritorna `65`, 
//altrimenti ritorna `80`.
function sumAndCheck(num1, num2) {
    let sum = num1 + num2;
    if (sum >= 50 && sum <= 80) {
        return 65;
    } else {
        return 80;
    }
}
/*Crea una funzione per convertire un numero (passato come parametro) in una stringa basandoti su questi criteri:
Il numero è divisibile per 3 ⇒ ritorna “Diego”
Il numero è divisibile per 5 ⇒ ritorna “Riccardo”
Il numero è divisibile per 7 ⇒ ritorna “Stefano”
Se il numero non ha 3, 5 o 7 come divisore, ritorna il numero originale.
⚠️ Se il numero è divisibile per più di una di queste opzioni, ritorna l’unione delle due stringhe. Es. 15 è divisibile per 3 e per 5, quindi il valore ritornato sarebbe “DiegoRiccardo”.*/
function convertNumber(num) {
    let result = "";
    if (num % 3 === 0) {
        result += "Diego";
    } 
    if (num % 5 === 0) {
        result += "Riccardo";
    } 
    if (num % 7 === 0) {
        result += "Stefano";
    }
    if (result === "") {
        return num;
    }
    return result;
}

//Crea una funzione che crei un acronimo a partire da una frase. 
//Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.
function createAcronym(phrase) {
    let words = phrase.split(" ");
    let acronym = "";
    for (let i = 0; i < words.length; i++) {
        acronym += words[i][0].toUpperCase();
    }
    return acronym;
}