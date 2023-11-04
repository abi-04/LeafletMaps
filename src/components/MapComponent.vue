<template>
  <div>
    <div id="map" style="height: 400px;"></div>
    
  </div>
</template>

<script>
import L from 'leaflet';

export default {

  name: 'MapComponent',

  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      const initialLatitude = 40.7128; // Example: New York City, NY
      const initialLongitude = -74.0060;
      const map = L.map('map').setView([initialLatitude, initialLongitude], 6);

      //Add a tile layer (you can use different tile providers)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Define your Point data layers
      const points = [
        { name: 'Location 1', lat: 40.7128, lng: -74.0060 }, // New York City, NY
        { name: 'Location 2', lat: 38.8951100, lng: -77.0363700 }, // Washington
        { name: 'Location 3', lat: 51.5074, lng: -0.1278 },  // London, UK
        { name: 'Location 4', lat: 48.8566, lng: 2.3522 },   // Paris, France
        { name: 'Location 5', lat: -33.8688, lng: 151.2093 },
        // Add more points as needed
      ];


      // Loop through the points and add marker pins to the map
      points.forEach((point) => {
        L.marker([point.lat, point.lng]).addTo(map).bindPopup(point.name);
      });
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
