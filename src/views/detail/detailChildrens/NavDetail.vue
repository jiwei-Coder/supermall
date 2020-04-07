<template>
  <div>
    <nav-bar class="nav-detail">
      <div slot="left" class="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <ul>
          <li v-for="(item,index) in titles" :key="index"  @click="clickItem(index)">
            <span :class="{clickItem:curTitleIndex==index}">{{item}}</span>
          </li>
        </ul>
      </div>

    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"


  export default {
    name: "NavDetail",
    components:{
      NavBar

    },
    data()
    {
      return{
        titles: ["商品","参数","评论","推荐"],
        curTitleIndex:0
      }

    },
    // props:{
    //   curTitleIndex:{
    //     type:Number
    //   }
    // },
    methods:{
      back()
      {
        this.$router.go(-1)
      },
      clickItem(index){
        this.curTitleIndex=index
        this.$emit("clickTebControlItem",index)
      }
    }


  }
</script>

<style scoped>

  .left{
    text-align: center;
    line-height: 57px;
  }
  .titles ul{
    display: flex;
  }
  .titles ul li{
    flex: 1;
    list-style: none;
    text-align: center;
  }
  .titles ul li span{
    padding-bottom: 13px;
  }
  .clickItem{
    color: #ff8198;
    border-bottom: 2px solid #ff8198;
  }
</style>
