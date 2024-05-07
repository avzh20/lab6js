let pastDate = Date.parse('1988-03-01T00:00:00');
let currentDate = Date.now();
let diff = currentDate - pastDate;
let hours = diff / (1000 * 60 * 60);
alert(`${hours} часов `);
document.write(`Прошло ${hours} часов`);