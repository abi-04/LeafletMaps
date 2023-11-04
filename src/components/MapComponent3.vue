<template>
  <div>
    <div ref="map3" class="map3"></div>
    <CardComponent :featureData="selectedFeatureData" :map3="map3" v-if="selectedFeatureData" @close="clearSelectedFeatureData" />
  </div>
</template>

<script>
import L from 'leaflet';
import CardComponent from './CardComponent.vue'

export default {
  components: {
    CardComponent
  },
  data() {
    return {
      map3: null,
      selectedFeatureData: null
    };
  },
  mounted() {
    console.log('Component mounted');
    // Initialize the Leaflet map
    this.map3 = L.map(this.$refs.map3).setView([51.505, -0.09], 13);

    // Add a tile layer (you can choose your own tile source)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map3);

    // Add event listeners
    this.map3.on('click', this.onMapClick);
  },
  methods: {
    onMapClick(e) {
      // Handle the click event
        // const clickedLatLng = e.latlng; // Get the clicked coordinates
        // Simulate fetching feature data from an API (replace with actual data)
        const sampleFeatureData = {
            // name: 'Sample Feature',
            // description: 'This is a sample feature.',
            coordinates: e.latlng
        };

        this.selectedFeatureData = sampleFeatureData;
        this.showCard = true;
        // You can make an API call to fetch feature data based on the clicked coordinates
        // Replace this with your actual API endpoint
        // axios.get(`YOUR_API_ENDPOINT?lat=${clickedLatLng.lat}&lng=${clickedLatLng.lng}`)
        // .then(response => {
        //     this.selectedFeatureData = response.data; // Assuming the response contains the feature data
        // })
        // .catch(error => {
        //     console.error('Error fetching feature data:', error);
        // });
    },
    clearSelectedFeatureData() {
      this.selectedFeatureData = null;
    }
  }
};
</script>

<style scoped>
.map3 {
  height: 400px;
}
</style>
