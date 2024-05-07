let count2 = 10;
let intervalId1 = setInterval(() => {
    if(count2 <= 0) {
        clearInterval(intervalId1);
        document.getElementById('countdown').innerHTML = 'Время вышло!';
    } else {
        document.getElementById('countdown').innerHTML = count2--;
    }
}, 1000);