<template>
            <v-card
                class="pa-3"
                variant="text"
                max-width="424px"
                min-width="200px"
                width="100%"
            >
                <v-card-text class="pa-0 title-card">
                    Мы поможем в любой ситуации
                </v-card-text>
                <ul>
                    <li v-for="(item, i) in text_list" :key="i">{{ item }}</li>
                </ul>
                
                <router-link to="/vue_proj_2/dist/services">
                    <v-btn :ripple="false" class="text-roboto red-text pa-0 fs17" variant="plain" >ПОДРОБНЕЕ</v-btn>
                </router-link>
            </v-card>
            
        <router-link to="/vue_proj_2/dist/services">
            <v-card
                @click="target('law')"
                class="pa-3"
                variant="text"
                max-width="424px"
                min-width="200px"
                width="100%"
            >
                <v-img
                    src="./../assets/help-img1.png"
                    max-height="250px"
                    min-height="100px"
                    height="100%"
                    cover
                ></v-img>
                <v-card-text class="px-0 title-card">
                    Бизнесу
                </v-card-text>
                <v-card-text class="pa-0 text-roboto text-card">
                    Споры с госорганами,  корпоративные споры, споры из договоров, взыскание долгов с юридических лиц, судебные споры, и другие арбитражные дела.
                </v-card-text>
            </v-card>
        </router-link>
        
        <router-link to="/vue_proj_2/dist/services">
            <v-card
                @click="target('individ')"
                class="pa-3"
                variant="text"
                max-width="424px"
                min-width="200px"
                width="100%"
            >
                <v-img
                    src="./../assets/help-img1.png"
                    max-height="250px"
                    min-height="100px"
                    height="100%"
                    cover
                ></v-img>
                <v-card-text class="px-0 title-card">
                    Физическим лицам
                </v-card-text>
                <v-card-text class="pa-0 text-roboto text-card">
                    Защита прав потребителей, наследство, недвижимость, представительство в суде, семейные споры, трудовые споры.
                </v-card-text>
            </v-card>
        </router-link>
        
        <router-link to="/vue_proj_2/dist/services">
            <v-card
                @click="target('criminal')"
                class="pa-3"
                variant="text"
                max-width="424px"
                min-width="200px"
                width="100%"
            >
            <v-img
                    src="./../assets/help-img3.png"
                    max-height="250px"
                    min-height="100px"
                    height="100%"
                    cover
                ></v-img>
                <v-card-text class="px-0 title-card">
                    Уголовные дела
                </v-card-text>
                <v-card-text class="pa-0 text-roboto text-card">
                    Досудебные проверки, защита на предварительном следствии, защита в суде, апелляционное обжалование, кассационное обжалование
                </v-card-text>
            </v-card>
        </router-link>
</template>

<script>
export default {
    props: ["text_list"],
    methods: {
        target(click){
            localStorage.setItem("targetTab", click);
        }
    }
}
</script>
<style>
    .text-card{
        color: grey;
    }
    .v-card:hover > .v-card__overlay {
        opacity: 0;
    }
</style>
<style scoped>
    .title-card{
        font-size: 30px;
    } 
     
    .title-card.v-card-text {
        line-height: 2.25rem;
    }
    
    .v-list{
        overflow: hidden;
    }
    
    ul{
        padding: 10px 30px;
        color: var(--grey-intense-legal);
    }
    li::marker {
        font-size: 15px;
        padding-bottom: 2px;
    }
    
    @media (max-width: 1100px) {
        
        .title-card{
            font-size: 24px;
        } 
        li{
            font-size: 14px;
        }
    }
</style>