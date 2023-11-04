<template>
  <div class="card" :style="cardStyle">
    <div class="card-header">
      <button @click="close">&times;</button>
    </div>
    <div class="card-body">
      <!-- Display feature data here -->
      <p>Coordinates: {{ featureData.coordinates.lat }}, {{ featureData.coordinates.lng }}</p>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
export default {
  props: {
    featureData: Object,
    map3: Object,
  },
  methods: {
    close() {
      this.$emit('close');
    }
  },
  computed: {
    cardStyle() {
      if (!this.featureData || !this.featureData.coordinates) {
        return {
          display: 'none' // Hide the card if there's no feature data or coordinates
        };
      }

      // Convert latitude and longitude to screen coordinates
      const latLng = L.latLng(this.featureData.coordinates.lat, this.featureData.coordinates.lng);
      const point = this.map3.latLngToContainerPoint(latLng);
      console.log(point);
      const top = point.y;
      const left = point.x;
      console.log(top, left);
      return {
        zIndex: 1000, // Set a higher z-index value
        borderRadius: '10px', // Apply rounded corners to the card
        width: '200px', // Adjust the width of the card
        position: 'absolute', // Use absolute position
        height: '150px',
        top: top + 'px',
        left: left + 'px',
        backgroundColor: 'white',
        border: '1px solid #ccc'
      };
    }
  },
  
};
</script>

<style scoped>
.card {
  position: absolute;
}

.card-header {
  background-color: #eee;
  padding: 5px;
  text-align: right;
}

.card-body {
  padding: 10px;
}

.card button {
  background: none;
  border: none;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  color: #777;
  padding: 0;
  margin: 0;
}

.card button:focus {
  outline: none;
}
</style>
