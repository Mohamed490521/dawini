
"use strict";

// Welcome message
document.addEventListener("DOMContentLoaded", () => {

    console.log("Bienvenue sur DAWINI !");

    // Interactive welcome button
    const welcomeButton = document.createElement("button");

    welcomeButton.textContent = "Bienvenue chez Dawini";
    welcomeButton.className = "welcome-btn";

    welcomeButton.addEventListener("click", () => {
        alert("Bienvenue sur DAWINI ! Votre santé, notre priorité.");
    });

    document.querySelector("#accueil").appendChild(welcomeButton);

    // Service cards interaction
    const cards = document.querySelectorAll("article");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const title = card.querySelector("h3").textContent;

            alert("Vous avez sélectionné : " + title);
        });
    });

});
