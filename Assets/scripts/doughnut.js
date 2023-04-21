let canvas = document.getElementById('myCanvas').getContext('2d');

let lable = ['Correct', 'Wrong'];
let data = [5, 7];
let chart = new Chart(canvas, {
    type: 'doughnut',
    data: {
        lables: lable,
        datasets: [{
            backgroundColor:[
                "#D20094",
                "#00ffff"
            ],
            borderWidth: 0,
            cutout: 95, 
            lable: 'Risposte',
            data: data
        }],
    }

});