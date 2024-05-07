<template>
  <v-card  :height="270" class="px-8 pt-7 pb-6 d-flex flex-column justify-space-evenly bg-gray b">
        <p class="pa-0">Свяжитесь с нашими <br/> специалистами по телефону:</p>
        <h2>+ 7 (499) 460-09-09</h2>
        <span class="text-roboto">Адвокаты нашего бюро готовы оказать помощь по любому правовому вопросу в режиме 24/7.</span>
    </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>
    h2{
        color: var(--red-legal);
        font-size: 28px;
        font-weight: 400;
    }
    .b{
        border: 1px var(--grey-intense-legal) solid;
        width: 100%;
    }
    p{
        font-size: 26px;
    }
    @media (max-width: 650px){
        p{
            font-size: 22px;
        }
        h2{
            font-size: 24px;
        }
    }
</style>