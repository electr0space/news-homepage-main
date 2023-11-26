const hamburgerBtn = document.getElementById("hamburger-menu");

hamburgerBtn.addEventListener("click", function() {
    let menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        hamburgerBtn.style.backgroundImage = "url('assets/images/icon-menu.svg')";
        menu.style.display = "none";
    } 
    else {
        hamburgerBtn.style.backgroundImage = "url('assets/images/icon-menu-close.svg')";
        menu.style.display = "block";
    }
})