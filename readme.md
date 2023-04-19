PROGETTO BUILD WEEK 1

PAGINA 1 (WELCOME)
- HTML 

- CSS 

- JavaScript 
(Agganciare bottone a funzione distruggi/crea template)

PAGINA 2 (EXAM)
- HTML 

- CSS 
(Rivedere bordi dei bottoni)

- JavaScript
(Funzione per generare domande/risposte casuali)
let n = [1,2,3,4]
function shuffle(array) {
    let newArr = [];
    let length = array.length;
    for (let i=0; i<length; i++) {
    let rand = Math.floor(Math.random()*array.length);
    newArr.push(array[rand]);
    array.splice(rand,1);
    }
    return newArr;
}
(Fixare chart timer)

PAGINA 3 (RESULTS)
- HTML

- CSS  

- JavaScript
(Fixare chart risposte)

PAGINA 4 (VALUE)
- HTML

- CSS

- JavaScript
