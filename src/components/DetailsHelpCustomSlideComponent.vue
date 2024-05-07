<template>
            <v-card
                variant="text"
                width="100%"
            >
                <v-card-text class="pa-0 title-card">
                    Мы поможем в любой ситуации
                </v-card-text>
                <v-list density="compact">
                    <v-list-item
                        v-for="(item, i) in text_list"
                        :key="i"
                        :value="item"
                        disabled 
                        class="pa-0"
                    >
                        <template v-slot:prepend>
                        <v-icon icon="mdi-circle-small"  width="10"></v-icon>
                        </template>

                        <v-list-item-subtitle class="pa-0 text-li">{{ item }}</v-list-item-subtitle>
                    </v-list-item>
                </v-list>
                <router-link to="/vue_proj_2/dist/services">
                    <v-btn :ripple="false" class="text-roboto red-text pa-0 fs17" variant="plain" >ПОДРОБНЕЕ</v-btn>
                </router-link>
            </v-card>
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
            <v-card
                variant="text"
                max-width="424px"
                min-width="200px"
                width="100%"
            >
                <v-img
                    src="./../assets/help-img1.png"
                    max-height="250px"
                    min-height="100px"
                    height="100%"
                    cover
                ></v-img>
                <v-card-text class="px-0 title-card">
                    Бизнесу
                </v-card-text>
                <v-card-text class="pa-0 text-roboto text-card">
                    Споры с госорганами,  корпоративные споры, споры из договоров, взыскание долгов с юридических лиц, судебные споры, и другие арбитражные дела.
                </v-card-text>
            </v-card>
        </swiper-slide>
        <swiper-slide>
            <v-card
                variant="text"
                max-width="424px"
                min-width="200px"
                width="100%"
            >
                <v-img
                    src="./../assets/help-img1.png"
                    max-height="250px"
                    min-height="100px"
                    height="100%"
                    cover
                ></v-img>
                <v-card-text class="px-0 title-card">
                    Физическим <br/> лицам
                </v-card-text>
                <v-card-text class="pa-0 text-roboto text-card">
                    Защита прав потребителей, наследство, недвижимость, представительство в суде, семейные споры, трудовые споры.
                </v-card-text>
            </v-card>
        </swiper-slide>
    <swiper-slide>
            <v-card
                variant="text"
                max-width="424px"
                min-width="200px"
                width="100%"
            >
            <v-img
                    src="./../assets/help-img3.png"
                    max-height="250px"
                    min-height="100px"
                    height="100%"
                    cover
                ></v-img>
                <v-card-text class="px-0 title-card">
                    Уголовные дела
                </v-card-text>
                <v-card-text class="pa-0 text-roboto text-card">
                    Досудебные проверки, защита на предварительном следствии, защита в суде, апелляционное обжалование, кассационное обжалование
                </v-card-text>
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
    props: ["text_list"],
    setup() {
      return {
        modules: [Pagination],
      };
    },
}
</script>
<style scoped>
    .title-card{
        font-size: 30px;
    } 
     
    .title-card.v-card-text {
        line-height: 2.25rem;
    }
    .text-card{
        color: grey;
    }
    .v-list{
        overflow: hidden;
    }
    
</style>