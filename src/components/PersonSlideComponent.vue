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
        <swiper-slide 
            
        v-for="person in infoPersons" :key="person.name">
            <v-card
                variant="text"
                max-width="424px"
                min-width="300px"
                width="100%"
                class="me-3"
            >
                <v-img
                    :src="`./${person.img}`"
                    max-height="250px"
                    min-height="200px"
                    height="100%"
                    cover
                ></v-img>
                <v-card-title class="px-0">
                    {{person.name}}
                </v-card-title>
                <v-card-text class="pa-0 post text-roboto">
                    {{person.post}}
                </v-card-text>
                <v-card-text class="px-0 text-roboto grey-darken-2 card-text" >
                    {{person.post_text}}
                </v-card-text>
                    <v-btn :ripple="false" 
                        link="true" 
                        href="https://ya.ru/" 
                        variant="plain" 
                        class="ps-0"
                        width="40">
                        <v-img src="./../assets/mail.svg"></v-img>
                    </v-btn>
                    <v-btn :ripple="false" 
                        link="true" 
                        href="https://ya.ru/" 
                        variant="plain" 
                        class="ps-0"
                        width="40">
                        <v-img src="./../assets/telegram.svg"></v-img>
                    </v-btn>
                    <v-btn :ripple="false" 
                        link="true" 
                        href="https://ya.ru/" 
                        variant="plain" 
                        class="ps-0"
                        width="40">
                        <v-img src="./../assets/whatsapp.svg"></v-img>
                    </v-btn>
            </v-card>
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
    props: ["infoPersons"],
    setup() {
      return {
        modules: [Pagination],
      };
    },
    
} 
</script>
<style>
    .swiper-slide .v-card{
        margin-right: 30px !important;
    }
    .swiper-slide:last-child .v-card{
        margin-right: 0px;
    }
    .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{
        margin: 0 var(--swiper-pagination-bullet-horizontal-gap,10px);
    }
    .swiper-pagination-bullet{
        border: 2px var(--black-legal) solid;
        width: 13px;
        height: 13px;
        background: transparent;
    }
    .swiper-pagination-bullet-active{
        background: transparent;
    }
    .swiper-pagination{
        position: relative !important;
        height: 40px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
</style>