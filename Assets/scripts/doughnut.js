let canvas = document.getElementById('myCanvas').getContext('2d');

let lable = ['Correct', 'Wrong'];
let data = [5, 7];
let chart = new Chart(canvas, {
    type: 'doughnut',
    data: {
        lables: lable,
        datasets: [{
            backgroundColor:[
                "#00ffff",
                "#D20094"
            ],
            borderWidth: 0,
            cutout: 90, 
            lable: 'Risposte',
            data: data
        }],
    }

});