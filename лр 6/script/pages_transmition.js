document.getElementById("pageLink").addEventListener("click", function(event) {
  event.preventDefault(); // отменяем стандартное действие перехода по ссылке
  document.getElementById("pageLink").classList.add("animate"); // добавляем класс с анимацией
  setTimeout(function() {
    window.location.href = "newpage.html"; // задержка перед переходом на другую страницу
  }, 3000); // время задержки (в миллисекундах)
});
