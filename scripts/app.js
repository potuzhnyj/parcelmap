const map = L.map("map").setView([50.45, 15.36], 12);
map.attributionControl.setPrefix(false);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);
