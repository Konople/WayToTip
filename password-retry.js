const newtogglePassword = document.querySelector("#newtogglePassword");
const Newpassword = document.querySelector("#newpassword");

newtogglePassword.addEventListener("click", function () {
	// Переключение типа ввода
	const type = Newpassword.getAttribute("type") === "password" ? "text" : "password";
	Newpassword.setAttribute("type", type);
	
	// Переключение иконки
	this.classList.toggle("bi-eye");
});

// Запрос отправки формы
const newform = document.querySelector("form");
newform.addEventListener('submit', function (e) {
	e.preventDefault();
});