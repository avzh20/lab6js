let count1 = 0;
let intervalId;

function startCount() {
    intervalId = setInterval(() => {
        document.getElementById('timer2').innerHTML = count1++;
    }, 1000);
}

function stopCount() {
    clearInterval(intervalId);
}