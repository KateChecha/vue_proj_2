<template>
  <v-card class="pa-9 d-flex flex-column justify-space-evenly align-start card">
                <h2 class="text-acc pa-0 pb-3 t">Заполните форму, и мы свяжемся <br class="br"/> с вами в ближайшее время</h2>
                <v-form @submit.prevent>
                    <p class="text-roboto">Ваше имя*</p>
                    <v-text-field  
                        label="Фамилия Имя Отчество" 
                        density="compact"
                        variant="outlined"
                        single-line>
                    </v-text-field>
                    <div class="contact">
                        <p class="text-roboto">Телефон*</p>
                        <p class="text-roboto max">Электронная почта*</p>
                        <v-text-field  
                            v-mask="'+7 (###) ###-##-##'"
                            label="+7(___) ___ - __ - __ " 
                            density="compact"
                            variant="outlined"
                            single-line>
                        </v-text-field>
                        <p class="text-roboto min">Электронная почта*</p>
                        <v-text-field  
                            label="mail@mail.ru" 
                            density="compact"
                            variant="outlined"
                            single-line>
                        </v-text-field>
                    </div>
                    <p class="text-roboto">Ваш вопрос</p>
                    <v-textarea label="Кратко опишите ваш вопрос" variant="outlined" single-line></v-textarea>
                    <div class="g">
                        <input type="checkbox">
                        <span class="text-roboto fs14">Даю согласие на обработку моих персональных данных, указанных в заполненной форме на сайте zapolskiy.ru, в соответствии с <a href="#">политикой обработки персональных данных</a>.</span>
                    </div>
                    <v-btn type="submit" :ripple="false" rounded="xl" size="large" class="text-roboto b mt-7">Отправить</v-btn>
                </v-form>
            </v-card>
</template>

<script>
import {mask} from 'vue-the-mask'
export default {
  directives: {mask}
}
</script>

<style scoped>

    .t{
        line-height: 30px;
    }
    .b{
        background-color: var(--red-legal);
        color: white;
    }
    .min{
        display: none;
    }
    .contact{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 25px;
    }
    .card{
        width: 100%;
    }
    @media (max-width: 1500px) {
        .min{
            display: block;
        }
        .max{
            display: none;
        }
        .contact{
            grid-template-columns: 1fr;
            grid-column-gap: 0px;
        }
        .br{
            display: none;
        }
    }
    @media (max-width: 650px) {
        .b{
            width: 100%;
        }
    }
</style>
