// contact.js
// Specific to contact.html

function setupFormHandler() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            const formData = { name, email, message };
            localStorage.setItem('naijaFormData', JSON.stringify(formData));
            alert(`Thank you, ${name}. Your message has been received!`);
            form.reset();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    setLastModified();
    setupMenuToggle();
    setupFormHandler();
});
  