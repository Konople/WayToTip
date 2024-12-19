const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
	// Переключение типа ввода
	const type = password.getAttribute("type") === "password" ? "text" : "password";
	password.setAttribute("type", type);
	
	// Переключение иконки
	this.classList.toggle("bi-eye");
});

// Запрос отправки формы
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
	e.preventDefault();
});