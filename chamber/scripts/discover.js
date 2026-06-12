import { places } from "../data/places.mjs";

const cardsContainer = document.querySelector("#discover-cards");

displayPlaces();

function displayPlaces() {

    places.forEach(place => {
        const card = document.createElement("article");
        card.classList.add("discover-card");

        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img
                    src="images/${place.image}"
                    alt="${place.name}"
                    loading="lazy"
                    width="300"
                    height="200"
                >
            </figure>
            <p>${place.description}</p>
            <address>
                ${place.address}
            </address>
            <button>
                Learn More
            </button>
        `;
        cardsContainer.appendChild(card);
    });
}

const visitMessage = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysDifference =
        Math.floor(
            (currentVisit - Number(lastVisit))
            / 86400000
        );
    if (daysDifference < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";

    } else if (daysDifference === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";

    } else {
        visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
    }
}
localStorage.setItem(
    "lastVisit",
    currentVisit
);