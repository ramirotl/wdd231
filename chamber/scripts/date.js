// Footer Year
const year = document.querySelector("#currentyear");
if (year) {
    year.textContent = new Date().getFullYear();
}

// Last Modified
const lastModified = document.querySelector("#lastModified");
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}