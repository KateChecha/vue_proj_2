<template>
    <SwitchInServicesComponent  :switchStatus="switchStatus" v-on:clickTab="clickTab"/>
    <SwitchableServicesComponent :switchStatus="switchStatus"/>
</template>

<script setup>
    import SwitchInServicesComponent from "@/components/SwitchInServicesComponent.vue"
    import SwitchableServicesComponent from "@/components/SwitchableServicesComponent.vue"
    
</script>
<script>
    export default {
        data(){
            return {
                switchStatus: 'law'

            }
        },
        methods:{
            clickTab(e){
                this.switchStatus = e
                console.log(this.switchStatus);
            }
        },
        mounted(){
            window.scrollTo(0,0);
            if(localStorage.getItem("targetTab") != null){
                this.switchStatus = localStorage.getItem("targetTab")
                localStorage.removeItem("targetTab")
            }
        },
    }
</script>

<style>
    .card-container{
        width: 100%;
        height: 100%;
        display: grid !important;
        grid-template-columns: repeat(4, 1fr);
        align-items: start;
        justify-items: center;
    }
    @media (max-width: 1100px) {
        .card-container{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    @media (max-width: 650px){
        .card-container{
            grid-template-columns: 1fr;
        }
    }
</style>