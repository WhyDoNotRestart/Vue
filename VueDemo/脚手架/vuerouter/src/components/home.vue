<template>
  <div>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quo quos, excepturi nisi ducimus ipsam quia reprehenderit iste dolor voluptas porro repellat qui quaerat tempora laudantium illo ea culpa ratione?
  <p> {{$route.query}}</p>
</div>
</template>

<script>
export default {
    created(){
        console.log('created');
    },
    destroyed() {
        console.log('destory');
    },

}

</script>
<style scoped>
</style>