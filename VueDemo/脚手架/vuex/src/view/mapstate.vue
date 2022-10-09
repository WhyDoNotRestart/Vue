<template>
  <div style=" border:1px solid red">
    <h2>mapstate使用</h2>

    <div style="border:1px solid green">
      <div>
        <p>{{ $store.state.name }}</p>
        <p>{{ name }}</p>
        <p>{{ count1 }}</p>
        <p>{{ count2 }}</p>
      </div>
      <div>
        <p>{{ counter }}</p>
        <button @click="test(6)">方法</button>
      </div>

      <!-- 向state中添加数据  
         正常需要通过aciton  在通过mutations 向state中传值  数据过于简单直接用mutations -->
      <input type="text" v-model="addData" />
      <button type="" @click="add">添加人员</button>
      <ul>
        <li v-for="(item, index) in personList" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      addData: "",
      count: 1
    };
  },
  computed: {
    //  name() {
    //    return this.$store.state.name;
    //  },
    // count1() {
    //   return this.$store.state.count1;
    // },
    // count2() {
    //   return this.$store.state.count2;
    // },
    // count3() {
    //   return this.$store.state.count3;
    // },
    ...mapState(["name", "count1", "count2", "counter", "personList"])
  },

  methods: {
    // test(n) {
    //   this.$store.commit("expendN", n);
    // }

    /*
    如果使用 mutations中的函数不传参   默认传送的鼠标的点击事件
    mutations中如果要传参


    <p @click='testFn'></p>
       testFn(){
        this.$store.commit('EvFn',this.id)
       }
       在methods中使用 this.xxx传参
       这样在html里面不会传值传送data中的数据是可以访问
       但是使用精简  必须在 html的绑定中传参

    */

    //test 的参数自动传到expendN 中  但是一定要在html的绑定中传入
    ...mapMutations({ test: "expendN" }),
    add() {
      this.count++;
      const personObj = { name: this.addData, age: this.count };
      this.$store.commit("ADD_PERSON", personObj);
      console.log(personObj);
    }
  }
};
</script>
<style scoped></style>
