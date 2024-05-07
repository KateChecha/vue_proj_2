<template>
    <v-card :height="480" class="px-10 pt-9 pb-6 d-flex flex-column justify-space-evenly bg-gray ma-0 brdr">
        <h2 class="pa-0">Запросите обратный <br/> звонок:</h2>
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
        <v-btn :ripple="false" rounded="xl" size="large" class="text-roboto w-100 bg">Отправить</v-btn>
    </v-card>
</template>

<script>
import {mask} from 'vue-the-mask'
export default {
  directives: {mask}
}
</script>

<style scoped>
    .bg{
        background-color: var(--red-legal);
        color: white;
    }
    .brdr{
        border: 1px var(--grey-intense-legal) solid;
    }
    h2{
        font-size: 28px;
        font-weight: 400;
    }
    @media (max-width: 650px) {
        h2{
            font-size: 22px;
        }
    }
</style>
<style>
    .v-card__underlay{
        display: none;
    }
</style>