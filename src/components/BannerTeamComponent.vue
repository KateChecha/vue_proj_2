<template>
    <v-container :height="480">
        <div class="brdr">
            <div class="d-flex justify-center b align-center py-8">
                <p class="text-title">Вам нужна юридическая помощь — обращайтесь к нашим специалистам!</p>
            </div>
            <!-- <div class="w bg-gray d-flex justify-center">
                <v-card :width="530" :height="370" class="px-10 pt-9 pb-6 d-flex flex-column justify-space-evenly  bg-gray ma-0">
                    <div>
                        <p class="text-roboto">Телефон*</p>    
                        <v-text-field  
                            v-mask="'+7 (###) ###-##-##'"
                            label="+7(___) ___ - __ - __ " 
                            density="compact"
                            variant="outlined"
                            single-line
                            class="w-100"
                            :height="50">
                        </v-text-field>
                    </div>
                    <div class="g">
                        <input type="checkbox">
                        <span class="text-roboto fs14">Даю согласие на обработку моих персональных данных, указанных в заполненной форме на сайте zapolskiy.ru, в соответствии с <a href="#">политикой обработки персональных данных</a>.</span>
                    </div>
                    <v-btn :ripple="false" rounded="xl" size="large" class="text-roboto w-100 b">Задать вопрос</v-btn>
                </v-card>
            </div> -->
        </div>
    </v-container>
</template>

<script>
import CardFeedbackComponent from './CardFeedbackComponent.vue'
export default {
    components: { CardFeedbackComponent },
}
</script>

<style scoped>
    .b{
        background: var(--red-legal);
        color: white;
    }
    .brdr{
        border: 1px var(--red-legal) solid;
        /* display: flex; */
    }
    .text-title{
        color: white;
        font-size: 28px;
        text-align: center;
        width: 410px;
    }
    .w{
        width: 50%;
    }
    @media (max-width: 1100px) {
        .w{
            width: 100%;
        }
        /* .brdr{
            flex-direction: column;
        } */
        .text-title{
            width: 100%;
        }
    }
    @media (max-width: 1100px) {
        
        .text-title{
            font-size: 22px;
            padding: 0 10px;
        }
    }
</style>