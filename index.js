 let seconds = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes");
let hours = document.querySelector("#hours");

let timePassed = 0;
let hoursCounetd = 0;
let minutesCouned = 0;

let timerSeconds = null;

countTime = () => {
    timePassed++;
    if(minutesCouned === 60) {
        timePassed = 0;
        minutesCouned = 0;
        hoursCounetd++;
        document.querySelector("#seconds").textContent = "0" + timePassed;
        document.querySelector("#minutes").textContent = "0" + minutesCouned;
       if(hoursCounetd < 10){
        document.querySelector("#hours").textContent = "0" + hoursCounetd;
       }
       else{
        document.querySelector("#hours").textContent = hoursCounetd;
       }
    }
    else if(timePassed % 60 === 0){
        timePassed = 0;
        minutesCouned++;
        document.querySelector("#seconds").textContent = "0" + timePassed;
        if(minutesCouned < 10){
            document.querySelector("#minutes").textContent = "0" + minutesCouned;
        }
        else {
            document.querySelector("#minutes").textContent = minutesCouned;
        }
    }
    else if(timePassed < 10){
        document.querySelector("#seconds").textContent = "0" + timePassed;
    }
    else{
        document.querySelector("#seconds").textContent = timePassed;
    }
}

let debug = 0;

startFunction = () => {
    debug++;
    if(debug === 1){
        timerSeconds = setInterval(countTime, 1000);
        console.log("start function is called");
    }
}

resetFunction = () => {
    clearInterval(timerSeconds);
    timePassed = 0;
    hoursCounetd = 0;
    minutesCouned = 0;
    console.log("reset function is called");
    document.querySelector("#seconds").textContent = "0" + timePassed;
    document.querySelector("#minutes").textContent = "0" + minutesCouned;
    document.querySelector("#hours").textContent = "0" + hoursCounetd;
    debug = 0;
}

let stopCon = 0;

stopFunction = () => {
    stopCon++;
    if(stopCon % 2 === 1){
        clearInterval(timerSeconds);
        document.querySelector("#stop").textContent = "Continue";
        console.log("stop function is called");
    }
    else {
        document.querySelector("#stop").textContent = "Stop";
        console.log("continue function is called");
        timerSeconds = setInterval(countTime, 1000);
    }
}