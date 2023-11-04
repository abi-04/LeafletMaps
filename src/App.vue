<template>
  <!-- <div id="app">
    <Map/>
  </div> -->
  <div id="app">
    <h1>TalkingMinds Assessment</h1>
    <!-- Navigation links -->
    <router-link to="/map">Task 1</router-link>
    <br/>
    <br/>
    <router-link to="/map2">Task 2</router-link>
    <br/>
    <br/>
    <router-link to="/map3">Task 3</router-link>
    <br/>
    <br/> 
    <br/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  // components: {
  //   Map
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
