// Product array
const products = [
    { id: "prod1", name: "Solar Panel A" },
    { id: "prod2", name: "Inverter B" },
    { id: "prod3", name: "Battery Pack C" },
    { id: "prod4", name: "Smart Meter D" }
];

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});