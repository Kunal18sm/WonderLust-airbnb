// Initialize map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

let marker;

// Form submit handler
document.getElementById('locationForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const location = document.getElementById('locationInput').value;

  // Fetch location data from Nominatim
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
  );
  const data = await response.json();

  if (data.length === 0) {
    alert("Location not found!");
    return;
  }

  const lat = data[0].lat;
  const lon = data[0].lon;

  // Update coordinates display
  document.getElementById('coords').innerText = `Latitude: ${lat}, Longitude: ${lon}`;

  // Move map to location
  map.setView([lat, lon], 13);

  // Add or move marker
  if (marker) map.removeLayer(marker);
  marker = L.marker([lat, lon]).addTo(map)
    .bindPopup(`<b>${location}</b><br>Lat: ${lat}<br>Lon: ${lon}`)
    .openPopup();
});
