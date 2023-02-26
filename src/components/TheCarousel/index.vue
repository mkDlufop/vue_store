<template>
  <div>
    <div class="swiper-container" ref="mySwiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(carousel, index) in list"
          :key="carousel.id"
        >
          <img :src="carousel.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"; // 引包
import "swiper/css/swiper.min.css"; // 引入 Swiper 的样式

export default {
  name: "TheCarousel",
  props: [ "list" ],
  watch: {
    list: {
      immediate: true,
      handler() {
        // 只有在页面结构加载完整后，new 一个 Swiper 实例才可以实现轮播图的效果，否则会没有效果。
        // 为了解决该问题，[可以把 new 的过程放在一个定时器里]或者[使用 watch + nextTick]。
        //    nextTick: 在下次 DOM 更新 循环结束 之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
        this.$nextTick(() => {
          // 当页面结构加载完整后，new一个Swiper实例用来控制轮播图
          var mySwiper = new Swiper(this.$refs.mySwiper, {
            direction: "horizontal", // 设置轮播图方向
            loop: true, // 开启循环模式
            pagination: {
              // 分页器
              el: ".swiper-pagination",
              type: "bullets", // 分页器类型
              clickable: true, // 点击分页器切换图片
            },
            navigation: {
              // 前进后退按钮
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
              // 自动轮播
              delay: 2000,
              //新版本的写法：目前是5版本
              // pauseOnMouseEnter: true,
              //如果设置为true，当切换到最后一个slide时停止自动切换
              stopOnLastSlide: true,
              //用户操作swiper之后，是否禁止autoplay
              disableOnInteraction: false,
            },
            // effect: "cube", // 切换效果
          });
          //鼠标进入停止轮播
          mySwiper.el.onmouseover = function() {
            mySwiper.autoplay.stop();
          };
          //鼠标离开开始轮播
          mySwiper.el.onmouseout = function() {
            mySwiper.autoplay.start();
          };
        });
      },
    },
  },
};
</script>