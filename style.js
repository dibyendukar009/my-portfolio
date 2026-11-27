// this is for word animationn

var typed = new Typed(".text", {
    strings: ["Dibyendu Kar", "My Portfolio"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


//  HAMBURGER
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", function () {

    navbar.classList.toggle("active");
    const icon = menuIcon.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.replace("bx-menu", "bx-x");
        menuIcon.setAttribute("aria-expanded", "true");

    } else {
        icon.classList.replace("bx-x", "bx-menu");
        menuIcon.setAttribute("aria-expanded", "false");
    }
});

// close menu after click hamburgur

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        const icon = menuIcon.querySelector("i");
        icon.classList.replace("bx-x", "bx-menu");
        menuIcon.setAttribute("aria-expanded", "false");
    });
});


// about section start
// html select 
const aboutContainer = document.getElementById("about-container");
const detailView = document.getElementById("detail-view");

const detailImage = document.getElementById("detail-image");
const detailTitle = document.getElementById("detail-title");

const detailContent = document.getElementById("detail-content");

const backButton = document.getElementById("detail-back");

// data details
const detailData = {

    About: `
        <p>"Hello! I’m Dibyendu Kar. I know the basics of HTML, CSS, and JavaScript and love building simple websites. I am a fast learner and excited to start my first job  opportunity in web development to gain real work experience and improve my skills every day. Thanks for visiting my website!"</p>
    `,

    Skills: `
        <ul>
            <li>Frontend Development: Basic knowledge of HTML, CSS, JavaScript.</li>
            <li>Programming Tools: Experience with Visual Studio Code for development, Git and Github. </li>
            <li>Communicated with customers over phone to explain products and services clearly.</li>
            <li>Handled client queries and provided suitable package suggestions.</li>
            <li>Maintained daily call reports and updated customer information.</li>
            <li>Built good customer relationships to improve repeat sales and satisfaction</li>        
            <li>Other Tools: MS Office 365, Excel sheet, Google sheet, Ceipal, Skype, Outlook.</li>
        </ul>
        `,
    
    Experience:`
        <h3>Business Integra - MIS Executive</h3>
        <p><strong>Duration:</strong> 2022 to 2025</p>
            <br>
        <ul>
            <li>Provided IT support and troubleshooting for software and hardware issues. </li>
            <li>Working as a MIS Executive and maintained all company data. </li>
            <li>Assisted in software installations, user credential management, and network troubleshooting. </li>
            <li>Gained experience in technical problem-solving and remote support. </li>
            <li>Provided on-call support for customer queries and technical assistance. </li>
            <li>Assisted customers in troubleshooting software issues. </li>
            <li>Maintained a high level of customer satisfaction by resolving queries effectively. </li>
            <li>Documented and escalated recurring issues to improve service efficiency. </li>
            <li> Handled inbound and outbound calls, ensuring timely resolutions and follow-ups.</li>
        </ul>
        `,

    Education:`

        <ul>
            <li>
                <strong>Master Of Computer Applications - MCA</strong><br>
                Sikkim Manipal University (SMU)<br>
                2024 (In Progress)
            </li>

            <li>
                <strong>Bachelor Of Arts - BA</strong><br>
                Gobardanga Hindu College<br>
                2017 - 2020
            </li>

            <li>
                <strong>Electrician</strong><br>
                Gaighata Govt ITI<br>
                2016 - 2018
            </li>

            <li>
                <strong>Higher Secondary</strong><br>
                Thakurnagar High School<br>
                2015
            </li>
        
        </ul>
    `,
};

// navbar button show details
function showDetails(title, selectedCard) {

    // find the select card
    const image = selectedCard.querySelector("img").getAttribute("src")

    // show selected card
    detailImage.src =image;
    detailImage.alt = title;

    detailTitle.textContent = title;
    detailContent.innerHTML = detailData[title];

    // hide all card
    aboutContainer.style.display = "none";

    // show detail view
    detailView.hidden = false;
    detailView.style.display = "block";

    // scrol to details
    detailView.scrollIntoView({
        behavior: "smooth"
    });
}

// click to know more
const knowMoreButtons = document.querySelectorAll(".know-more");

knowMoreButtons.forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        // those card clicked they find
        const selectedCard = this.closest(".about-card");

        // card title taking
        const title = selectedCard.querySelector("h2").textContent.trim();

        showDetails(title, selectedCard);

    });
});

// navbar click function
const detailNavlinks = document.querySelectorAll(".navbar a[data-detail]");

detailNavlinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const title = this.dataset.detail;

        // find matching card
        const cards = document.querySelectorAll(".about-card");
        cards.forEach(card=> {
            const cardTitle = card.querySelector("h2").textContent.trim();
            if (cardTitle === title) {
                showDetails(title, card);
            }
        });
    });
});

// back button
backButton.addEventListener("click", function() {
    
    // hide details and show agian card
    detailView.hidden = true;
    detailView.style.display = "none";
    
    aboutContainer.style.display = "grid";

    // back to about section 
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

// popup contact
const contactLink = document.getElementById("contact-link");
const contactPopup = document.getElementById("contact-popup");
const contactClose = document.getElementById("contact-close");

contactLink.addEventListener("click", function(event) {
    event.preventDefault();
    contactPopup.style.display = "flex";
});

// close button
contactClose.addEventListener("click", function() {
    contactPopup.style.display = "none";

});

