const menuIcon = document.querySelector("#menu-icon");
menuIcon.addEventListener("click", () => {
    document.querySelector("#nav-menu-container").classList.toggle("active");
});