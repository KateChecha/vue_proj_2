<template>
    <v-container class="container-company">
        <p class="text-h3">Наши клиенты</p>
        <v-toolbar color="#F2F5F9" height="200px">
            <PartnersNoSlideComponent v-if="NoSlide"/>
            <PartnerSlideComponent v-if="Slide"/>
        </v-toolbar>
    </v-container>
    <v-layout>
        <v-footer class="footer">
            <v-container class="container-footer">
                <div class="d-flex justify-space-between align-start align-sm-center flex-column flex-sm-row">
                    <div>
                        <v-img src="./../assets/logo-white.svg" width="200"></v-img>
                    </div>
                    
                    <router-link to="/vue_proj_2/dist/contact">
                        <v-btn :ripple="false" rounded="xl" size="large" color="white" class="text-roboto my-2">Связаться</v-btn>
                    </router-link>
                </div>
                <div class="text-contact">
                    <p class="text text-roboto">Область юридической практики в области гражданских прав юридическая консультация — это применение абстрактных принципов права к конкретным фактам дела клиента.</p>
                    <p class="text text-roboto text-h6">Контакты</p>
                    <p class="text text-roboto ps-4">zpmoscow.com info@zpmoscow.com <br/>+7 499 460-00-99<br/> 125009, г. Москва,<br/> Бол. Кисловский пер.,<br/> д. 1, стр. 2, оф. 303</p>
                </div>
                <div class="d-flex justify-space-between  align-start align-sm-center flex-column flex-sm-row py-2">
                    <p class="text text-roboto">© 2023 Запольский и партнеры.</p>
                    <p class="text text-roboto">Политика обработки персональных данных.</p>
                </div>
            </v-container>
        </v-footer>
    </v-layout>
</template>

<script setup>
    import PartnersNoSlideComponent from '@/components/PartnersNoSlideComponent.vue'
    import PartnerSlideComponent from '@/components/PartnersSlideComponent.vue'
</script>

<script>
export default {
    data(){
        return{
            NoSlide: true,
            Slide: false,
        }
    },
    mounted() {
        window.addEventListener("resize", this.myEventHandler);
        if(window.innerWidth > 1110){
            this.NoSlide = true
            this.Slide = false
        }
        if(window.innerWidth < 1110){
            this.NoSlide = false
            this.Slide = true
        }
    },
    unmounted() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    methods: {
        myEventHandler(e) {
            if(window.innerWidth > 1110){
                this.NoSlide = true
                this.Slide = false
            }
            if(window.innerWidth < 1110){
                this.NoSlide = false
                this.Slide = true
            }
        }
    }
}
</script>
<style scoped>
    .container-company{
        height: 345px;
        background: #F2F5F9;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
    }
    .footer{
        background: var(--black-legal);
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .text-contact{
        display: grid;
        grid-template-columns: 230px 260px; 
        grid-column-gap: 10px;  
        padding-top: 20px; 
    }
    .text-contact .text:first-child{
        grid-row-start: 1;
        grid-row-end: 3;
    }
    .container-footer{
        height: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .text-h3{
        text-align: center;
    }
    @media (max-width: 599px) {
        .text-contact{
            grid-template-columns: 260px;
            grid-row-gap: 10px
        }
        .footer{
            height: auto;
        }
    }
</style>