<template>
  <div>
      <home-header></home-header>
    <picslider :imageList="picsliderPic"></picslider>
  <catalogue-video :imglist='topvideo' :title={好啊}> </catalogue-video>
    <top></top>
  </div>

</template>

<script>
import homeHeader from "../components/homeHeader.vue";
import picslider from "../components/picslider.vue";
import catalogueVideo from "../components/video-catalogue.vue";
import top from "../components/Top.vue";


export default {
  data() {
    return {
      picsliderPic: [
        {
          title: "",
          src:
            "http://imgs.aixifan.com/cms/2017_10_15/1508056721327.png?imageView2/1/w/508/h/260/q/100"
        },
        {
          title: "",
          src:
            "http://imgs.aixifan.com/cms/2017_10_15/1508056721327.png?imageView2/1/w/508/h/260/q/100"
        },
        { title: "", src: "http://doc.zwwill.com/yanxuan/imgs/banner-2.jpg" },
        { title: "", src: "http://doc.zwwill.com/yanxuan/imgs/banner-4.jpg" },
        { title: "", src: "http://doc.zwwill.com/yanxuan/imgs/banner-5.jpg" },
        { title: "", src: "http://doc.zwwill.com/yanxuan/imgs/banner-6.jpg" }
      ],
      topvideo: [
        { title: "", src: "http://doc.zwwill.com/yanxuan/imgs/banner-2.jpg" },
        { title: "", src: "http://doc.zwwill.com/yanxuan/imgs/banner-4.jpg" },
        { title: "", src: "http://doc.zwwill.com/yanxuan/imgs/banner-5.jpg" },
        { title: "", src: "http://doc.zwwill.com/yanxuan/imgs/banner-6.jpg" }
      ]
    };
  },
  components: {
    "home-header": homeHeader,
    "picslider": picslider,
    "catalogue-video": catalogueVideo,
    "top": top
  }
};
</script>
