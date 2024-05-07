let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();
let sec = date.getSeconds();
day = String(day);
month = String(month + 1);
hours = String(hours);
minutes = String(minutes);
sec = String(sec);
if (day.length == 1) {
    day = 0 + day;
}
if (month.length == 1) {
    month = 0 + month;
}
if (hours.length == 1) {
    hours = 0 + hours;
}
if (minutes.length == 1) {
    minutes = 0 + minutes;
}
if (sec.length == 1) {
    sec = 0 + sec;
}
alert(day);
document.write(`Текущий день: ${day} <br>`);
alert(month);
document.write(`Текущий месяц: ${month} <br>`);
alert(year);
document.write(`Текущий год: ${year} <br>`);
alert(`${hours}:${minutes}:${sec} ${day}.${month}.${year}`);
document.write(`Текущая дата-время: ${hours}:${minutes}:${sec} ${day}.${month}.${year} <br>`);