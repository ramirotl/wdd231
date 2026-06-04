const params = new URLSearchParams(window.location.search);
const info = document.querySelector("#application-info");
const submittedDate = new Date(params.get("timestamp"));

const formattedDate =
    submittedDate.toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

info.innerHTML = `
    <p><strong>First Name:</strong> ${params.get("firstName")}</p>
    <p><strong>Last Name:</strong> ${params.get("lastName")}</p>
    <p><strong>Email:</strong> ${params.get("email")}</p>
    <p><strong>Phone:</strong> ${params.get("phone")}</p>
    <p><strong>Organization:</strong> ${params.get("organization")}</p>
    <p><strong>Date Submitted:</strong> ${formattedDate}</p>
`;