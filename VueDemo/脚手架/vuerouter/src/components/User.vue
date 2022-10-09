<template>
  <div>
 你好，我累了
 {{myCreate}}
 <p>{{$route.params.myCreate}}</p>
</div>
</template>
<script>
export default {
  computed:{
    myCreate(){
      return this.$route.params.myCreate
    }
  }
}

</script>
<style scoped>
</style>