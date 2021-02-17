const TIME_LIMIT = 20; //* 60;

let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

var timerRunning = false;
const FULL_DASH_ARRAY = 283;

const COLOR_CODES = {
    info: {
        color: "green"
    }
};

let remainingPathColor = COLOR_CODES.info.color;

startTimer();


document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);

function formatTimeLeft(time) {
    const minutes = Math.floor(time / 60);

    let seconds = time % 60

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

function calculateTimeFraction() {
    return timeLeft / TIME_LIMIT;
}

// Update the dasharray value as time passes, starting with 283
function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}

function startTimer() {
    document.getElementById("base-timer-path-remaining").style.stroke = remainingPathColor;
    timerRunning = true;
    startTime = Date.now();
    setCircleDasharray();
    timerInterval = setInterval(() => {
        document.getElementById("base-timer-path-remaining").style.stroke = remainingPathColor;
        if (timeLeft <= 0) {
            document.getElementById("base-timer-path-remaining").style.stroke = "red";
            clearInterval(timerInterval);
            timerRunning = false;
            return;
        }


        endFrame = Date.now();

        timeLeft = TIME_LIMIT - Math.floor((endFrame - startTime) / 1000);
        document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);

        setCircleDasharray();
    }, 1000);
}