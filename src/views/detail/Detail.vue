<template>
  <div class="detail">
<!--    详情页{{this.$route.params.iid}}-->
    <nav-detail class="nav" @clickTebControlItem="clickTebControl" ref="NavDetail"/>
    <scroll :probe-type="3" class="centent" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="Goods" ref="baseInfo"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="GoodsImgLoad" />
      <detail-param-info :param-info="paramInfo" ref="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo" ref="commentInfo"/>
      <good-item-list :goods="goodList" ref="recommended" />
    </scroll>


    <div v-show="backTopShow">
      <back-top @click.native="clickBackTop" />
    </div>

    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
  import NavDetail from "./detailChildrens/NavDetail"
  import BackTop from "components/common/backTop/BackTop"

  import {getDetail,Goods,GoodsParam,getRecommend} from "network/detail"



  import DetailSwiper from "./detailChildrens/DetailSwiper"
  import DetailBaseInfo from "./detailChildrens/DetailBaseInfo"
  import Scroll from "components/common/scroll/Scroll"
  import DetailGoodsInfo from "./detailChildrens/DetailGoodsInfo"
  import DetailParamInfo from "./detailChildrens/DetailParamInfo"
  import DetailCommentInfo from "./detailChildrens/DetailCommentInfo"
  import DetailBottomBar from "./detailChildrens/DetailBottomBar"

  import GoodItemList from "components/content/goods/GoodItemList"


  export default {
    name: "Detail",
    components:{

      Scroll,
      BackTop,
      GoodItemList,

      NavDetail,
      DetailSwiper,
      DetailBaseInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar
    },
    data()
    {
      return{
        iid:null,
        topImages:[],
        Goods:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        goodList:[],
        themeTopYs:[],
        TitleIndex:0,
        backTopShow:false
      }
    },
    activated()
    {
      // this.iid=this.$route.params.iid
      // console.log(this.iid);
    },
    methods:{
      clickBackTop()
      {
        this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      },
      GoodsImgLoad()
      {
        this.$refs.scroll.scroll.refresh()

        this.themeTopYs=[]
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.paramInfo.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.commentInfo.$el.offsetTop-44)
        this.themeTopYs.push(this.$refs.recommended.$el.offsetTop-44)

        // console.log(this.themeTopYs);
      },
      clickTebControl(index)
      {
        // const offsetTop1=this.$refs.baseInfo.$el.offsetTop
        // const offsetTop2=this.$refs.paramInfo.$el.offsetTop
        // const offsetTop3=this.$refs.commentInfo.$el.offsetTop
        // const offsetTop4=this.$refs.recommended.$el.offsetTop

        this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 500)
        console.log(index);
      },
      contextScroll(Y){
        Y=-Y

        if(Y>=0&&Y<this.themeTopYs[1]){
          // console.log(1);
          this.$refs.NavDetail.curTitleIndex=0
        }
        else if(Y>=this.themeTopYs[1]&&Y<this.themeTopYs[2]){
          // console.log(2);
          this.$refs.NavDetail.curTitleIndex=1

        }
        else if(Y>=this.themeTopYs[2]&& Y<this.themeTopYs[3])
        {
          // console.log(3);
          this.$refs.NavDetail.curTitleIndex=2

        }
        else {
          // console.log(4);
          this.$refs.NavDetail.curTitleIndex=3

        }

      },
      addToCart(){
        const obj = {}
        obj.iid = this.iid
        obj.imgURL = this.topImages[0]
        obj.title = this.Goods.title
        obj.desc = this.Goods.desc
        obj.price = this.Goods.realPrice
        // console.log(obj);
        this.$store.dispatch("addCart",obj)
      }
    },
    updated()
    {

    },
    created() {
      this.iid=this.$route.params.iid
      // console.log(this.iid);
      getDetail(this.iid).then(res=>{
        // console.log(res);
        const data=res.result

        //轮播图数据
        this.topImages=data.itemInfo.topImages
        // console.log(this.topImages);

        //货物基础信息
        this.Goods=new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        //货物详情信息
        this.detailInfo=data.detailInfo
        // console.log(this.detailInfo);

        //货物参数信息
        this.paramInfo=new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 保存评论数据
        // console.log(data.rate.list.length);
        if (data.rate.list) {//评论可能为空
          // console.log(data.rate.list[0]);
          this.commentInfo = data.rate.list[0];
        }

        // this.$nextTick(()=>{
        //
        // })

      })
      getRecommend().then(res=>{
        // console.log(res.data.list);
        this.goodList=res.data.list
      })
    },
    mounted() {
      this.$refs.scroll.scroll.on("scroll",(options)=>{
        if (-options.y>1000)
          this.backTopShow=true
        else
          this.backTopShow=false
        this.contextScroll(options.y)
      })
    }
  }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 10;
    background: #fff;
    height: 100vh;
  }
  .centent{
    height: calc(100% - 44px);
  }
  .nav{
    position: relative;
    background: #fff;
    z-index: 11;
  }
</style>
