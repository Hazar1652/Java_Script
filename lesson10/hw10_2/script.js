let text = document.getElementById('text');
let currentNumber = +localStorage.getItem('number',) || 100;
let lastUpdate = +localStorage.getItem('lastUpdate') || 0;
let now = Date.now();
if (now - lastUpdate >=1000) {
    currentNumber += 10;
    localStorage.setItem('number', currentNumber);
    localStorage.setItem('lastUpdate', now);
}
text.innerText = currentNumber;
