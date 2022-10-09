<template>
  <div id="app">
    <p>{{hello}}</p>
    <!--  :to="'/about/'+useName" -->
    <router-link :to="'/about/'+useName" tag="button" active-class="change">关于</router-link>
   <router-link to="/HelloWorld" tag="button">世界</router-link>
   <router-view ></router-view>
    
<!-- <button @click="turn"></button> -->
    <!-- <div>
      <h2>改变URL，但是页面不进行整体的刷新</h2>
      <h4>​URL的hash </h4>
      <p> URL的hash也就是锚点，本质上是改变window.location的href属性。
        我们可以通过直接赋值location.hash来改变href，但是页面不发生刷新。</p>

      <h2>控制台</h2>
      <p>hash 是url中的锚
        http：//www.httpwatch.com/features.htm#print
        这里的 #print 为锚
        左侧的url部分 标识了可由浏览器下载的资源
        右侧的部分指定资源中的位置
      </p>

      <p>输入location.hash='aaaa' 页面不会跳转 但是url发生改变 也不会重新请求资源
        如果用location.href 页面会跳转 url也会发生改变 也会重新请求
      </p>
      <p># 是用来指导浏览器动作的，对服务器端完全无用。所以，HTTP 请求中不包括 #。

        比如，访问下面的网址：

        http://www.example.com/index.html#print
        浏览器实际发出的请求是这样的：

        GET /index.html HTTP/1.1
        Host: www.example.com
        可以看到，只是请求 index.html，根本没有 #print 的部分。</p>

<p> 
  location.hash='aaa'

  history.pushState({},'','aaa')  相当于压栈  有记录  可以返回到上一级
      history.back()

  history.replaceState({},'','about')   直接替代 不能返回

  history.go(-1) =history.back()  -1表示返回一级   -2表示返回二级    正表示向前
  history.go(1) = history.forward()

</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      hello:"你好 ",
      useName:'dxr'
    }
  },
  methods: {
    // turn(){
    //   this.$router('./about')
    // }
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
