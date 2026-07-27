
// Welcome message when website loads

window.addEventListener("load", () => {

    console.log("Welcome to Musab's Portfolio 🚀");

});




// Project card animation on scroll

const cards = document.querySelectorAll(".project-card");


window.addEventListener("scroll", () => {


    cards.forEach(card => {


        const cardPosition = card.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.2;


        if(cardPosition < screenPosition){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }


    });


});




// Smooth button interaction

const button = document.querySelector(".btn");


button.addEventListener("click", () => {


    console.log("Projects section opened");


});




// Dynamic year in footer

const footerText = document.querySelector("footer p");


const year = new Date().getFullYear();


footerText.innerHTML = 
`© ${year} Musab Ali Portfolio`;
