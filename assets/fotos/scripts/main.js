// Función para anclar el menú al hacer scroll
window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});


