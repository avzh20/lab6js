let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let sec = date.getSeconds();
let allSec = sec + minutes * 60 + hours * 3600;
alert(`С начала дня прошло ${allSec} секунд`);
document.write(`С начала дня прошло ${allSec} секунд`);