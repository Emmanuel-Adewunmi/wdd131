// Menu.js
// Dynamic Menu Rendering and shared script calls for menu.html

document.addEventListener('DOMContentLoaded', () => {
    // Call shared functions from base.js
    setCurrentYear();
    setLastModified();
    setupMenuToggle(); // Ensure hamburger menu works on this page

    // Dynamic Menu Rendering
    const menuItems = [
        // Ensure you replace these placeholder width/height with actual intrinsic dimensions of your images
        { category: "Appetizers", name: "Puff-Puff", price: " ₦5 000", description: "Sweet fried dough balls.", image: "images/puff-puff.webp", width: 300, height: 200 },
        { category: "Main Courses", name: "Jollof Rice with Chicken", price: "₦14 000", description: "Spicy tomato rice with grilled chicken.", image: "images/jollof-rice.webp", width: 300, height: 200 },
        { category: "Main Courses", name: "Egusi Soup with Pounded Yam", price: "₦16 000", description: "Melon seed soup with yam dough.", image: "images/egusi-soup.webp", width: 300, height: 200 },
        { category: "Main Courses", name: "Okra Soup", price: "₦20 000", description: "Thick and flavorful soup made with okra, meats, and spices.", image: "images/okra-soup.webp", width: 300, height: 200 },
        { category: "Drinks", name: "Kunu", price: "₦1 500", description: "A refreshing local drink made from grains like millet or sorghum.", image: "images/kunu.webp", width: 300, height: 200 },
        { category: "Drinks", name: "Zobo", price: "₦4 000", description: "Chilled hibiscus flower drink.", image: "images/zobo.webp", width: 300, height: 200 },
        // Add other menu items here following the same pattern
        { category: "Main Courses", name: "Pounded Yam with Efo Riro", price: "₦18 000", description: "Traditional pounded yam served with rich spinach stew.", image: "images/pounded-yam-efo-riro.webp", width: 300, height: 200 },
        { category: "Grills", name: "Suya (Beef Skewers)", price: "₦7 000", description: "Spicy grilled beef skewers, a street food favorite.", image: "images/suya.webp", width: 300, height: 200 },
        { category: "Sides", name: "Moi-Moi", price: "₦3 500", description: "Steamed bean pudding, often served with jollof rice.", image: "images/moi-moi.webp", width: 300, height: 200 },
        { category: "Sides", name: "Fried Plantain (Dodo)", price: "₦2 500", description: "Sweet and savory fried ripe plantains.", image: "images/fried-plantain.webp", width: 300, height: 200 }
    ];

    const menuContainer = document.getElementById("menu-container");

    if (menuContainer) { // Check if the container exists before attempting to append
        menuContainer.innerHTML = ''; // Clear existing content before adding new (important if this runs on re-render)

        menuItems.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.className = "menu-item"; // Apply existing menu-item styling
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" loading="lazy" class="menu-item-image" width="${item.width}" height="${item.height}">
                <h3>${item.name} - <span>${item.price}</span></h3>
                <p><em>${item.category}</em></p>
                <p>${item.description}</p>
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    localStorage.setItem("lastVisitedMenu", new Date().toLocaleString());
});