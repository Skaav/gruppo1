//! SWITCH PAGES
// DIV TARGET
let target = document.querySelector('.target');
// console.log(target);

// TEMPLATES

let templates = document.querySelectorAll('template');
console.log(templates);

let firstTemplate = templates[0].content.cloneNode(true);
let secondTemplate = templates[1].content.cloneNode(true);



//! START PAGE
//BUTTONS
let startButton = document.querySelector('.startButton');
// console.log(startButton);

startButton.addEventListener('click',function(){
    target.innerHTML = '';
    target.append(firstTemplate)

    })

//! FIRST AND SECOND PAGE
let contatore = 0;
let domande;
let domandaCorrente;
let risposteSbagliate = [];

async function init(){
    
    let apiUrl = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy';
    domande = await fetch(apiUrl).then(res => res.json());//ottengo le domande
    // domande = shuffle(domande.results);//mescolo le domande
    
    // console.log(domande);
    
    let firstButton = firstTemplate.querySelector('.firstButton');
    console.log(firstButton);
    firstButton.addEventListener('click',function(){
        // createButtons();
        
        target.innerHTML = '';
        target.append(secondTemplate)
    })
    
}

// function createButtons(){


//     domandaCorrente = domande[contatore];
//     let {type,difficulty,question,correct_answer,incorrect_answers} = domandaCorrente;

    
//     //inizio a selezionare gli elementi con cui interagire
//     let titolo = document.querySelector('.stage2 .stage-title');
//     let areaBottoni = document.querySelector('.stage2 .button-area');
//     areaBottoni.innerHTML = '';

//     //inizio a compilare
//     titolo.textContent = question;

//     let risposteCompleto = incorrect_answers;//assegno il valore ad un nuovo array che modificherò, lasciando intatto incorrect_answers
//     risposteCompleto.push(correct_answer);

//     if(type != 'boolean'){
//         risposteCompleto = shuffle(risposteCompleto);//mescolo le risposte
//     }

//     for(let rispostaSingola of risposteCompleto){
//         let button = document.createElement('button');
//         button.textContent = rispostaSingola;
//         button.classList.add('bottone-risposta');
//         button.addEventListener('click',function(){
//             if(domande.length < contatore){

//                 contatore++;
//                 if(incorrect_answers.includes(rispostaSingola)){
//                     risposteSbagliate.push(domandaCorrente)
//                 }
//                 createButtons();
//             }else{
//                 //funzione che distrugge lo stage 2 e attiva lo stage 3
//             }
//         })
//         areaBottoni.append(button)
//     }

//     console.log(risposteSbagliate);
    

// }

// function shuffle(array) {
//     let newArr = [];
//     let length = array.length;
//     for (let i = 0; i < length; i++) {
//       let rand = Math.floor(Math.random() * array.length);
//       newArr.push(array[rand]);
//       array.splice(rand, 1);
//     }
//     return newArr;
//   }

init();