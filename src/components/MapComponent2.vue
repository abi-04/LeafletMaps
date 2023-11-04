<template>
  <div>
    <div id="map2" style="height: 400px;"></div>
  </div>
</template>

<script>
import L from 'leaflet';

export default {

  name: 'MapComponent2',

  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      const initialLatitude = 34.0137559967283;
      const initialLongitude = -118.818984489994;
      const map2 = L.map('map2').setView([initialLatitude, initialLongitude], 14);

      //Add a tile layer (you can use different tile providers)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map2);

      // Create a GeoJSON layer for the polygon
      const polygonData = {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-118.818984489994, 34.0137559967283], //Longitude, latitude
              [-118.806796597377, 34.0215816298725], //Longitude, latitude
              [-118.791432890735, 34.0163883241613], //Longitude, latitude
              [-118.79596686535, 34.008564864635],   //Longitude, latitude
              [-118.808558110679, 34.0035027131376], // Close the polygon
            ],
          ],
        },
      };

      L.geoJSON(polygonData, { color: 'blue' }).addTo(map2);

    },
  },
};
</script>

<style scoped>
/* Style the map container */
.map-container {
  height: 400px;
  width: 100%;
  border: 1px solid #ccc;
}

/* Customize marker icons */
.leaflet-marker-icon {
  background: #007cbf; /* Marker background color */
  border: 2px solid #fff; /* Marker border color */
  border-radius: 50%; /* Make it round */
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-weight: bold;
  color: #fff; /* Marker text color */
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3); /* Add a shadow */
}

/* Style the marker popups */
.leaflet-popup-content {
  text-align: center;
  padding: 8px;
}

/* Customize the popup close button */
.leaflet-popup-close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #007cbf;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
</style>
