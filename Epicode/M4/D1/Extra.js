ESERCIZI EXTRA 

//1 Partendo da una stringa (passata come parametro), 
//ritorna il carattere più usato nella stringa stessa.
function mostFrequentChar(str) {
    let charMap = {};
    let maxChar = "";
    let maxCount = 0;
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    for (let char in charMap) {
        if (charMap[char] > maxCount) {
            maxChar = char;
            maxCount = charMap[char];
        }
    }
    return maxChar;
}

/*2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi 
e ricordate di rendere la stringa tutta in minuscolo. 
Se le due parole sono anagrammi, ritorna `true`, altrimenti
 ritorna `false`.*/
 function areAnagrams(str1, str2) {
    // rimuovi spazi e punteggiatura e rendi la stringa tutta minuscola
    str1 = str1.replace(/[^\w]/g, "").toLowerCase();
    str2 = str2.replace(/[^\w]/g, "").toLowerCase();
    // Ordina le stringhe
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");
    // confronta le stringhe ordinate
    return str1 === str2;
}
/*3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), 
ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], 
il valore ritornato deve essere [”carenti”, “incerta”].*/
function findAnagrams(word, list) {
    // Rimuovi spazi e punteggiatura e rendi la parola tutta minuscola
    word = word.replace(/[^\w]/g, "").toLowerCase();
    word = word.split("").sort().join("");
    let anagrams = [];
    for (let i = 0; i < list.length; i++) {
        let currentWord = list[i].replace(/[^\w]/g, "").toLowerCase();
        currentWord = currentWord.split("").sort().join("");
        if (currentWord === word) {
            anagrams.push(list[i]);
        }
    }
    return anagrams;
}
// *4 Partendo da una stringa passata come parametro, ritorna `true`
//  se la stringa è palindroma o `false` se non lo è.
function isPalindrome(str) {
    str = str.replace(/[^\w]/g, "").toLowerCase();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
// *5 Partendo da un numero intero (dai parametri) ritorna un numero che contenga 
// le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

//*6 Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
// Es.
// X = 2
// `’# ‘
// ‘##’`
// X = 3
// `’# ‘
// ‘## ‘`
// `’###’`
function printStairs(x) {
    for (let i = 1; i <= x; i++) {
        console.log("#".repeat(i).padStart(x));
    }
}

//*7. Crea una funzione che, data una stringa come parametro, 
//ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”
function reverseString(str) {
    return str.split('').reverse().join('');
}

//*8 Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
// Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]
function divideArray(arr, y) {
    let subArrays = [];
    for (let i = 0; i < arr.length; i += y) {
        subArrays.push(arr.slice(i, i + y));
    }
    return subArrays;
}

//*9Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
// Es.
// X = 3
// `’ # ‘
// ‘ ### ‘
// ‘#####’`
function printPyramid(x) {
    for (let i = 1; i <= x; i++) {
      let str = " ".repeat(x - i);
      str += "#".repeat((i * 2) - 1);
      console.log(str);
    }
  }

//*10Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
// Es. N = 2
// `[[1, 2],[4, 3]]`
// N = 3
// `[[1, 2, 3],[8, 9, 4],[7, 6, 5]]`
// N = 4
// `[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]`
function spiralMatrix(n) {
    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n);
    }
    let count = 1;
    let rowStart = 0, rowEnd = n - 1;
    let colStart = 0, colEnd = n - 1;
    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            matrix[rowStart][i] = count;
            count++;
        }
        rowStart++;
        for (let i = rowStart; i <= rowEnd; i++) {
            matrix[i][colEnd] = count;
            count++;
        }
        colEnd--;
        if (rowStart <= rowEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                matrix[rowEnd][i] = count;
                count++;
            }
            rowEnd--;
        }
        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                matrix[i][colStart] = count;
                count++;
            }
            colStart++;
        }
    }
    return matrix;
}
