<template>
  <div id="app">
    <!-- <MainPage></MainPage> -->
    <router-view></router-view>
  </div>
</template>

<script>
import MainPage from './components/common/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style lang="less">
html,body,p{
  margin: 0;
  padding: 0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
