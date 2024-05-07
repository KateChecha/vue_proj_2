<template>
    <v-container class="my-3">
        <div class="card-container" :style="styleContainer">
            <DetailsHelpNoSlideComponent :text_list="text_list" v-if="NoSlide"/>
        </div>
    </v-container>
</template>

<script setup>

import  DetailsHelpNoSlideComponent  from '@/components/DetailsHelpNoSlideComponent.vue'

</script>

<script>
export default {
    data(){
        return{
            NoSlide: true,
            Slide: false,
            CustomSlide: false,
            styleContainer: "display: flex",
            text_list: ['Уголовное право','Разрешение споров','Банкротство', 'Защита репутации','Семейное право','Цифровое право и киберпреступления','Наследственные споры и наследование','Корпоративные клиенты']
        }
    },
    methods: {
    }
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
<style>
    .v-list-item__prepend{
        width: 30px !important;
    }
    .v-list-item--disabled{
        opacity: 1 !important;
    }
    .v-list-item--density-compact.v-list-item--one-line{
        min-height: 0 !important;
    }
    .v-list-item-subtitle{
        opacity: 1 !important;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .v-btn--variant-plain {
        opacity: 1;
    }
    .fs17{
        font-size: 17px;
    }
    .v-list-item__content{
        color: grey;
    } 
    @media (max-width: 1900px) {
        .test1{
            display: block;
        }
        .test2{
            display: none;
        }
        .test3{
            display: none;
        }
    }
    @media (max-width: 1110px) {
        .test1{
            display: none;
        }
        .test2{
            display: block;
        }
        .test3{
            display: none;
        }
    }
    @media (max-width: 693px) {
        .test1{
            display: none;
        }
        .test2{
            display: none;
        }
        .test3{
            display: block;
        }
    }
</style>
