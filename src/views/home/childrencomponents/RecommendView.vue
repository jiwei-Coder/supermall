<template>
  <div class="home-recommend">
    <div v-for="(item,index) in recommends" :key="index" class="home-recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array
      }
    }
  }

</script>

<style scoped>
  .home-recommend{
    display: flex;
    /*height: 40px;*/
    border-bottom: 5px solid #eee;
    padding: 8px 0px 10px 0px;
  }
  .home-recommend-item{
    flex: 1;
    text-align: center;
  }
  .home-recommend-item img{
    height: 74px;
    border-radius: 25px;
    margin-bottom: 10px;
  }
</style>
