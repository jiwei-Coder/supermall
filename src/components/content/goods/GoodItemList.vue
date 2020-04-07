<template>
  <div class="goods-list">
    <good-item v-for="(item,index) in goods" :key="index" :good-item="item" class="item"></good-item>
  </div>
</template>

<script>
  import GoodItem from "./GoodItem"
  export default {
    name: "GoodItemList",
    components:{
      GoodItem
    },
    props:{
      goods:{
        type:Array,
      }
    }

  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-around;
  }

  .goods-list .item {
    width: 48%;
  }
</style>
