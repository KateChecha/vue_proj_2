<template>
    <v-container class="my-5">
        <div class="card-container">
            
            <PersonNoSlideComponent :infoPersons="infoPersons"/>
            
        </div>
    </v-container>
</template>

<script setup>

import  PersonNoSlideComponent  from '@/components/PersonNoSlideComponent.vue'

</script>
<script>

export default { 
    
    data(){
        return{
            infoPersons: [
                {
                    img: "sz.png",
                    name: "Сергей Запольский",
                    post: "УПРАВЛЯЮЩИЙ ПАРТНЕР",
                    post_text: "Основатель и управляющий партнер адвокатского бюро «Запольский и партнеры», доктор юридических наук, профессор, заслуженный юрист Российской Федерации."
                },
                {
                    img: "ok.png",
                    name: "Ольга Киселева",
                    post: "АДВОКАТ, РУКОВОДИТЕЛЬ СУДЕБНО-АРБИТРАЖНОЙ ПРАКТИКИ",
                    post_text: "к.ю.н., эксперт в области гражданского права и арбитражного процесса, наследственных споров, страхования и недвижимости"
                },
            ],
            noSlide: true,
            slide: false
        }
    },
    
    methods: {
        
    }
} 
</script>

<style lang="css">
    .v-btn--size-default{
        min-width: 0;
    }
    .post{
        color: var(--red-legal);
    }
    
    .v-window__controls{
        padding: 0;
    }
    .v-card-title{
        font-size: 28px;
    }
    .card-text{
        font-size: 16px;
    }
    @media (max-width: 1920px) {
        .v-card{
            margin-right: 30px;
        }
        .v-card:last-child{
            margin-right: 0px;
        }
    }
    
</style>

<style scoped>
    .card-container{
        width: 100%;
        height: 100%;
        display: flex !important;
        align-items: start;
        justify-content: space-around;
    }
    @media (max-width: 650px){
        .card-container{
            flex-direction: column;
            align-items: center;
        }
    }
</style>
