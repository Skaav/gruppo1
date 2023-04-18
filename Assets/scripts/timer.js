let timerCanvas = document.getElementById('myTimer').getContext('2d');

let etichette = ['Passati', 'Restanti'];
let dati = [25, 30];
let timer = new Chart(timerCanvas, {
    type: 'doughnut',
    data: {
        lables: etichette,
        datasets: [{
            lable: 'Secondi',
            data: dati
        }]
    }

});