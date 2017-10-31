<template>
    <div class="Top" @click="jump('/')">
      <image class="image" src="https://news.ycombinator.com/favicon.ico"></image>
  </div>
</template>

<style scoped>
  .top {
    position: relative;
    width: 750px;
    height: 250px;
    top: 35px;
    left: 35px;
    border-width: 3px;
    border-style: solid;
    border-color: #FFFFFF;
  }
  .image {
    width: 750px;
    height: 250px;
    top:10px;
  }
</style>
