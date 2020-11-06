const menuToggle = document.querySelector("nav .menu-toggle input");
const rightDropdown = document.querySelector("nav ul");
menuToggle.addEventListener("click", function() {
    rightDropdown.classList.toggle("slide");
})