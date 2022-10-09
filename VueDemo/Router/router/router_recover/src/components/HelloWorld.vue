<template>
  <div>
    {{ data }}
    <button @click="zi_methods">子组件方法</button>
    <u-upload ref="upload"></u-upload>

    <div>
      <p>'------------------'</p>
      <p>{{ data }}</p>
      <p>--------</p>
    </div>
  </div>
</template>

<script>
  
export default {
  data() {
    return {
      data: 44,
    };
  },
  props: {
    data: {
      type: String,
      default: "传值",
    },
  },
  setup(props) {
    console.log(props.data);
  },
  methods: {
    zi_methods() {
      console.log("this is methods of zi");
    },
  },
};
</script>
<style scoped></style>
