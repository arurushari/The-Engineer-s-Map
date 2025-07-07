// script.js

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const menuList = document.getElementById("menu-list");

    toggleButton.addEventListener("click", function () {
        menuList.classList.toggle("open");
    });
});
