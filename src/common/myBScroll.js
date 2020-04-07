import BScroll from "better-scroll"

export function myBScroll(selector) {
  const querySelector=document.querySelector(selector)
  return new BScroll(querySelector,{
    probeType:3,//0,1不实时监听，2.实时监听，但不监听惯性滚动，3.监听所有滚动
    click:true , //true可以监听内部的浏览器事件，flase阻止监听内部事件
    pullUpLoad: {
      threshold: 50//这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
    }

  })
}
