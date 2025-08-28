// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні
// на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
let button = document.getElementById('btn');
let element = document.getElementById('resultDiv');
button.onclick = function(e){
    e.preventDefault();
    element.innerHTML = '';
    if (document.mainForm.text.value >=18){
        let htmlElement = document.createElement('p');
        htmlElement.innerText = "successfully!"
        element.append(htmlElement);

    } else {
        let htmlElement = document.createElement('p');
        htmlElement.innerText = "unsuccessfully!"
        element.append(htmlElement);
    }

}
