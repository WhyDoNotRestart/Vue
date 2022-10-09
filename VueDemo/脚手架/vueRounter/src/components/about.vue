<template>
  <div class="hello">
    about
    {{userName}}
   <router-link to="/about/news">新闻</router-link>
   <router-link to="/about/message">消息</router-link>
   <router-view > </router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
 computed:{
  userName(){
    return this.$route.params.userName
  }
 }
}
</script>

<style scoped>
.hello{
    margin: 200px auto;
    font-size: 30px;
}

</style>
