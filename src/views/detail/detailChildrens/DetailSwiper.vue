<template>
  <swiper class="swiper-detail">
    <swiper-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="" >
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper/index"
  export default {
    name: "DetailSwiper",
    components:{
      SwiperItem,
      Swiper
    },
    props:{
      topImages:{
        type:Array
      }
    },
    mounted() {
      // console.log(this.topImages);
    }
  }
</script>

<style scoped>
  .swiper-detail{
    height: 300px;
  }
</style>
