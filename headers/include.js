// include.js
window.addEventListener('load', function() {
	window.scrollTo(0, 0);
});

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

