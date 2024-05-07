<template>
    <v-layout>
        <v-footer class="footer">
            <v-container class="container-footer">
                <div class="footer-cont">
                    <div>
                        <v-img src="./../assets/logo-white.svg" class="img"></v-img>
                    </div>
                    <div class="m footer-text">
                        <router-link to="/vue_proj_2/dist/" class="text-center">
                            <v-btn :ripple="false" 
                            variant="plain"
                            height="100%"
                            class="text-subtitle-1"
                            @click="clickPage('')"
                            >
                                <p>Главная</p>
                            </v-btn>
                        </router-link>
                        <router-link to="/vue_proj_2/dist/company-info" class="text-center">
                            <v-btn :ripple="false" 
                            variant="plain"
                            height="100%"
                            class="text-subtitle-1"
                            @click="clickPage('company-info')"
                            >
                                <p>О бюро</p>
                            </v-btn>
                    </router-link>
                    <router-link to="/vue_proj_2/dist/services" class="text-center">
                        <v-btn :ripple="false"
                        variant="plain"
                        height="100%"
                        class="text-subtitle-1"
                        @click="clickPage('services')"
                        >
                            <p>Услуги</p>
                        </v-btn>
                    </router-link>
                    <router-link to="/vue_proj_2/dist/team" class="text-center">
                        <v-btn :ripple="false"
                        variant="plain"
                        height="100%"
                        class="text-subtitle-1"
                        @click="clickPage('team')"
                        >
                            <p>Команда</p>
                        </v-btn>
                    </router-link>
                    <router-link to="/vue_proj_2/dist/processes" class="text-center">
                        <v-btn :ripple="false"
                        variant="plain"
                        height="100%"
                        class="text-subtitle-1"
                        @click="clickPage('processes')"
                        >
                            <p>Процессы</p>
                        </v-btn>
                    </router-link>
                    <router-link to="/vue_proj_2/dist/FAQ" class="text-center">
                        <v-btn :ripple="false"
                        variant="plain"
                        height="100%"
                        class="text-subtitle-1"
                        @click="clickPage('faq')"
                        >
                            <p>FAQ</p>
                        </v-btn>
                    </router-link>
                    <router-link to="/vue_proj_2/dist/contact" class="text-center">
                        <v-btn :ripple="false"
                        variant="plain"
                        height="100%"
                        class="text-subtitle-1"
                        @click="clickPage('contact')">
                            <p>Контакты</p>
                        </v-btn>
                    </router-link>
                    </div>
                    <p class="phone text-white">+7 499 460-00-99</p>
                </div>
                
                <router-link to="/vue_proj_2/dist/contact">
                    <div class="btn">
                        <v-btn :ripple="false" rounded="xl" color="white" class="text-roboto my-2 b">Связаться</v-btn>
                    </div>
                </router-link>
                <div class="c-text">
                    <div class="d-text">
                        <p class="text-roboto text">Политика обработки персональных данных.</p>
                        <p class="text-roboto text">© 2023 Запольский и партнеры.</p>
                    </div>
                    <div class="d-text">
                        <p class="text-roboto text text-right">Адрес бюро: 125009, г. Москва,</p>
                        <p class="text-roboto text text-right">Бол. Кисловский пер., д. 1, стр. 2, оф. 303</p>
                    </div>
                </div>
                <p class="disclaimer">Сведения и материалы, размещенные на сайте <a href="www.zpmoscow.com">www.zpmoscow.com</a>, подготовлены исключительно в информационных целях и не являются юридической консультацией или заключением и не являются юридической консультацией по какому-либо вопросу.  Адвокатское бюро «Запольский и партнеры», его руководство, адвокаты и сотрудники не могут гарантировать применимость такой информации в вашей ситуации и не несут ответственности за ваши решения и связанные с ними возможные прямые или косвенные потери и/или ущерб, возникшие в результате использования информации или какой-либо ее части, содержащейся на сайте <a href="www.zpmoscow.com">www.zpmoscow.com</a>.</p>
            </v-container>
        </v-footer>
    </v-layout>
</template>

<script setup>
</script>

<script>
export default {
    props: ['thisPage'],
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
        },
        
        clickPage(e){
            this.$emit('clickHeader', e)
            window.scrollTo(0,0);
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
        height: 400px;
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
        justify-content: space-between;
    }
    .text-h3{
        text-align: center;
    }
    .img{
        width: 200px;
    }
    .phone{
        font-size: 18px;
    }
    .footer-cont {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 250px;
    }
    .btn{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        height: 150px;
        align-items: center;
    }
    .c-text{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .disclaimer{
        font-size: 10px;
        color: white;
        text-align: center;
        padding-top: 10px;
    }
    .disclaimer a{
        color: white;
    }
    .footer-text a{
        color: white;
    }
    .footer-text .router-link-active{
        color: var(--red-legal);
    }
    @media (max-width: 1270px) {
        .img{
            width: 140px;
        }
        .phone{
            font-size: 18px;
        }
    }
    @media (max-width: 1100px) {
        .img{
            width: 250px;
        }
        .phone{
            display: none;
        }
        .footer-cont{
            flex-direction: column;
            align-items: flex-start;
        }
        .btn{
            justify-content: flex-start;
        }
        .b{
            width: 30%;
        }
        .d-text{
            display: flex;
            font-size: 14px;
        }
        .c-text{
            flex-direction: column-reverse;
        }
        .footer{
            height: 500px;
        }
    }
    @media (max-width: 650px) {
        
        .footer{
            height: 680px;
        }
        .img{
            width: 170px;
        }
        .m{
            display: grid;
        }
        .b {
            width: 100%;
        }
        .d-text{
            flex-direction: column;
            align-items: center;
            padding-bottom: 10px;
        }
        .footer-cont{
            align-items: center;
        }
        .v-footer{
            padding: 0 !important;
        }
    }
</style>