<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HomeHeaderVue></HomeHeaderVue>
    <HomeFooterVue></HomeFooterVue>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeHeaderVue from './components/HomeHeader'
import HomeFooterVue from './components/HomeFooter'

export default {
  name: 'App',
  components: {
    // HelloWorld
    HomeHeaderVue,
    HomeFooterVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
