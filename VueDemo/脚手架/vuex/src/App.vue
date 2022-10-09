<template>
  <div id="app">
    <div>
      <button @click="drop">-</button>
      {{ $store.state.counter }}
      <button @click="add">+</button>
      <button @click="expendMount(4)">扩大倍</button>

      <h4>===========getters===========</h4>
      {{ $store.getters.powerMount }}
      <p>{{ $store.getters.threeMount }}</p>
      <p>{{ $store.getters.randomMount(10) }}</p>

      <h3>-------修改与添加---------</h3>
      {{ $store.state.people }}
      <button @click="change">改变数据</button>

      <h3>=============模块=============</h3>
      <P>{{ $store.state.a.name }}</P>
      <button @click="moC">模块修改</button>
      <p>{{ this.$store.getters.changeNN }}</p>
      <button @click="ayso">异步修改</button>
    </div>
    <div>---------------------------</div>
    <HelloWorld></HelloWorld>
    <div>
      <h1>setup ref</h1>
      <setuptest></setuptest>

      <div style="margin-top:100px">
        <h1>mapstate</h1>
        <mapstate></mapstate>
      </div>
    </div>
  </div>
</template>

<script>
// import reqeuest from "./utils/reqeuest";
import { getAPPdata } from "../src/utils/course";
import HelloWorld from "./view/HelloWorld.vue";
import mapstate from "./view/mapstate.vue";
import setuptest from "./view/setuptest";
// import axios from "axios";
export default {
  components: { HelloWorld, setuptest, mapstate },
  methods: {
    add() {
      this.$store.commit("addMount");
    },
    drop() {
      this.$store.commit("dropMount");
    },
    expendMount(n) {
      this.$store.commit("expendN", n);
    },
    change() {
      //  this.$store.commit('change')  修改删除
      //使用异步
      this.$store.dispatch("differentChange", "我是参数").then(res_value => {
        console.log(res_value);
      });
    },
    moC() {
      this.$store.commit("updataName", "王乖乖");
    },
    ayso() {
      this.$store.dispatch("updataNN");
    }
  },
  mounted() {
    console.log(11);
    getAPPdata().then(res => {
      console.log(res);
    });
  },
  created() {
    // reqeuest({
    //   url: "todos",
    //   params: { _limit: 5 }
    // }).then(res => {
    //   console.log(res);
    // });
    // reqeuest({
    //   url: "todos",
    //   method: "post",
    //   data: { title: "米修在线1", completed: false }
    // }).then(res => {
    //   console.log(res);
    // });
  }
  // {
  // //  async created() {
  // //    let res = await axios.get("http://jsonplaceholder.typicode.com/todos", {
  // //      _limit: 5
  // //    });
  // //    let res1 = await axios({
  // //      url: "http://jsonplaceholder.typicode.com/todos",
  // //      method: "post",
  // //      headers: {},
  // //      data: { title: "米修在线1", completed: false },
  // //      //data是post  params 是get
  // //      params: {},
  // //      timeout: 2000
  // //    });
  // //    console.log(res1);
  // //  }
  // },
};
</script>

<style></style>
