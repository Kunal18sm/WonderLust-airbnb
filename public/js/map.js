document.addEventListener("DOMContentLoaded", async function () {
  const mapDiv = document.getElementById("map");

  // 💡 Stop if there is no map on the page
  if (!mapDiv) return;

  const location = mapDiv.dataset.location;

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
  );
  const coordinates = await response.json();

  if (!coordinates.length) {
    console.error("No coordinates found for", location);
    return;
  }

  const lat = coordinates[0].lat;
  const lon = coordinates[0].lon;

  const map = L.map("map").setView([lat, lon], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);

  L.marker([lat, lon])
    .addTo(map)
    .bindPopup("You will be here")
    .openPopup();
});
