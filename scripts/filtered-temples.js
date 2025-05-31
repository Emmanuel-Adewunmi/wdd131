// Footer year and last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('show');
    hamburger.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
});

// Temple data array (12 temples, includes 3+ extras)
const temples = [
    {
        name: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
        name: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
        name: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
    },
    {
        name: "Yigo Guam",
        location: "Yigo Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    
    {
        name: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
        name: "Lima Perú",
        location: "Lima Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
    },
    {
        name: "Mexico City Mexico",
        location: "Mexico City Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },
    // Additional temples
    {
        name: "Kinshasa DRC Temple",
        location: "Kinshasa, DR Congo",
        dedicated: "2019-04-14",
        area: 11000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
    },
    {
        name: "Laie Hawaii Temple",
        location: "Laie, Hawaii, USA",
        dedicated: "1919-11-27",
        area: 47000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
    },
    {
        name: "Porto Alegre Brazil Temple",
        location: "Porto Alegre, Brazil",
        dedicated: "2000-12-17",
        area: 10000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-14267-main.jpg"
    }
];

// DOM Elements
const templeContainer = document.getElementById('templeContainer');
const navLinks = document.querySelectorAll('nav a');
const pageTitle = document.getElementById('pageTitle');

// Function to render temples
function displayTemples(templesToDisplay) {
    templeContainer.innerHTML = '';

    templesToDisplay.forEach(temple => {
        const card = document.createElement('section');
        card.classList.add('temple-card');

        card.innerHTML = `
            <h3>${temple.name}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${new Date(temple.dedicated).toDateString()}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
        `;

        templeContainer.appendChild(card);
    });
}

// Filtering
function filterTemples(criteria) {
    let filtered = temples;

    switch (criteria) {
        case 'old':
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            pageTitle.textContent = 'Old Temples';
            break;
        case 'new':
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            pageTitle.textContent = 'New Temples';
            break;
        case 'large':
            filtered = temples.filter(t => t.area > 90000);
            pageTitle.textContent = 'Large Temples';
            break;
        case 'small':
            filtered = temples.filter(t => t.area < 10000);
            pageTitle.textContent = 'Small Temples';
            break;
        default:
            pageTitle.textContent = 'Home';
            break;
    }

    displayTemples(filtered);
}

// Attach filter events
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.getAttribute('data-filter');
        filterTemples(filter);
    });
});

// Display all temples on load
displayTemples(temples);
