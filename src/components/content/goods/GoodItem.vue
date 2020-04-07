<template>
  <div class="goods-item" @click="itemClick" >

    <img v-if="isShowIndexImg" :src="goodItem.show.img" alt="" @load="loadImgFinished">

    <img v-else :src="goodItem.image" alt="" @load="loadImgFinished">

    <div class="goods-info">
      <p>{{goodItem.title}}</p>
      <span class="price">{{goodItem.price}}</span>
      <span class="collect"> {{goodItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodItem",
    props:{
      goodItem:{
        type:Object
      }
    },
    computed:{
      isShowIndexImg(){
        if(this.goodItem.show)
          return true
        else
          return false
      }
    },
    methods:{
      itemClick()
      {
        this.$router.push("/detail/"+this.goodItem.iid)
      },
      loadImgFinished()
      {
        // console.log("loadImgFinished");
        this.$bus.$emit("loadGoodItem")
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
