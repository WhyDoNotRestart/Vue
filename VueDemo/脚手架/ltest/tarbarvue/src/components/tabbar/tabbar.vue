<template>
<div class="tab-item">
   <div class="tab" >
    <!-- <img :src="item.image" alt="" v-if="isActive">
    <img :src="item.image1" alt=""> -->
          <div class="content"  @click="change(index,item.path)" v-for="item,index in tabBarList" :key="index" >
                  <img class="" v-if="tabIndex==index? 'true':'false'" 
                  :src="item.img" alt="">
                  <img class="" v-else 
                  :src="item.image1" alt="">
                  <div :class="tabIndex==index? 'active':' '">{{item.name}} </div>
              
          </div>
  </div>
   
</div>
 
</template>

<script>
import tabbarItem from './tabbarItem.vue'
export default {
  //  props:{
  //   tabBarList:{
  //     Array
  //   }
  // },
data() {
  return {
    currentPath:null,
    tabIndex:0,
     tabBarList:[
       {  name:'首页',
        img:'@/assets/static/img/tabbar/_我的.png',
        img1:'@/assets/static/img/tabbar/_我的 (1).png',
        path:'/home'},
      {  name:'分类',
        img:'@/assets/static/img/tabbar/_我的.png',
        img1:'@/assets/static/img/tabbar/_我的 (1).png',
        path:'/category'},
      {  name:'购物车',
        img:'@/assets/static/img/tabbar/_我的.png',
        img1:'@/assets/static/img/tabbar/_我的 (1).png',
        path:'/shopCar'},
      {  name:'我的',
        img:'@/assets/static/img/tabbar/_我的.png',
        img1:'@/assets/static/img/tabbar/_我的 (1).png',
        path:'/profile'},
     ]
  }
},

// computed:{
//   isActive(){
    
//     //this.$route.path.indexOf(this.path) !=-1
//     let i=this.$route.path.indexOf(this.path) !=-1
//     console.log(i);
//     return i
//   }
// },
methods:{
  
  check(index){
// if(!this.isActive){
//       this.isActive=true
//     }else{
//       this.isActive=false
//     }
    this. tabIndex=index
  },
  
  change(index,path){
    // 跳转
    this.currentPath=path
    this.$router.push(path)

    //样式
    console.log(index);
  // if(this. tabIndex===index){
  //   return
  // }else{
  //   this. tabIndex=index
  //   this.isActive=true
  // }
  this. tabIndex=index
  },
  //跳转
  // turn(path){
  //   this.currentPath=path
  //   this.$router.push(path)
  // }
}
}

</script>
<style scoped>
.tab{
  display: flex;
 justify-content: space-around;
width: 100%;
  height: 49px;
  font-size: 14rpx;
}
.tab img{
  margin-left:5px ;
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
}
.tab-item{
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(221, 227, 231, 0.924);
}
.active{
  color:aqua
}



</style>