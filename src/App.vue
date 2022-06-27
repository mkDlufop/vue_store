<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HomeHeader></HomeHeader>
    <router-view></router-view>
    <!-- HomeFooter在主页、搜索页显示，在登录、注册页隐藏 -->
    <HomeFooter
      v-show="$route.meta.HomeFooterShow">
    </HomeFooter>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeHeader from './components/HomeHeader'
import HomeFooter from './components/HomeFooter'

export default {
  name: 'App',
  components: {
    // HelloWorld
    HomeHeader,
    HomeFooter,
  },
  mounted() {
    // 获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList");
  },
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
