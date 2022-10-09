<template>
  <div>
    <router-link to="/" tag="button">Home</router-link> |
    <router-link :to="/about/ + id" tag="button">About</router-link>
    <!-- <router-link :to="{path:'/about',query:{id:'18'}}"  tag="button">About</router-link> -->
    <router-view />

    <div>
      <HelloWorld ref="zi_cmp" :data="name"></HelloWorld>
      <button @click="fu_test">父组件方法</button>
      <p @click="set_fn">{{ name }} {{ b }}</p>
      <p @click="m_fn">点击</p>
    </div>

    <div>
      <p>````````````````````````````</p>
      <!-- <p>{{ count }}</p> -->
      <!-- <p>{{ name }}</p> -->
      <!-- <p>{{ age }}</p> -->
      <p>{{ count1 }}</p>
      <p>{{ count2 }}</p>
      <p>{{ count3 }}</p>
      <p @click="changeHe">{{ hellow }}</p>
    </div>
  </div>
</template>

<script>
import HelloWorldVue from "./components/HelloWorld.vue";
import HelloWorld from "./components/HelloWorld.vue";
import { mapState } from "vuex";
import { ref } from "vue";
export default {
  data() {
    return {
      id: "2",
    };
  },

  //不能访问data
  setup() {
    var name = ref("这是setUp用法");
    var b = ref(20);
    function set_fn() {
      this.name = "改变过后的值";
      this.b = 340;
    }
    return {
      name,
      set_fn,
      b,
    };
  },

  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   name() {
  //     return this.$store.state.name;
  //   },
  //   age() {
  //     return this.$store.state.age;
  //   },
  // },
  computed: {
    //  ...mapState(["count", "name", "age"]),
    //可以访问data
    //mapState 里面的值为只读 不能进行修改
    ...mapState({
      // count: "count",
      count1: "name",
      count2: "age",
      // 映射 count3 为 store.state.conut3的值
      count3: (state) => {
        //获取到index中的 state
        console.log(state);
        return state.count3;
      },
      hellow: function (state) {
        return this.id + state.count;
      },
    }),
  },
  watch: {
    // hellow 为只读属性
    hellow(newV, oldV) {
      console.log(newV);
      console.log(oldV);
    },
  },

  //可以访问setup  mapstate
  methods: {
    m_fn() {
      console.log("访问setup里面的值" + this.name);
    },
    fu_test() {
      console.log(this.$refs.zi_cmp.data);
    },
    changeHe() {
      this.count1 = "我点击改变了值";
      this.hellow = "我改变了值";
    },
  },
  components: {
    HelloWorldVue,
    HelloWorld,
  },
};
</script>

<style></style>

<style lang="less"></style>
