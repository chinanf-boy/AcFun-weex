<template>
  <div @androidback="back">
    <router-view style="flex:1"></router-view>
    <tab-bottom />
  </div>
</template>

<script>
import tabBottom from "./components/tabBottom.vue";
  export default {
    components:{
      'tab-bottom': tabBottom
    },
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>
