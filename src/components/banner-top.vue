<template>
    <div class="wrapper">
            <div class="titlelogo">
      <image class="image" src="https://news.ycombinator.com/favicon.ico"></image>
        <text class="title">香蕉榜</text>
    </div>
    <div>
        
            <div class="box" v-for="i in bannerlist" @click="jump('/')" v-bind:key="i.src">
                <image class="i-image" resize="cover" :src="i.src"></image>
                <text class="i-state">我是状态</text>
                <div class='i-image-block'></div>
                <text class="side">我要在外部</text>
            </div>
        
        

    </div>

    </div>
</template>
<style scoped>
  .titlelogo {
    position: relative;
    margin-top: 15px;
    margin-bottom: 10px;
    height: 50px;
    left: 15px;
    flex-direction: row;
    border-width: 3px;
    border-style: solid;
    border-color: #FFFFFF;
  }
  .image {
    width: 30px;
    height: 40px;
  }
  .title {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 32px;
    line-height: 44px;
    padding-left: 10px;
    color: #000;
  }
    .side{
        position: relative;
        border-radius: 5%;
        top:25px;
        left: 0;
        width: 350px;
        border-width: 4px;
        border-color: transparent;
    
    }
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
        padding-bottom: 6px;
    }
    .tlt{
        text-align: center;
        font-size: 30px;
        margin-top: 30px;
        margin-bottom: 26px;
        color:#333;
    }
    .box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 750px;
        border-bottom-width: 1px;
        border-bottom-color: #80808066;
    }
    .box-item{
        width: 350px;
        height: 250px;
        margin: 5px;
    }
    .i-state{
        position: absolute;
        top: 15px;
        font-size: 20px;
        left: 5px;
        color: red;
        width: 170px;
        margin-top: 10px;
        padding: 5px;
        line-height: 20px;
        text-align: center;
        border-width: 1px;
        border-color: #b8a989;
        border-radius: 4px;
    }
    .i-image{
        position: absolute;
        border-radius: 5%;
        top:20px;
        left: 10px;
        width: 300px;
        border-width: 4px;
        border-color: transparent;
        height: 130px;
    }
    .i-image-block{
        position: relative;
        height: 170px;
        width: 260px;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    export default {
        props:["title","bannerlist"],
        data () {
            return {
            }
        }
    }
</script>