let arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push({id: i, value: `Об'єкт №${i}`});
}

let output = document.getElementById('output');
let page = 0;

function render() {
    output.innerHTML = '';
    for (let i = page * 10; i < page * 10 + 10; i++) {
        let p = document.createElement('p');
        p.innerText = arr[i].value;
        output.appendChild(p);
    }
}

document.getElementById('next').onclick = () => { page++; render(); };
document.getElementById('prev').onclick = () => { page--; render(); };

render();
