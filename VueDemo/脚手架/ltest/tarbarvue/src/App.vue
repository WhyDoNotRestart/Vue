<template>
  <div id="app">
    <tabbar ></tabbar>
    <router-view ></router-view>
  </div>
</template>

<script>
import tabbar from './components/tabbar/tabbar'
import tabbarItem from './components/tabbar/tabbarItem.vue'


export default {
  name: 'App',
  data() {
    return {
      tabbar:[
     
      ]
    }
  },
  components:{
    tabbar,
    tabbarItem
  }
}
</script>

<style>
@import "./assets/css/base.css"
</style>
