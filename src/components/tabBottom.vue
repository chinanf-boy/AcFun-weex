<template>
    <div class="wrapper">
        <div class="bar-item" @click="getAndJump('/home')" >
            <text   class="bar-ic iconfont"  v-bind:class="[active == '/home'?'active':'']"   >&#xe660;</text>
            <text class="bar-txt"  >首页</text>
        </div>
        <div class="bar-item" @click="getAndJump('/article')" >
            <text class="bar-ic iconfont"  v-bind:class="[active == '/article'?'active':'']" >&#xe744;</text>
            <text class="bar-txt"  >文章</text>
        </div>
        <div class="bar-item act" @click="getAndJump('/channel')" >
            <text class="bar-ic iconfont"  v-bind:class="[active == '/channel'?'active':'']" >&#xe605;</text>
            <text class="bar-txt"  >频道</text>
        </div>
        <div class="bar-item" @click="getAndJump('/watch')" >
            <text class="bar-ic acfunicon" v-bind:class="[active == '/watch'?'active':'']" >&#xe60f;</text>
            <text class="bar-txt"  >关注</text>
        </div>
        <div class="bar-item" @click="getAndJump('/my')" >
            <text class="bar-ic iconfont" v-bind:class="[active == '/my'?'active':'']"  >&#xe639;</text>
            <text class="bar-txt"  >我的</text>
        </div>
    </div>
</template>
<script>
import getfonts from '../fonts/';
var modal = weex.requireModule('modal')
export default {
    data() {
       return {
            active:'/home'
        }
    },
  created() {
      getfonts.initIconFont()
      
  },
  methods: {

      getAndJump(_to){
          console.log(this.active)
          if(this.active == _to) return;
            this.active = _to;
    //mixins func
          console.log(this.active)
    
            this.$router && this.$router.push(_to)
      }
  }

}
</script>
<style scoped>
    .active {
        color: red;
    }
    

    .iconfont {
        font-family:iconfont;
    }
    .acfunicon {
        font-family: acfunicon;
    }
    .wrapper{
        position: fixed;
        bottom: 0;
        left: 0;right: 0;
        height: 105px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .bar-item{
        flex: 1;
    }
    .bar-txt,.bar-ic{
        color:#666;
        text-align: center;
    }
    .bar-active{
        color:#b4282d;
    }
    .bar-ic{
        padding-top: 10px;
        font-size: 45px;
    }
    .bar-txt{
        font-size: 23px;
        padding-top: 2px;
    }
</style>
