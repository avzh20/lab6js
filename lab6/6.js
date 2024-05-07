let obj1 = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
};

for (let key in obj1) {
    alert(`${key} - зарплата ${obj1[key]} долларов`);
    document.write(`${key} - зарплата ${obj1[key]} долларов <br>`)
}