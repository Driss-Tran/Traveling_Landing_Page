var navLinks = document.getElementById("nav_links");
console.log(navLinks);
// Dùng để dóng mở menu
function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}