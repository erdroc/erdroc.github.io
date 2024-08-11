// include.js

window.addEventListener('load', function() {
  fetch('headers/style1.html')
    .then(response => response.text())
    .then(data => {
      document.head.innerHTML += data;

      fetch('headers/header1.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('header').innerHTML = data;

          // Scroll to top after everything is loaded
          window.scrollTo(0, 0);
        });
    });
});
