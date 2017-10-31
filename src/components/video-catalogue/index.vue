<template>
  <div>
    <catalogue-tttle></catalogue-tttle>
    <catalogue-images :imglist="imglist"></catalogue-images>
  </div>
</template>

<script>
import Title from "./catalogue-title.vue";
import images from "./catalogu-image-row.vue";
export default {
  data() {
    return {
      imglist: [
        {
          title: "",
          src:
            "http://yanxuan.nosdn.127.net/630439320dae9f1ce3afef3c39721383.jpg"
        },
        {
          title: "",
          src:
            "http://yanxuan.nosdn.127.net/5100f0176e27a167cc2aea08b1bd11d8.jpg"
        }
      ]
    };
  },
  components: {
    "catalogue-tttle": Title,
    "catalogue-images": images
  }
};
</script>
