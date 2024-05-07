<template>
        <v-card
            class="pa-3"
            variant="text"
            max-width="424px"
            min-width="200px"
            width="100%"
            v-for="person in infoPersons" :key="person.name"
        >
        
    <router-link to="/vue_proj_2/dist/info" @click="toInfoPerson(person)">
            <v-img
                :src="`./${person.img}`"
                max-height="250px"
                min-height="100px"
                height="100%"
                cover
            ></v-img>
            <v-card-title class="px-0 card-title">
                {{person.name}}
            </v-card-title>
            <v-card-text class="pa-0 post text-roboto">
                {{person.post}}
            </v-card-text>
            <v-card-text class="px-0 text-roboto grey-darken-2 card-text" >
                {{person.post_text}}
            </v-card-text>
                <v-btn :ripple="false" 
                    link="true" 
                    variant="plain" 
                    class="ps-0"
                    width="40">
                    <v-img src="./../assets/mail.svg"></v-img>
                </v-btn>
                <v-btn :ripple="false" 
                    link="true" 
                    variant="plain" 
                    class="ps-0"
                    width="40">
                    <v-img src="./../assets/telegram.svg"></v-img>
                </v-btn>
                <v-btn :ripple="false" 
                    link="true" 
                    variant="plain" 
                    class="ps-0"
                    width="40">
                    <v-img src="./../assets/whatsapp.svg"></v-img>
                </v-btn>
                
            </router-link>
        </v-card>
</template>

<script>


export default { 
    props: ["infoPersons"],
    methods: {
        toInfoPerson(person){
            localStorage.setItem("personImg", person.img);
        }
    }
} 
</script>

<style lang="css" scoped>
    @media (max-width: 1392px) {
        .card-text{
            font-size: 14px;
        }
        .card-title{
            font-size: 24px;
        }
    }
    @media (max-width: 1237px){
        .card-title{
            font-size: 20px;
        }
    }
</style>
