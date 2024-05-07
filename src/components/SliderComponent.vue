<template>
    <v-carousel
        hide-delimiter-background
        delimiter-icon="mdi-checkbox-blank-circle-outline"
        color="white"
        height="500"
        delimiter-icon-variant="plain"
        :cycle="true"
        class="carousel"
    >
    <template v-slot:prev="{ props }">
        <v-btn :ripple="false"  v-if="resize"
            variant="plain"
            @click="props.onClick"
        >
            <v-img src="./../assets/chevron-left.svg"></v-img>
        </v-btn>
    </template>
    <template v-slot:next="{ props }">
        <v-btn :ripple="false"  v-if="resize"
            variant="plain"
            @click="props.onClick"
        >
            <v-img src="./../assets/chevron-right.svg"></v-img>
        </v-btn>
    </template>
        <v-carousel-item
            v-for="item in slide" :key="item.img"
            :src="`./${item.img}.png`"
            cover
            class="img-filter"
        >
            <v-container class="h-100 d-flex align-center justify-md-start px-6 w-100">
                <div class="text-container">
                    <h2 class="text title-text">{{item.title}}</h2>
                    <h4 class="text text-roboto">{{item.subtitle}}</h4>
                    <p class="text text-roboto py-4">{{item.text}}</p>
                    <div>
                        
                        <router-link to="/vue_proj_2/dist/contact">
                            <v-btn :ripple="false" 
                            rounded="xl" 
                            size="large" 
                            class="text-roboto me-8 btn"
                            ><span class="text-black">Связаться</span></v-btn>
                        </router-link>
                        <router-link to="/vue_proj_2/dist/services">
                            <v-btn :ripple="false" rounded="xl" size="large" variant="outlined" color="white" class="text-roboto btn my-2"><span class="text-white">Посмотреть услуги</span></v-btn>
                        </router-link>
                    </div>
                </div>
            </v-container>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data(){
        return{
            resize: true,
        }
    },
    props: ["slide"],
    mounted() {
        window.addEventListener("resize", this.myEventHandler);
        if(window.innerWidth > 1110){
            this.resize = true
        }
        if(window.innerWidth < 1110){
            this.resize = false
        }
    },
    unmounted() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    methods: {
        myEventHandler(e) {
            if(window.innerWidth > 1110){
                this.resize = true
            }
            if(window.innerWidth < 1110){
                this.resize = false
            }
        }
    }
}
</script>
<style scoped>

    p.text-roboto{
        font-size: 16px;
        width: 60%;
    }
    .text-container{
        padding-left: 40px;
    }
    @media (max-width: 1110px) {
        p.text-roboto{
            width: 100%;
        }
        .text-container{
            padding-left: 0px;
        }
    }
</style>
<style>
    .text-container{
        width: 80%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .text{
        color: white;
    }
    .text-roboto{
        font-family: 'Roboto', sans-serif !important;
    }
    .title-text{
        font-size: 55px;
        font-weight: 400; 
        white-space: nowrap;
        line-height: 40px;
    }
    h4.text-roboto{
        font-size: 31px;
        font-weight: 400;
    }
    

    @media (max-width: 1110px) {
        .title-text{
            white-space: normal;
            line-height: normal;
            font-size: 50px;
        }
    }
    @media (max-width: 748px) {
        .title-text{
            font-size: 46px;
        }
        h4.text-roboto{
            font-size: 27px;
        }
        .text-container{
            width: 100%;
        }
    }
    @media (max-width: 510px) {
        .title-text{
            font-size: 40px;
        }
        h4.text-roboto{
            font-size: 20px;
        }
    }
</style>
