document.addEventListener("DOMContentLoaded", async function () {
  // Initialize map
  const mapDiv = document.getElementById("map");
  
  
  const location = mapDiv.dataset.location;
  
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
  );
  const coordinates = await response.json();
  const lat = coordinates[0].lat ;
  const lon = coordinates[0].lon ;

  
  const map = L.map('map').setView([lat,lon], 10); // Center on India


  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);


  L.marker([lat, lon])
    .addTo(map)
    .bindPopup(`you will be here`)
    .openPopup(`you will be here`);
});
