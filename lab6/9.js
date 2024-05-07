function showDay(day) {
    const days = {
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота',
        0: 'Воскресенье'
    };
    return days[day];
}

let date = new Date();
let day = date.getDay();
if (day == 0) {
    alert(7);
    document.write(`Номер текущего дня недели: 7`)
} else {
alert(day);
document.write(`Номер текущего дня недели: ${day}`);
}
document.write(`<br>`);
alert(showDay(day));
document.write(`Текущий день недели недели: ${showDay(day)}`);
document.write(`<br>`);
let oldDate = new Date(2015, 0, 7);
let oldDay = oldDate.getDay();
if (day == 0) {
    alert(7);
    document.write(`Тогдашний номер дня недели: 7`)
} else {
alert(oldDay);
document.write(`Тогдашний номер дня недели: ${oldDay}`);
}
document.write(`<br>`);
alert(showDay(oldDay));
document.write(`Тогдашний день недели: ${showDay(oldDay)}`);