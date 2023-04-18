let canvas = document.getElementById('myCanvas').getContext('2d');

let lable = ['Correct', 'Wrong'];
let data = [5, 7];
let chart = new Chart(canvas, {
    type: 'doughnut',
    data: {
        lables: lable,
        datasets: [{
            lable: 'Risposte',
            data: data
        }]
    }

});