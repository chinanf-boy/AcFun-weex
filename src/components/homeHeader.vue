<template>
<div>
  <div class="reload">
        
    
</div>
<div class="back">

</div>
  <div class="header">
    <div class="logo" @click="jump('/')">
      <image class="image" src="https://tse1-mm.cn.bing.net/th?id=OIP.PHb0y2KEfxpy2Otquk4_IAEsBg&p=0&pid=1.1"></image>
    </div>
    <div class="nav">
      <div class="link" @click="jump('/game')">
        <text class="title">G</text>
      </div>
      <div class="link" @click="jump('/download')">
        <text class="title">D</text>
      </div>
      <div class="link" @click="jump('/history')">
        <text class="title">H</text>
      </div>
      <div class="link" @click="jump('/search')">
        <text class="title">S</text>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
  .reload {
    position: relative;
    width: 750px;
    height: 100px;
  }
  .back{
    position: fixed;
    z-index: 99999;
    
    width: 750px;
    height: 100px;
    background-color: #fff;
  }
  .header {
    width: 750px;
    position: fixed;
    height: 100px;
    z-index: 99999;
    margin-bottom: 3px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
    background-color: rgba(255, 14, 14, 0.63);
  }
  .logo {
    position: absolute;
      height: 60px;
      width: 120px;
    bottom: 15px;
    border-width: 3px;
    border-style: solid;
    border-color: #FFFFFF;
  }
  .image {
    max-width: 120px;
    height: 60px;
  }
  .nav {
    display: flex;
    position: absolute;
    right: 5px;
    bottom: 15px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: right;
  }
  .link {
    padding-left: 25px;
    padding-right: 25px;
  }
  .title {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 32px;
    line-height: 44px;
    color: #FFFFFF;
  }
</style>
