<template>
        <v-card :style="{'border-bottom': '1px var(--grey-legal) solid'}"  class="header">
            <v-container class="py-0" >
                    <v-toolbar color="white"
                        height="73"
                        prominent
                    > 
                    <div>
                        <v-img
                            src="./../assets/logo.svg"
                            class="img"
                        >
                        </v-img>
                    </div>
                        <v-spacer v-if="resize"></v-spacer>
                            <router-link to="/vue_proj_2/dist/">
                                <v-btn :ripple="false" 
                                v-if="resize"
                                variant="plain"
                                height="100%"
                                class="text-menu"
                                @click="clickPage('')"
                                >
                                    Главная
                                </v-btn>
                            </router-link>
                            <router-link to="/vue_proj_2/dist/company-info">
                                <v-btn :ripple="false" 
                                v-if="resize"
                                variant="plain"
                                height="100%"
                                class="text-menu"
                                @click="clickPage('company-info')"
                                >
                                    О бюро
                                </v-btn>
                            </router-link>
                            <router-link to="/vue_proj_2/dist/services">
                                <v-btn :ripple="false"
                                v-if="resize"
                                variant="plain"
                                height="100%"
                                class="text-menu"
                                @click="clickPage('services')"
                                >
                                    Услуги
                                </v-btn>
                            </router-link>
                            <router-link to="/vue_proj_2/dist/team">
                                <v-btn :ripple="false"
                                v-if="resize"
                                variant="plain"
                                height="100%"
                                class="text-menu"
                                @click="clickPage('team')"
                                >
                                    Команда
                                </v-btn>
                            </router-link>
                            <router-link to="/vue_proj_2/dist/processes">
                                <v-btn :ripple="false"
                                v-if="resize"
                                variant="plain"
                                height="100%"
                                class="text-menu"
                                @click="clickPage('processes')"
                                >
                                    Процессы
                                </v-btn>
                            </router-link>
                            <router-link to="/vue_proj_2/dist/faq">
                                <v-btn :ripple="false"
                                v-if="resize"
                                variant="plain"
                                height="100%"
                                class="text-menu"
                                @click="clickPage('faq')"
                                >
                                    FAQ
                                </v-btn>
                            </router-link>
                            <router-link to="/vue_proj_2/dist/contact">
                                <v-btn :ripple="false"
                                v-if="resize"
                                variant="plain"
                                height="100%"
                                class="text-menu"
                                @click="clickPage('contact')"
                                >
                                    Контакты
                                </v-btn>
                            </router-link>
                            <v-spacer></v-spacer>
                            <div class="red-text d-flex align-center p">
                                <v-img width="26" src="./../assets/clockwise.svg"></v-img>
                                <div class="pl-2">
                                    <b class="phone">+7 (499) 460-09-99</b>
                                    <br>
                                    <b class="phone">+7 (495) 690-63-12</b>
                                </div>
                            </div>
                    
                            <v-btn
                            v-if="burger"
                                :icon="openMenu ? iconMenuCross : iconMenu"
                                icon-size="40"
                                class="ps-3"
                                variant="plain"
                                @click="switchMenu"
                            >

                            </v-btn>
                    </v-toolbar>
            </v-container>
            <v-expand-transition>
            <div 
            v-show="openMenu">
                <v-container>
                    <div>
                        <router-link to="/vue_proj_2/dist/"
                                @click="switchMenu">
                                <p class="text-menu brdr py-3"
                                @click="clickPage('')">
                                    Главная
                                </p>
                            </router-link>
                            <router-link to="/vue_proj_2/dist/company-info"
                                @click="switchMenu">
                                <p class="text-menu brdr py-3"
                                @click="clickPage('company-info')">
                                    О бюро
                                </p>
                            </router-link>
                            <router-link to="/vue_proj_2/dist/services"
                                @click="switchMenu">
                                <p class="text-menu brdr py-3"
                                @click="clickPage('services')">
                                    Услуги
                                </p>
                            </router-link>
                            <router-link to="/vue_proj_2/dist/team"
                                @click="switchMenu">
                                <p class="text-menu brdr py-3"
                                @click="clickPage('team')">
                                    Команда
                                </p>
                            </router-link>
                            <router-link to="/vue_proj_2/dist/processes"
                                @click="switchMenu">
                                <p class="text-menu brdr py-3"
                                @click="clickPage('processes')">
                                    Процессы
                                </p>
                            </router-link>
                            <router-link to="/vue_proj_2/dist/faq"
                                @click="switchMenu">
                                <p class="text-menu brdr py-3"
                                @click="clickPage('faq')">
                                    FAQ
                                </p>
                            </router-link>
                            <router-link to="/vue_proj_2/dist/contact"
                                @click="switchMenu">
                                <p class="text-menu py-3"
                                @click="clickPage('contact')">
                                    Контакты
                                </p>
                            </router-link>
                    </div>
                </v-container>
            </div>
        </v-expand-transition>
        </v-card>
        
        
</template>

<script>
    export default {
        props: ['thisPage'],
        data(){
            return{
                resize: true,
                burger: false,
                openMenu: false,
                defaultHeightHeader: 73,
                menuHeightHeader: 500,
                iconMenu: "mdi-menu",
                iconMenuCross: "mdi-window-close"
            }
       },
        mounted() {
            window.addEventListener("resize", this.myEventHandler);
            if(window.innerWidth > 1110){
                this.resize = true
                this.burger = false
            }
            if(window.innerWidth <= 1110){
                if(window.innerWidth <= 693){
                    this.resize = false
                    this.burger = true
                }
                if(window.innerWidth >= 693){
                    this.resize = false
                    this.phone = false
                    this.burger = true
                }
            }
        },
        unmounted() {
            window.removeEventListener("resize", this.myEventHandler);
        },
        methods: {
            myEventHandler(e) {
                if(window.innerWidth > 1110){
                    this.resize = true
                    this.phone = true
                    this.burger = false
                    this.openMenu = false
                }
                if(window.innerWidth <= 1110){
                    this.resize = false
                    this.phone = true
                    this.burger = true
                }
                if(window.innerWidth <= 693){
                    this.resize = false
                    this.phone = false
                    this.burger = true
                }
            },
            switchMenu(){
                this.openMenu = !this.openMenu
            },

            clickPage(e){
                this.$emit('clickHeader', e)
                window.scrollTo(0,0);
            }
        }
    }
</script>
<style scoped>
    
    .v-btn--variant-plain {
        opacity: 1;
    }
    .phone{
        font-size: 18px;
    }
    .text-menu{
        font-size: 14px !important;
        transition: 0.4s;
    }
    .text-menu:hover{
        color: var(--red-legal) !important;
    }
    .img{
        width: 190px;
    }
    .brdr{
        border-bottom: 1px var(--grey-legal) solid;
    }
    .time{
        position: absolute;
        top: 57px;
        right: 0px;
    }
    @media (max-width: 1270px) {
        .phone{
            font-size: 15px;
        }  
        .text-menu{
            font-size: 13px !important;
        }
        .img{
            width: 140px;
        }
    }
    @media (max-width: 1110px) {
        
        .text-menu{
            font-size: 20px !important;
        }
        .time{
            right: 38px;
        }
    }
    @media (max-width: 650px) {
        .p{
            display: none !important;
        } 
    }
</style>

<style>
    .red-text{
        color: var(--red-legal) !important;
    }
    .router-link-active{
        color: var(--red-legal)
    }
</style>
