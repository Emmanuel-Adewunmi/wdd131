

function displayPopularDishes() {
    const popular = [
        { name: "Jollof Rice", spicy: true },
        { name: "Egusi Soup", spicy: false },
        { name: "Suya", spicy: true }
    ];

    const section = document.createElement('section');
    section.innerHTML = `<h2>Popular Dishes</h2>`;

    const ul = document.createElement('ul');
    popular.forEach(dish => {
        const li = document.createElement('li');
        li.textContent = `${dish.name} ${dish.spicy ? '(Spicy)' : ''}`;
        ul.appendChild(li);
    });

    section.appendChild(ul);
    document.querySelector('main')?.appendChild(section);
}

document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    setLastModified();
    setupMenuToggle();
    displayPopularDishes();
});
  