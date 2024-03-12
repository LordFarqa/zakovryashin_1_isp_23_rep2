const button = document.getElementById('changeStyleBtn');
const element = document.getElementById('changeableElement');

button.addEventListener('click', function() {
  element.style.color = 'red';
  element.style.fontSize = '20px';
});

console.log("hello")
