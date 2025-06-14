// shared

// Set current year in footer
function setCurrentYear() {
    const year = new Date().getFullYear();
    document.getElementById("year").textContent = year;
}

// Set last modified date in footer
function setLastModified() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
}

// Setup hamburger menu toggle
function setupMenuToggle() {
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
}
  