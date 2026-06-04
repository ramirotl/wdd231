const courses = [
    {
        subject: 'CSE',
        number: 110,
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        credits: 2,
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        credits: 2,
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        credits: 2,
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        credits: 2,
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        credits: 2,
        completed: false
    }
];

const courseContainer = document.querySelector("#course-container");
const creditsDisplay = document.querySelector("#credits");
// idk
const courseDetails = document.querySelector("#course-details");

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        } else {
            card.classList.add("not-completed");
        }

        card.innerHTML = `
            ${course.completed ? "✔ " : ""}
            ${course.subject} ${course.number}
        `;

        courseContainer.appendChild(card);

    });

    displayCredits(courseList);
}

function displayCredits(courseList) {

    const totalCredits = courseList.reduce((total, course) => {
        return total + course.credits;
    }, 0);

    creditsDisplay.textContent =
        `The total credits for the displayed courses is ${totalCredits}`;
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#cse").addEventListener("click", () => {

    const cseCourses = courses.filter(course =>
        course.subject === "CSE"
    );

    displayCourses(cseCourses);
});

document.querySelector("#wdd").addEventListener("click", () => {

    const wddCourses = courses.filter(course =>
        course.subject === "WDD"
    );

    displayCourses(wddCourses);
});


//idk x2
function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

courseDiv.addEventListener('click', () => {
    displayCourseDetails(course);
});