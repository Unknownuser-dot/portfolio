function toggleMenu(){
    const menu = document.querySelector(".menu-link");
    const icon = document.querySelector(".hamburg-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function resumeShow(){
    window.open("./assets/Snehal_Jadhav_resume.pdf");
}