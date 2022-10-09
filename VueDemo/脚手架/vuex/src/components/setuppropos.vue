<template>
  <div style="border:1px solid red">
    <h1>ref_data</h1>
    {{ ref_data }}
    {{ receive }}
    <p></p>
    {{ normal_data }}
    <h1>normal_data</h1>

    <p @click="zi_f1">{{ v1 }}</p>
  </div>
</template>

<script>
import { watchEffect } from "vue";

export default {
  data() {
    return {
      id: 1,
      receive: this.ref_data
    };
  },
  //参数props 是一个对象
  //如果在父页面改变穿过来的值 子页面也同样会改变  可以定义一个数据来接收 这样可以保留传过来的数据
  setup(props) {
    var v1 = "这是子组件里面的值";
    let zi_f1 = function() {
      console.log(props);
    };

    //检测到propos中值的变化
    watchEffect(() => {
      console.log("nihao");
      console.log(props.ref_data);
    });

    return {
      v1,
      zi_f1
    };
  },
  props: {
    ref_data: {
      type: String,
      default: "我还没有传值"
    },
    normal_data: {
      type: String,
      default: "我还没有传值"
    }
  }
};
</script>
<style scoped></style>
