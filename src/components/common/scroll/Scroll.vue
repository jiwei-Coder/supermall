<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Scroll",
    data()
    {
      return{
        scroll:null
      }
    },
    props:{
      // wrapper:{
      //   type:String
      // },
      probeType:{
        type: Number,
        default:0
      }
    },
    mounted() {
      this.scroll=new BScroll(this.$refs.wrapper,
        {
          probeType: this.probeType,//0,1不实时监听，2.实时监听，但不监听惯性滚动，3.监听所有滚动
          click: true, //true可以监听内部的浏览器事件，flase阻止监听内部事件
          pullUpLoad: {
            threshold: 50//这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
          }
        }
          )

      this.scroll.on("pullingUp",()=>{
        // console.log("上拉加载更多。。。。");
        this.$emit("pullingUp")

      })


    }
  }
</script>

<style scoped>

</style>
