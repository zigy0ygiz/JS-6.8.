const consolelog = document.querySelector('#consoleLog');
const al = document.querySelector('#alert');
const prom = document.querySelector('#prompt');

consolelog.addEventListener('click', () => {
    alert('Это метод, предназначенный для вывода текста в консоль браузера.');
})

al.addEventListener('click', () => {
    alert('Это метод для вывода сообщения на экран монитора. Пользователь не может взаимодействовать с интерфейсом остальной части страницы пока не будет нажата кнопка «OK».');
})

prom.addEventListener('click', () => {
    alert('Это метод для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена». Возвращает значением введенный текст или "null", если текст не введен.')
})