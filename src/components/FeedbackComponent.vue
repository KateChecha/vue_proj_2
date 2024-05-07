<template>
    <div class="background">
        <v-container class="h-100">
            <div class="accordions-container">
                <div class="text-white">
                    <h2>Контакты для связи:</h2>
                    <p class="pt-2 text-h6">+7 (499) 460-09-99</p>
                    <p class="py-2 text-h6">+7 (495) 690-63-12</p>
                    <p class="text-h6">info@zpmoscow.com</p>
                </div>

                <div>
                    <h2 class="w">Мы поможем в любой <br class="br"/> ситуации</h2>
                    <p class="text-roboto w py-3">Мы работаем с физическими и юридическими лицами. Наша многолетняя практика включает все области права.  Ваше дело будет рассмотрено внимательно и профессионально.</p>
                    <div class="g-r">
                        <v-img src="./../assets/file.svg" :style="{'background-color': 'white', 'border-radius': '100px'}" class="pa-4 img"></v-img>
                        <p class="w text-dot">Мы обеспечим полную конфиденциальность</p>
                    </div>
                    <div class="g-r">
                        <v-img src="./../assets/person.svg" :style="{'background-color': 'white', 'border-radius': '100px'}" class="pa-4 img"></v-img>
                        <p class="w text-dot">Мы гарантируем индивидуальный подход</p>
                    </div>
                    <div class="g-r">
                        <v-img src="./../assets/time.svg" :style="{'background-color': 'white', 'border-radius': '100px'}" class="pa-3 img"></v-img>
                        <p class="w text-dot">Мы всегда на связи</p>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
    
</template>

<script setup>
    import FormFeedbackComponent from '@/components/FormFeedbackComponent.vue'
</script>

<style scoped>
    .background{
        width: 100%;
        height: 1100px;
        background-color: var(--red-legal);
    }
    
    
    a{
        color: black;
    }
    
    .w{
        color: white;
        width: 85%;
    }
    .g-r{
        display: grid;
        grid-template-columns: 130px 1fr;
        align-items: center;
        padding: 20px 0;
        width: 60%;
    }
    h2{
        font-size: 32px;
        font-weight: 400;
    }
    .text-dot{
        font-size: 20px;
    }
    
    .r{
        width: 50%;
    }
    .img{
        width: 98px;
        height: 98px;
    }
    .card{
        width: 580px;
    }
    .accordions-container{
        grid-template-columns: 47% 50%;
        align-items: center;
        height: 100%;
    }
    @media (max-width: 1450px) {
        .br{
            display: none;
        }
        .card{
            width: 100%;
        }
    }
    @media (max-width: 1100px) {
        .w{
            width: 100%;
        }
        .g-r{
            width: 100%;
        }
        .background{
            height: auto;
        }
        .c{
            flex-direction: column;
            padding: 50px 0;
        }
        .r{
            padding-top: 30px;
            width: 580px;
        }
        .img{
            width: 88px;
            height: 88px;
        }
        .g-r{
            grid-template-columns: 115px 1fr;
        }
        .accordions-container {
            grid-template-columns: 100%;
            padding: 30px;
            grid-row-gap: 30px;
        }
    }
    @media (max-width: 650px) {
        .r{
            width: 95%;
        }
        .img{
            width: 78px;
            height: 78px;
        }
        .g-r{
            grid-template-columns: 105px 1fr;
        }
        .text-dot{
            font-size: 18px;
        }
        .accordions-container {
            padding: 0px;
        }
    }
</style>

<style>
    .v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr, .v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start {
        border-radius: 2px 0 0 2px !important;
    }
    .v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr, .v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end {
        border-radius: 0 2px 2px 0 !important;
    }
    .v-selection-control__input:hover::before {
        opacity: 0 !important;
    }
    .v-selection-control{
        margin-bottom: 2px;
    }
    .g{
        display: grid;
        grid-template-columns: 55px 1fr;
        align-items: start;
    }
</style>