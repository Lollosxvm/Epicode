//ESERCIZI SUL DOM

// 31) Seleziona l'elemento con id "container" nella pagina
const newDocName = document.getElementById('container');

console.log("qui l'esercizio 31 = document.getElementById('container')")

//32) Seleziona tutti gli elementi di tipo <td> nella pagina

const Alltd = document.querySelectorAll("td");
console.log("qui l'esercizio 32 =", "const Alltd = document.querySelectorAll('td')")

//33) Usa un ciclo per stampare in console il testo contenuto in ogni elemento <td> nella pagina

const items = document.getElementById('table').getElementsByTagName("li");
function printObject() {
    const values = [];
    for (let i = 0; i < items.length; i++) {
      values.push(items[i].textContent);
    }
    console.log(values);
  }
  console.log("sopra l'esercizio 33:" , printObject() );

  //34) Scrivi una funzione per cambiare il titolo della pagina

  function changePageTitle() {
    newPageTitle = 'title changed!';
    document.title = newPageTitle;
  }
console.log("qui l'esercizio 34:",changePageTitle )

//35) Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina

// function myFunction() {
//     let table = document.getElementById("table");
//     let row = table.insertRow(0);
//     let cell1 = row.insertCell(0);
//     let cell2 = row.insertCell(1);
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
// }

//console.log("qui l'esercizio 35:",myFunction )
function addRow () {
    const table = document.querySelector("table tbody");
    const elem  = document.createElement("tr");
    table.appendChild(elem)
}
console.log("qui l'esercizio 35:",addRow )

//36) Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella

function addClassRow(){
    const row = document.querySelectorAll("tr");
    
    for(const element of row ){
        element.classList.add("test");
    }
}
//37) Scrivi una funzione per aggiungere uno sfondo rosso a ogni link presente nella pagina

function RedLink (){
  const ilLink = document.querySelectorAll("a");
  for (const element of ilLink ){
    element.style.backgroundColor="red";
  }
}

//38) Mostra in console "Page loaded" quando la pagina ha finito di caricarsi
// window.onload= () => {
//  alert("Page loaded")
// }

//39) Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina
const addElm = () => {
  const ul = document.querySelector("ul");
  const elm = document.createElement("li");
  ul.appendChild(elm)
}

//40) Scrivi una funzione per svuotare una lista nella pagina
function deleteUl () {
  const listToDelete = document.querySelectorAll("ul li");
  for( const element of listToDelete){
    element.remove()
  }
}
//41) Aggiungi un event listener in modo che compaia un alert quando il cursore passa sopra un link; l'alert deve mostrare la sua proprietà href
function allLinks () {
  const links = document.querySelectorAll("a");
  for (const element of links) {
    element.addEventListener("mouseover", event => {
      alert(element.href)
    } ) 
  }
}

//42) Crea un bottone che una volta cliccato nasconde ogni immagine nella pagina
function Oscuraimg() {
  //console.log("start function")
  const imgCani = document.querySelectorAll("img");
  for (const element of imgCani){
    element.classList.add("hiddenP")
  }
}

//43) Crea un bottone che una volta cliccato nasconde o mostra la tabella nella pagina
function OscuraTab(){
  const leTabs = document.querySelectorAll("table");
  console.log("start function")
  for (const element of leTabs){
    element.classList.add("hiddenP")
  }
}

//44) Crea una funzione per calcolare la somma di ogni numero contenuto in tutte le celle della tabella (se il contenuto è un numero)
// le celle contengono stringe

//46) Aggiungi un event listener in modo che cliccando un <td> nella pagina, questo cambi colore di sfondo
function newBackgound() {
  console.log("start f")
  const tuttiItd = document.querySelectorAll("td");
  for (const element of tuttiItd) {
    element.addEventListener("click", event => {
      element.style.backgroundColor="red";
    } ) 
  }
}

//48) Aggiungi automaticamente un bordo rosa ad una cella della tabella quando il cursore ci passa sopra

function newBorder() {
  console.log("start f")
  const tuttiItd = document.querySelectorAll("td");
  for (const element of tuttiItd) {
    element.addEventListener("mouseover", event => {
      element.style.border="1px solid pink";
    } ) 
  }
}

//49) Scrivi una funzione per creare una tabella con 4 righe e 3 colonne e aggiungerla alla fine della pagina
function tableCreate() {
  let body = document.getElementsByTagName('body')[0];
  let tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  let tbdy = document.createElement('tbody');
  for (let i = 0; i < 4; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
      if (i == 2 && j == 1) {
        break
      } else {
        let td = document.createElement('td');
        td.appendChild(document.createTextNode('\u0020'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        tr.appendChild(td)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate();
//50) Scrivi una funzione per rimuovere l'ultima tabella presente nella pagina


function deleteTable(){
  const tableToDelete = document.querySelectorAll("table tbody");
  for(const element of tableToDelete){
   element.remove()
  }
 }
 //deleteTable()
