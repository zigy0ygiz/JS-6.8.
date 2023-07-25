const text = document.querySelector('a')
text.addEventListener('click', (event) => {
    event.preventDefault();
    let newtext = prompt('Введите текст для отображения на странице');
    if (newtext) {
        text.textContent=newtext;
    } else {
        alert('Данные не введены - текст на странице останется прежним!')
    }
})