<template>
  <div>
      <home-header></home-header>
    <picslider :imageList="picsliderPic"></picslider>
  </div>
</template>

<script>
import homeHeader from "../components/homeHeader.vue";
import picslider from "../components/picslider.vue";

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
        { title: "", src: "http://imgs.aixifan.com/cms/2017_10_15/1508056721327.png?imageView2/1/w/508/h/260/q/100" },
        { title: "", src: "http://imgs.aixifan.com/cms/2017_10_15/1508056721327.png?imageView2/1/w/508/h/260/q/100" },
        { title: "", src: "http://imgs.aixifan.com/cms/2017_10_15/1508056721327.png?imageView2/1/w/508/h/260/q/100" },
        { title: "", src: "http://imgs.aixifan.com/cms/2017_10_15/1508056721327.png?imageView2/1/w/508/h/260/q/100" },
        { title: "", src: "http://imgs.aixifan.com/cms/2017_10_15/1508056721327.png?imageView2/1/w/508/h/260/q/100" }
      ]
    };
  },
  components: {
    "home-header": homeHeader,
    "picslider": picslider
  }
};
</script>
