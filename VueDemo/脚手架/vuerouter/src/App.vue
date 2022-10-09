<template>
  <div id="app">
    <div>

      <!-- 路由镶嵌 -->
      <router-link to="/HelloWorld" tag="button">HelloWorld</router-link>

      <!-- 动态路由 -->
      <router-link :to="'/User/' + myCreate_dif" tag="button">用户界面</router-link>

      <!-- 传参 -->
      <router-link :to="{ path: '/about', query: { name: 'dxr', age: '18', action: '死心' } }" tag="button">关于</router-link>

    </div>

    <div>
      <button @click="into">方法进入页面 修改路由</button>
    <keep-alive >
              <router-view ></router-view>
    </keep-alive>

     
     
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log(this.$router);
  },
  methods: {
    into() {
      // console.log(this.$router);
      // console.log(this.$route);
      //this拿到当前组件  
      //所有组件都有一个 router属性
      // 正常跳转
      // this.$router.push('/home')
      // 传参跳转一
      // //  this.$router.push('/home'+myCreate_dif)
      // 传参跳转二

   //   编程式导航。这个方法会向 history 栈中添加一个历史记录，
       // 但用户点击浏览器的后退按钮时，就会回到之前的 URL。
      this.$router.push({
        path: '/home',
        query: {
          name: 'wgg',
          age: '25',
          action: '欠揍'
        }
      })
    }
  },
  data() {
    return {
      myCreate_dif: '乖乖再见嘞'
    }
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
