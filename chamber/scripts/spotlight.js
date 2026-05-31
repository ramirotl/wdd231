const spotlightURL = "data/members.json";
const spotlightContainer = document.querySelector("#spotlights");

async function getSpotlights() {

    const response = await fetch(spotlightURL);
    const members = await response.json();

    const qualifiedMembers = members.filter(
        member => member.membership === 2 || member.membership === 3
    );
    shuffleArray(qualifiedMembers);
    const selectedMembers = qualifiedMembers.slice(0, 3);
    displaySpotlights(selectedMembers);
}

function displaySpotlights(members) {
    spotlightContainer.innerHTML = "";
    members.forEach(member => {
        const card = document.createElement("section");
        const membership =
            member.membership === 3
                ? "Gold Member"
                : "Silver Member";
        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}"
                 alt="${member.name} logo"
                 loading="lazy">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><strong>${membership}</strong></p>
            <a href="${member.website}"
               target="_blank">
               Visit Website
            </a>
        `;
        spotlightContainer.appendChild(card);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] =
            [array[j], array[i]];
    }
}

getSpotlights();