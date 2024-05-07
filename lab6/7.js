let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
    let a = String(arr[i]);
    if (a[0] == '2' || a[0] == '3') {
        alert(arr[i]);
        document.write(`${arr[i]} <br>`);
    }
}