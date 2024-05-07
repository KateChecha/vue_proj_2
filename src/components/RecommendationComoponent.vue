<template>
<div class="bg-carousel">
  <v-carousel
        hide-delimiter-background
        delimiter-icon="mdi-checkbox-blank-circle-outline"
        color="white"
        height="600"
        delimiter-icon-variant="plain"
        :cycle="false"
        class="carousel"
    >
    <template v-slot:prev="{ props }">
        <v-btn :ripple="false"
        v-if="resize"
            variant="text"
            @click="props.onClick"
        >
            <v-img src="./../assets/chevron-left.svg"></v-img>
        </v-btn>
    </template>
    <template v-slot:next="{ props }">
        <v-btn :ripple="false"
        v-if="resize"
            variant="text"
            @click="props.onClick"
        >
            <v-img src="./../assets/chevron-right.svg"></v-img>
        </v-btn>
    </template>
        <v-carousel-item
            cover
            class="img-filter"
            v-for="item in recommeneds"
            :key="item.name"
        >
            <v-container class="h-100 d-flex justify-center align-center text-center px-6 w-100">
                <div class="text-container">
                    <h2 class="text title-text">Рекомендации</h2>
                    <div>
                        <v-img 
                            src="./../assets/recommend-user.png"
                            class="img-user"
                        ></v-img>
                    </div>
                    <div class="d-flex justify-center align-center text-center">
                        <p class="text dot">«</p>
                        <h4 class="text">{{item.text}}</h4>
                        <p class="text dot">»</p>
                    </div>
                    <p class="text text-h6">{{ item.name }}</p>
                    <p class="text text-roboto pb-4 text-post">{{ item.post }}</p>
                </div>
            </v-container>
        </v-carousel-item>
    </v-carousel>
</div>
</template>

<script>
export default {
    data(){
        return{
            recommeneds: [
                {
                    text: 'Интеллигент всё-таки — это человек, который в первую очередь сомневается, и не стесняется своих сомнений и высказывания своей точки зрения, и ни в коем случае не лакей.',
                    name: 'Михаил Барщевский',
                    post: `Полномочный представитель Правительства  Российской Федерации в высших судебных  инстанциях`
                },
                {
                    text: 'Интеллигент всё-таки — это человек, который в первую очередь сомневается, и не стесняется своих сомнений и высказывания своей точки зрения, и ни в коем случае не лакей.',
                    name: 'Михаил Барщевский',
                    post: `Полномочный представитель Правительства  Российской Федерации в высших судебных  инстанциях`
                },
                {
                    text: 'Интеллигент всё-таки — это человек, который в первую очередь сомневается, и не стесняется своих сомнений и высказывания своей точки зрения, и ни в коем случае не лакей.',
                    name: 'Михаил Барщевский',
                    post: `Полномочный представитель Правительства  Российской Федерации в высших судебных  инстанциях`
                },
            ],
            resize: true,
        }
    },
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
    .bg-carousel{
        background: url(./../assets/bg-slide.png);
        background-size: cover;
    }
    h4.text{
        font-size: 28px;
        font-style: italic;
        font-weight: 400;
    }
    .dot{
        font-size: 40px;
        font-style: italic;
        font-weight: 400;
    }
    .img-user{
        border-radius: 50%;
    }
    h2.title-text{
        font-size: 40px;
    }
    p.text-roboto{
        font-size: 16px;
        color: grey;
    }
    .text-container{
        height: 95%;
        align-items: center;
    }
    .text-post{
        width: 400px;
    }
    p.text:nth-child(4){
        line-height: 10px;
        padding-top: 10px;
    }
    @media (max-width: 1110px) {
        .text-container{
            width: 100%;
        }
    }
    @media (max-width: 690px) {
        h4.text{
            font-size: 22px;
        }
        h2.title-text{
            font-size: 36px;
        }
    }
    @media (max-width: 450px) {
        h4.text{
            font-size: 18px;
        }
        .text-container{
            height: 100%;
        }
        p.text-roboto{
            font-size: 14px;
        }
        .bg-carousel{
            padding: 0 !important;
        }
        .text-post{
            width: auto;
        }
    }
</style>
