function countdownToMidnight() {
    let now = new Date();
    let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let msTillMidnight = midnight - now;
    let secTillMidnight = Math.round(msTillMidnight / 1000);

    if (secTillMidnight <= 0) {
        document.getElementById('midnight').innerHTML = 'Полночь!';
    } else {
        document.getElementById('midnight').innerHTML = 'Секунд до полуночи: ' + secTillMidnight;
        setTimeout(countdownToMidnight, 1000);
    }
}

countdownToMidnight();