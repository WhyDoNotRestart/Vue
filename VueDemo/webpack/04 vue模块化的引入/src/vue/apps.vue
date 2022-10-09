<!-- //相当于一个组件 -->

<template>
    <div>
        <div>
            {{message}}
        <button class="but">点击</button>
        </div>
    </div>
</template>
<script>
export default {
     
   data() {
        return {
            message:'你好'
        }
    },
    methods: {
        
    },
}
</script>
<style >
.but{
    background-color: aqua;
}
</style>