<template>
  <div>
    <div>
      {{ $store.state.counter }}
      <button @click="downEvent">-</button>
      <button @click="upEvent">+</button>
      <button @click="aaddEvent(4)">点击加四</button>
      <button @click="nullVlaue">归零</button>
      <!-- <button @click="threeAgain">乘三次</button> -->
    </div>

    <div>
      <p>乘二次： {{ $store.getters.compValue }}</p>
      <p>乘三次： {{ $store.getters.threeAgain }}</p>
      <p>筛选： {{ $store.getters.useExtra }}</p>
      <p>乘12+2+1次： {{ $store.getters.custom(12) }}</p>
    </div>
    <p>-----------------------------------</p>
    <div>
      <p>aciton</p>
      {{ $store.state.message }}
      <button @click="updataInfor('这是传递的数据')">点击修改信息</button>
      <button @click="transObj">传递函数</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    downEvent() {
      this.$store.commit("downEvent");
    },
    upEvent() {
      this.$store.commit("upEvent");
    },
    aaddEvent(value) {
      // this.$store.commit("aaddEvent", value);

      // 如果是已对象方式传送  value的值为commit 括号里面的对象
      this.$store.commit({
        type: "aaddEvent",
        value,
      });
    },
    nullVlaue() {
      this.$store.commit("nullVlaue");
    },
    threeAgain() {},
    updataInfor(value) {
      // this.$store.commit("updata", value);
      console.log(value);
      this.$store.dispatch("updata_action", value);
    },
    transObj() {
      this.$store
        .dispatch("transObj", {
          Fn: () => {
            console.log("这是我传递的函数");
          },
          name: "dxr",
          age: 18,
          sex: "男",
        })
        .then((res) => {
          console.log(res + "执行成功继续调用接下来的代码");
        });
    },
  },
};
</script>
<style scoped></style>
