<template>
  <swiper
        :spaceBetween="30"
        :watchSlidesProgress="true"
        :pagination="{
            clickable: true,
        }"
        :modules="modules"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="{
            800: {
                slidesPerView: 2.5,
            },
            650: {
                slidesPerView: 2,
            },
            450: {
                slidesPerView: 1.5,
            },
            300: {
                slidesPerView: 1,
            },
        }"
    >
        <swiper-slide>
            <v-img src="./../assets/company-1.svg"></v-img>
        </swiper-slide>
        <swiper-slide>
            <v-img src="./../assets/company-2.svg"></v-img>
        </swiper-slide>
        <swiper-slide>
            <v-img src="./../assets/company-3.svg"></v-img>
        </swiper-slide>
        <swiper-slide>
            <v-img src="./../assets/company-4.svg"></v-img>
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from 'swiper/core';

export default { 
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
    
} 
</script>
