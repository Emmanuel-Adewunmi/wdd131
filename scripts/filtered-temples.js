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
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893-04-06",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
        name: "Manila Philippines Temple",
        location: "Manila, Philippines",
        dedicated: "1984-09-25",
        area: 26783,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
    },
    {
        name: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
        name: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004-01-11",
        area: 17000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        name: "Rexburg Idaho Temple",
        location: "Rexburg, Idaho, USA",
        dedicated: "2008-02-10",
        area: 57000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-1057-main.jpg"
    },
    {
        name: "Paris France Temple",
        location: "Paris, France",
        dedicated: "2017-05-21",
        area: 44000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
    },
    {
        name: "Frankfurt Germany Temple",
        location: "Frankfurt, Germany",
        dedicated: "1987-08-28",
        area: 21500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"
    },
    {
        name: "Sydney Australia Temple",
        location: "Sydney, Australia",
        dedicated: "1984-09-20",
        area: 30777,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-43342-main.jpg"
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
