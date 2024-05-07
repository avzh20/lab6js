let obj = {
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой'
};

for (let key in obj) {
    alert(`Ключ: ${key}. Элемент: ${obj[key]}`);
    document.write(`Ключ: ${key}. Элемент: ${obj[key]} <br>`)
}