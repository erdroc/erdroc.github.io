// include.js

window.addEventListener('DOMContentLoaded', () => {
fetch('headers/style1.html')
  .then(response => response.text())
  .then(data => {
    document.head.innerHTML += data;
  });

fetch('headers/header1.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

fetch('headers/footer1.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });
});
