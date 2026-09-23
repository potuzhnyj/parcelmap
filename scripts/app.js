const map = L.map("map").setView([50.45, 15.36], 12);
map.attributionControl.setPrefix(false);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
let selectedParcelLayer = null;
async function loadParcels() {
  try {
    const response = await fetch("data/parcels.geojson");
    if (!response.ok) {
      throw new Error("Failed to load parcels");
    }
    const data = await response.json();

    const parcelsLayer = L.geoJSON(data, {
      color: "#204f3d",
      weight: 1,
      fillColor: "#a8bba3",
      fillOpacity: 0.35,

      onEachFeature: function (feature, layer) {
        layer.on("click", function () {
          if (selectedParcelLayer) {
            parcelsLayer.resetStyle(selectedParcelLayer);
          }
          document.querySelector("#emptyState").classList.add("hidden");
          document.querySelector("#parcelDetails").classList.remove("hidden");

          selectedParcelLayer = layer;

          layer.setStyle({
            color: "#db9558",
            fillColor: "#db9558",
            fillOpacity: 0.7,
            weight: 3,
          });

          document.querySelector("#parcelNumber").textContent =
            feature.properties.label;

          document.querySelector("#parcelArea").textContent =
            `${feature.properties.areaValue} m²`;

          document.querySelector("#cadastralReference").textContent =
            feature.properties.nationalCadastralReference;
        });
      },
    }).addTo(map);

    map.fitBounds(parcelsLayer.getBounds());
  } catch (error) {
    console.error(error);
  }
}

loadParcels();

document
  .querySelector("#importantButton")
  .addEventListener("click", function () {
    if (!selectedParcelLayer) {
      return;
    }

    map.fitBounds(selectedParcelLayer.getBounds(), {
      padding: [20, 20],
    });
  });
