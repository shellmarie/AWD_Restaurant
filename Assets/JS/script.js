document.addEventListener("DOMContentLoaded", function() {
    const menuImages = document.querySelectorAll('.menu-image');
    menuImages.forEach(image => {
        image.addEventListener("click", function() {
            const infoBox = this.parentNode.querySelector('.info-box');
            infoBox.classList.toggle('show-info');
        });
    });
});
 

const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });


const form = document.getElementById("contact-form");
const messageSent = document.getElementById("message-sent");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
   
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    form.reset(); 

    messageSent.classList.remove("hidden");
    setTimeout(function() {
        messageSent.classList.add("hidden");
    }, 3000);
});
