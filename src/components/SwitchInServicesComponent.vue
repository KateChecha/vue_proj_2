<template>
    <v-card class="switchable">
            <v-container class="py-0 my-2">
                <v-toolbar color="white"
                    height="73"
                > 
                <div class="noAd">
                    <button
                        :class="switchStatus == 'law' ? 'btn-switch-true' : 'btn-switch'"
                        @click="clickTab('law','')"
                    >
                        <p>Юридическим лицам</p>
                    </button>
                    <button
                        :class="switchStatus == 'individ' ? 'btn-switch-true' : 'btn-switch'"
                        @click="clickTab('individ','')"
                    >
                        <p>Физическим лицам</p>
                    </button>
                    <button
                        :class="switchStatus == 'criminal' ? 'btn-switch-true' : 'btn-switch'"
                        @click="clickTab('criminal','')"
                    >
                        <p>Уголовные дела</p>
                    </button>
                    <div class="bb"></div>
                </div>
                <div class="ad h-100">
                    <div class="thisPoing">
                        <p>{{ changeMenuName(switchStatus) }}</p>
                        <v-btn
                            :icon="openMenu ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                            icon-size="40"
                            class="ps-3"
                            variant="plain"
                            @click="openMenu = !openMenu"
                        >
                        </v-btn>
                    </div>
                </div>
                </v-toolbar>
                    <v-expand-transition>
                        <div v-show="openMenu">
                            <p class="mtext" @click="clickTab('law', 'Юридическим лицам')" :class="switchStatus == 'law' ? 'd-none' : ''">Юридическим лицам</p>
                            <p class="mtext" @click="clickTab('individ', 'Физическим лицам')" :class="switchStatus == 'individ' ? 'd-none' : ''">Физическим лицам</p>
                            <p class="mtext" @click="clickTab('criminal', 'Уголовные дела')" :class="switchStatus == 'criminal' ? 'd-none' : ''">Уголовные дела</p>
                        </div>
                    </v-expand-transition>
            </v-container>
        </v-card>
        
</template>

<script setup>
</script>

<script>
    export default {
        props: ['switchStatus'],
        data(){
            return{
                openMenu: false,
                tabInMenu: 'law',
                tabInMenuText: "Юридическим лицам",
            }
        },
        mounted() {
            window.addEventListener("resize", this.myEventHandler);
            // this.tabInMenu ='law'
            // this.tabInMenuText = "Юридическим лицам"
            
            console.log(localStorage.getItem("targetTab"));
        },
        unmounted() {
            window.removeEventListener("resize", this.myEventHandler);
        },
        methods: {
            myEventHandler(e) {
                if(window.innerWidth > 1110){
                    this.openMenu = false
                }
            },
            clickTab(text, textRU){
                this.tabInMenu = text
                this.tabInMenuText = this.changeMenuName(text)
                this.$emit('clickTab', text)
                
                if(textRU != ''){
                    this.openMenu = !this.openMenu
                }
            },
            changeMenuName(switchStatus){
                let viewText = ''
                if(switchStatus == 'law'){
                    viewText = 'Юридическим лицам'
                } else if(switchStatus == 'individ'){
                    viewText = 'Физическим лицам'
                } else if(switchStatus == 'criminal') {
                    viewText = 'Уголовные дела'
                } else {
                    viewText = 'Юридическим лицам'
                }
                return viewText
            }
        }
    }
</script>
<style>
    .switchable{
        position: sticky;
        top: 74px;
        z-index: 99;
    }
</style>
<style scoped>
    .bb{
        max-width: 60%;
        height: 100%;
        width: 100%;
        border-bottom: 1px var(--grey-legal) solid;
        min-width: 20%;
    }
    .btn-switch{
        position: relative;
        height: 100%;
        border-bottom: 1px var(--grey-legal) solid;
        width: 330px;
        transition: 0.5s;
    }
    .btn-switch p,
    .btn-switch-true p{
        width: fit-content;
        transition: 0.5s;
    }
    .btn-switch::after{
        transition: 0.5s;
    }
    .btn-switch:hover::after{
        content: '';
        position: absolute;
        height: 4px;
        bottom: -3px;
        left: 0;
        background: var(--red-legal);
        z-index: 100;
    }
    .btn-switch:nth-child(1):hover::after,
    .btn-switch-true:nth-child(1)::after{
        width: 170px;
    }
    .btn-switch:nth-child(2):hover::after,
    .btn-switch-true:nth-child(2)::after{
        width: 150px;
    }
    .btn-switch:nth-child(3):hover::after,
    .btn-switch-true:nth-child(3)::after{
        width: 130px;
    }
    .btn-switch:hover p{
        color: var(--red-legal);
    }
    .btn-switch-true{
        position: relative;
        height: 100%;
        border-bottom: 1px var(--grey-legal) solid;
        width: 330px;
        transition: 0.5s;
    }
    .btn-switch-true::after{
        content: '';
        position: absolute;
        height: 4px;
        bottom: -3px;
        left: 0;
        background: var(--red-legal);
        z-index: 100;
        width: 170px;
        transition: 0.5s;
    }
    .btn-switch-true p{
        color: var(--red-legal);
    }
    .noAd{
        display: flex;
        height: 100%;    
        width: 100%;
    }
    .ad{
        display: none;
    }
    .thisPoing{
        color: var(--red-legal);
        width: 260px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        border-bottom: 2px var(--red-legal) solid;
        font-size: 18px;
        font-weight: 500;
    }
    .mtext{
        display: flex;
        align-items: center;
        padding: 20px 0;
        border-bottom: 1px var(--grey-legal) solid;
        width: 260px;
        cursor: pointer;
        transition: 0.4s;
        font-size: 18px;
        font-weight: 500;
    }
    .mtext:hover{
        color: var(--red-legal);
    }
    @media (max-width: 1100px) {
        .noAd{
            display: none;
        } 

        .ad{
            display: block;
            margin-left: 30px;
        }
        .mtext{
            margin-left: 30px;
        }
    }
    @media (max-width: 650px) {
        .ad,.mtext{
            margin-left: 0px;
        }
        .thisPoing, 
        .ad,
        .mtext{
            width: 100%;
        }
    }
</style>