<template>
    <HeaderComponent :thisPage="thisPage" v-on:clickHeader="clickHeader"/>
    <router-view />
    <FooterComponent :thisPage="thisPage"  v-on:clickHeader="clickHeader"/>
</template>

<script setup>
    import HeaderComponent from './components/HeaderComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue'
</script>
<script>
    export default {
        data(){
            return{
                thisPage: '',
            }
        },
        mounted(){
            this.thisPage = window.location.pathname.split('/')[1];
        },
        methods: {
            clickHeader(e){
                console.log(e);
                this.thisPage = e
            }
        }
    }
</script>
<style>
    :root{
        --red-legal: #C63527;
        --black-legal: #1D2022;
        --grey-legal: #989CA0;
        --grey-light-legal: #FAFAFA;
        --grey-intense-legal: #75787B;
    }
    .header{
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
    }
    .fs14{
        font-size: 14px;
    }
    .v-toolbar__content > .v-btn:last-child {
        margin-inline-end: 0px !important;
    }

    a {
        background-color: transparent;
        text-decoration: none;
        color: black;
    }
    .accordions-container{
        display: grid;
        grid-template-columns: 62% 36%;
        align-items: start;
        grid-column-gap: 40px;
        justify-items: center;
        padding: 30px 0;
    }
    
    .thisPage{
        color: var(--red-legal) !important;
    }
    input[type="checkbox"]{
        appearance: none;
        padding: 7px;
        background: url('./assets/checkbox-blank-outline.svg');
        background-repeat: no-repeat;
        background-position: center;
        height: 28px;
    }
    input[type="checkbox"]:checked{
        padding: 7px;
        background: url('./assets/checkbox.svg');
        background-repeat: no-repeat;
        background-position: center;
        height: 28px;
    }
    .text-acc{
        font-size: 26px !important;
    }
    @media (max-width: 1920px){
        .v-card {
            margin-right: 0px !important;
        }
    }
    @media (max-width: 1100px){
        .accordions-container {
            grid-template-columns: 100%;
            padding: 30px;
            grid-row-gap: 30px;
        }
    }
    @media (max-width: 650px){
        .accordions-container {
            padding: 0px;
        }
        .fs14{
            font-size: 12px;
        }
        .text-acc{
            font-size: 19px !important;
        }
    }
</style>
