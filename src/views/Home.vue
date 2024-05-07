<template>
        <SliderComponent  :slide="slide"/>
        <DetailsHelpComponent class="py-8" :style="{'border-bottom': '1px grey solid'}"/>
        <PrinciplesComponent class="py-8"/>
        <BannerComponent class="py-2"/>
        <CardPersonsComponent class="py-8" :style="{'border-bottom': '1px grey solid'}"/>
        <StepWorkComponent class="py-8"/>
        <FeedbackComponent/>
</template>

<script setup>
    import SliderComponent from "@/components/SliderComponent.vue"
    import CardPersonsComponent from "@/components/CardPersonsComponent.vue"
    import BannerComponent from '@/components/BannerComponent.vue'
    import DetailsHelpComponent from '@/components/DetailsHelpComponent.vue'
    import PrinciplesComponent from '@/components/PrinciplesComponent.vue'
    import StepWorkComponent from '@/components/StepWorkComponent.vue'
    import FeedbackComponent from '@/components/FeedbackComponent.vue'
</script>
<script>
    export default {
        data(){
            return {
                slide: [
                {
                    img: 'first-slide',
                    title: '«ЗАПОЛЬСКИЙ И ПАРТНЕРЫ»',
                    subtitle: 'адвокатское бюро',
                    text: 'Каждая правовая ситуация является уникальной и требует индивидуального подхода. Мы вкладываем все свои знания и опыт, чтобы найти наилучшее решение для каждого клиента.'
                },
                {
                    img: 'first-slide-company',
                    title: '«ЗАПОЛЬСКИЙ И ПАРТНЕРЫ»',
                    subtitle: 'адвокатское бюро',
                    text: 'Каждая правовая ситуация является уникальной и требует индивидуального подхода. Мы вкладываем все свои знания и опыт, чтобы найти наилучшее решение для каждого клиента.'
                },
                {
                    img: 'second-slide-company',
                    title: '«ЗАПОЛЬСКИЙ И ПАРТНЕРЫ»',
                    subtitle: 'адвокатское бюро',
                    text: 'Каждая правовая ситуация является уникальной и требует индивидуального подхода. Мы вкладываем все свои знания и опыт, чтобы найти наилучшее решение для каждого клиента.'
                },
            ]
            }
        },
        mounted(){
            window.scrollTo(0,0);
        },
    }
</script>

<style>
    .carousel .v-btn--active > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true] > .v-btn__overlay {
          opacity: 0 !important;
    }
    .carousel .v-btn__content{
        color: grey;
    }
    .carousel .v-btn--active .v-btn__content{
        color: white;
    }
    .mySwiper{
        height: 100vh;
    }
    
    html{
        overflow-y: scroll;
        scrollbar-color: var(--red-legal) #f3f3f3;
        scrollbar-width: thin;
    }
    body::-webkit-scrollbar {
        width: 5px;
    }
    body::-webkit-scrollbar-track {
        background: #f3f3f3;
    }
    
    body::-webkit-scrollbar-thumb {
        background: var(--red-legal);
    }
    
    body::-webkit-scrollbar-thumb:hover {
        background: var(--black-legal);
    }
    .v-card{
        border-radius: 0;
    }
    .text-black{
        color: var(--black-legal) !important;
    }
    .v-ripple__container {
        display:none !important;
    }
    .v-btn--variant-elevated{
        box-shadow: none;
    }
    .t-red{
        color: var(--red-legal);
    }
    @media (max-width: 1480px){
        .v-container {
            max-width: 90%;
        }
    }
    @media (max-width: 1280px){
        .v-container {
            max-width: 97% !important;
        }
    }
    @media (max-width: 960px){
        .v-container {
            max-width: 90%;
        }
    }
</style>