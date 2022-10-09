<template>
  <div>
  <button>nihao</button>
 {{getId}}
 {{getid}}
 {{$route.query.id}}
</div>
</template>

<script>
export default {
  daat() {
    return {
      
    }
  },
  computed: {
     getId() {
       return this.$route.params.id
     },
    getid() {
        return this.$route.query.id
      }
  }
}

</script>
<style scoped>
</style>
