<template>
    <div class="wrapper">
            <div class="titlelogo">
      <image class="image" src="https://news.ycombinator.com/favicon.ico"></image>
        <text class="title">猴山头条</text>
    </div>
        <div class="box">
            <div class="box-item" v-for="i in imglist" @click="jump('/')" v-bind:key="i.src">
                <image class="i-image" resize="cover" :src="i.src"></image>
                <text class="i-state">我是状态</text>
                <div class='i-image-block'></div>
                <text class="outside">我要在外部</text>
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
    .outside{
        position: relative;
        top:5px;
    
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
    }
    .box-item{
        width: 350px;
        height: 250px;
        margin: 5px;
    }
    .i-state{
        position: absolute;
        bottom: 55px;
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
        top:0;
        left: 0;
        width: 350px;
        border-width: 4px;
        border-color: transparent;
        height: 200px;
    }
    .i-image-block{
        position: relative;
        height: 200px;
        width: 350px;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    export default {
        props:["title","imglist"],
        data () {
            return {
            }
        }
    }
</script>