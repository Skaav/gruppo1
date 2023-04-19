let semicirles = document.querySelectorAll(".semicircle");
let timer = document.querySelector(".timer");

//input
let hr = 0;
let min = 0;
let sec = 60;

let hours = hr * 3600000;
let minutes = min * 60000;
let seconds = sec * 1000;
let setTime = hours + minutes + seconds;
let starTime = Date.now();
let futureTime = starTime + setTime;


let = timerLoop = setInterval(countDownTimer);
countDownTimer();

function countDownTimer() {
    let currentTime = Date.now();
    let remainingTime = futureTime - currentTime;
    let angle = (remainingTime / setTime) * 360;

    //progress indicator
    if (angle > 180) {
        semicirles[2].style.display = 'none';
        semicirles[0].style.transform = 'rotate(180deg)';
        semicirles[1].style.transform = `rotate(${angle}deg)`;
    } else {
        semicirles[2].style.display = 'block';
        semicirles[0].style.transform = `rotate(${angle}deg)`;
        semicirles[1].style.transform = `rotate(${angle}deg)`;
    }

    //timer
    let secs = Math.floor((remainingTime / 1000) % 120)

    timer.innerHTML = `
    <div>${secs}</div>
    `;

    //5 sec condition

    //end
    if(remainingTime < 0) {
        clearInterval(timerLoop);
        semicirles[0].style.display = 'none';
        semicirles[1].style.display = 'none';
        semicirles[2].style.display = 'none';

        timer.innerHTML = `
        <div>00</div>
        `;
    }
}