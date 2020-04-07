<template>

  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="loadSwiperImg">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper/index"

  export default {
    name: "HomeSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    data()
    {
      return{
        SwiperImgFinished:false
      }
    },
    props:{
      banners:{
        type:Array
      }
    },
    methods:{
      loadSwiperImg()
      {
        // console.log("Swiper");
        if(!this.SwiperImgFinished)
        {
          this.$emit("loadSwiperImg")
          this.SwiperImgFinished=true
        }

      }
    }

  }
</script>

<style scoped>

</style>
