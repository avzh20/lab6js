const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let sec = date.getSeconds();
let month = date.getMonth() + 1;
let day = date.getDate();
let nowSec = sec + minutes * 60 + hours * 3600;
let allSec = 24 * 3600;
let year = date.getFullYear();
let lastSec = allSec - nowSec;
alert(`До конца дня осталось ${lastSec} секунд`);
document.write(`До конца дня осталось ${lastSec} секунд<br>`);
let BD = prompt('Введите свой день рождения в формате "ГГГГ-ММ-ДД"');
while (true) {
    let arr = BD.split('-');
    if ((arr.length == 3) && (arr[0] <= year) && (arr[0] > 1845) && (arr[1] < 13) && (arr[1] > 0) && (arr[2] < 32) && (arr[2] > 0)) {
        break;
    }
    alert('Вы ввели некоректное значение');
    BD = prompt('Введите свой день рождения в формате "ГГГГ-ММ-ДД"');
}
let arr = BD.split('-');
BD = '';
arr[0] = year;
if ((month * 30 + day) < (arr[1] * 30 + arr[2])) {
    arr[0] += 1;
}
for (let i = 0; i < arr.length; i++) {
    BD += arr[i];
    if (i != 2) {
        BD += '-';
    }
}
BD += 'T00:00:00';
let msecBD = Date.parse(BD);
let nowMSec = Date.now();
let diff = Math.abs(nowMSec - msecBD);
let lastDays = diff / (1000 * 60 * 60 * 24);
alert(`До дня рождения осталось ${lastDays} дней`);
document.write(`До дня рождения осталось ${lastDays} дней`);