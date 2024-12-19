//Переключение на тёмную тему
const themeDark = () => {
    document.querySelector('body').setAttribute('data-bs-theme', 'dark');
    document.querySelector('#icon-theme').setAttribute('class', 'bi bi-moon');

    //Смена изображения
    let headingID = document.getElementById("img");
    headingID.classList.remove("reg_back");
    headingID.classList.add("reg_back-dark");
}

//Переключение на светлую тему
const themeLight = () => {
    document.querySelector('body').setAttribute('data-bs-theme', 'light');
    document.querySelector('#icon-theme').setAttribute('class', 'bi bi-sun');

    //Смена изображения
    let headingID = document.getElementById("img");
    headingID.classList.remove("reg_back-dark");
    headingID.classList.add("reg_back");
}

//Переключатель тем
const theme = () => {
    document.querySelector('body').getAttribute('data-bs-theme') === 'light'?
    themeDark() : themeLight();
}