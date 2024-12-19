// Выбираем все элементы с классом 'colorButton'
const buttons = document.querySelectorAll('.question');

// Функция, которую будут выполнять все кнопки
function changeColor(event) {
    event.target.classList.toggle('blue');
}

// Назначаем обработчик событий для каждой кнопки
buttons.forEach(button => {
    button.addEventListener('click', changeColor);
});