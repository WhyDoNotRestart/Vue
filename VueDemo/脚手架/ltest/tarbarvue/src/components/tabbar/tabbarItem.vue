<template>
  <div class="tab">
    <slot class="item-icon"></slot>
    <slot class="item-text"></slot>
</div>
</template>

<script>
export default {

}

</script>
<style scoped>
.tab{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14rpx;
}
.tab img{
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
}
</style>