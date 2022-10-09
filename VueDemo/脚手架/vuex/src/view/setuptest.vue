<template>
  <div style="margin-top:100px; border:1px solid red">
    <div>----------------</div>
    <div>
      <h1>setup使用</h1>
      <h3>正常使用</h3>
      <p>{{ name }}</p>
      <button @click="set_fn">使用setup中的方法| {{ b }}</button>
      <button @click="arrowFn">setup中的箭头函数</button>
      <h3>访问stateup</h3>
      <button @click="m_fn">{{ data1 }}methods 访问</button>
    </div>

    <div>
      <h1>setup 中的propos</h1>
      <div style="background-color:red">
        <setuppropos :ref_data="name" :normal_data="data1"></setuppropos>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import setuppropos from "../components/setuppropos";
export default {
  data() {
    return {
      id: "2",
      value: "只是data里面的值"
    };
  },

  //setup里面的数据不为响应式
  //    只有当data发生改变等 页面重新进行渲染 才会改变
  //如果使用定时器修改     使用函数来修改  使用定时器来触发函数
  //不能访问data
  //正常函数和箭头函数this指向null
  //如果数据使用ref变成响应式  该数据变成一个对象 props传送的是一个值
  //
  setup() {
    var data1 = "这是setup里面的数据";
    var name = ref("使用ref将数据变成响应式");
    var b = ref(20);
    let set_fn = function() {
      console.log(data1);
      console.log(name.value);
    };
    let arrowFn = () => {
      console.log(data1);
    };

    let abc = function() {
      console.log(name.value);
      name.value = "我改变了ref值";
      data1 = "我改变了正常的数值";
      console.log(data1);
    };
    setTimeout(abc, 2000);
    setTimeout(function asd() {
      console.log("nihao");
      name.value = "我用定时器改变了ref数值";
      console.log(name.value);
    }, 4000);
    return {
      data1,
      name,
      set_fn,
      arrowFn,
      abc,
      b
    };
  },
  //可以访问setup  mapstate
  methods: {
    m_fn() {
      console.log("使用this访问setup里面的值" + this.name);
      console.log("使用this访问setup里面的函数" + this.set_fn);
    },
    fu_test() {
      console.log(this.$refs.zi_cmp.data);
    }
  },
  components: {
    setuppropos
  }
};
</script>
<style scoped></style>
