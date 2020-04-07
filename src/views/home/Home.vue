<template>
    <div class="home" >
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>

      <div class="tabControlfixed" v-show="tabControlfixed">
        <tab-control
                class="tab-control"
                ref="tabControlFixed"
                :titles="['流行', '新款', '精选']"
                @clickItem="clickControlItem"></tab-control>
      </div>
      <scroll class="content" ref="scroll" :probe-type="3" @pullingUp="loadMoreGoods">
        <home-swiper :banners="banners" @loadSwiperImg="loadSwiperImg" ref="swiper"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control
                class="tab-control"
                ref="tabControl"
                :titles="['流行', '新款', '精选']"
                @clickItem="clickControlItem"></tab-control>
        <good-item-list :goods="goods[curGoodsType].list" />
      </scroll>
      <div v-show="backTopShow">
        <back-top @click.native="clickBackTop" />
      </div>
    </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import TabControl from "components/content/tabControl/TabControl"
  import GoodItemList from "components/content/goods/GoodItemList.vue"
  import Scroll from "components/common/scroll/Scroll"
  import BackTop from "components/common/backTop/BackTop"

  import HomeSwiper from "./childrencomponents/HomeSwiper"
  import RecommendView from "./childrencomponents/RecommendView"
  import FeatureView from "./childrencomponents/FeatureView"

  import {getHomeMultidatas,getHomeGoods} from "network/home"
  export default {
    name: "Home",
    components:{
      NavBar,
      TabControl,
      Scroll,
      BackTop,

      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodItemList
    },
    data()
    {
      return{
        banners:null,
        recommends:null,
        goods:{
           "pop":{page:0,list:[]},
           "new":{page:0,list:[]},
           "sell":{page:0,list:[]}
        },
        curGoodsType:'pop',
        backTopShow:false,
        controlTebOffsetTop:0,
        tabControlfixed:false,
        saveY:0

      }
    },
    computed:{

    },
    methods:{
      clickControlItem(index)
      {
        // console.log(index);
        this.curGoodsType=Object.keys(this.goods)[index]

        this.$refs.tabControl.currentIndex=index
        this.$refs.tabControlFixed.currentIndex=index
        this.$refs.scroll.scroll.scrollTo(0,-this.controlTebOffsetTop,500)
      },

      clickBackTop()
      {
        this.$refs.scroll.scroll.scrollTo(0,0,500)
      }
      ,
      loadMoreGoods()
      {

        this.getHomeGoods(this.curGoodsType)

        if(this.$refs.scroll.scroll)
          this.$refs.scroll.scroll.finishPullUp()

      },
      loadSwiperImg()
      {
        // console.log();
        this.controlTebOffsetTop=this.$refs.tabControl.$el.offsetTop
      },




      /*
        网络请求函数
       */
      getHomeMultidatas()
      {
        getHomeMultidatas().then(res=>{
          this.banners=res.data.banner.list
          this.recommends=res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1
        // console.log(page);
        getHomeGoods(type,1).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page=this.goods[type].page+1
          // console.log(this.goods[type].list);
          return res
        })
      },

    },
  created() {
    this.getHomeMultidatas()
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")

  },

  mounted() {
    this.$refs.scroll.scroll.on("scroll",(options)=>{
      // console.log(options)
      this.backTopShow=-options.y>1000
      // console.log("滑动：",-options.y);
      // console.log("teb",this.controlTebOffsetTop);
      if(-options.y<this.controlTebOffsetTop)
        this.tabControlfixed=false
      else
        this.tabControlfixed=true

    })

    this.$bus.$on("loadGoodItem",()=>{
      // console.log("loadGoodItem");
      this.$refs.scroll.scroll.refresh()
    })

  },
  activated() {
    // console.log("actived:",this.saveY);
    this.$refs.scroll.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated() {
    // console.log("deactive:",this.$refs.scroll.scroll.y);

    this.saveY=this.$refs.scroll.scroll.y
  }


  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: white;
  }
  .home{
    /*padding-top: 44px;*/
    position: relative;
    /*z-index: 7;*/
    height: 100vh;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
    /*height: 300px;*/
    overflow: hidden;
  }


</style>
