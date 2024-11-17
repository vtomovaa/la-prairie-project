// nav bar
document.addEventListener("DOMContentLoaded", function () {
    const navIcon = document.getElementById('navIcon');
    const navMenu = document.getElementById('navMenu');

    navIcon.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});

// faq section
const toggleBtns = document.querySelectorAll('.faq-toggle');

toggleBtns.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', () => {
        toggleBtn.parentNode.classList.toggle('active')
    })
});

//reviews section

let readMoreBtn = document.getElementById("readMore");
let reviews = [
    document.getElementById("review2"),
    document.getElementById("review3"),
    document.getElementById("review4"),
    document.getElementById("review5"),
    document.getElementById("review6"),
    document.getElementById("review7"),
    document.getElementById("review8")
];

function toggleReviews() {
    const isReadLess = readMoreBtn.innerText === "Read Less";

    reviews.forEach(review => {
        review.style.display = isReadLess ? 'none' : 'block';
    });

    readMoreBtn.innerText = isReadLess ? "Read More" : "Read Less";
}

readMoreBtn.addEventListener('click', toggleReviews);