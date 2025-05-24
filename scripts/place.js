// Set current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Static temperature and wind speed
const tempText = document.getElementById('temp').textContent;
const windText = document.getElementById('wind').textContent;

const temp = parseFloat(tempText); // 26.9°C
const windSpeed = parseFloat(windText); // 7.2 km/h

function calculateWindChill(t, v) {
    // Wind chill formula in Celsius:
    // 13.12 + 0.6215*T - 11.37*v^0.16 + 0.3965*T*v^0.16
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(v, 0.16) +
        0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(1);
}

// Check if wind chill can be calculated
const windChillSpan = document.getElementById('windChil');

if (temp <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temp, windSpeed);
    windChillSpan.textContent = ` ${windChill} °C`;
} else {
    windChillSpan.textContent = ' N/A';
}
