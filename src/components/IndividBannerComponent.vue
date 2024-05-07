<template>
  <div class="background">
        <v-container class="h-100 d-flex flex-column justify-space-evenly align-center">
            <h2 class="text title-text">Свяжитесь с нами по телефону</h2>
            <h2 class="text title-text">+ 7 (499) 460-09-09</h2>
            <span class="text text-roboto text-center py-4 tg" >Наши адвокаты готовы оказать помощь по любому правовому вопросу.</span>
        </v-container>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .background{
        width: 100%;
        height: 450px;
        border: 1px var(--grey-intense-legal) solid;
        background-color: var(--grey-light-legal);
    }
    .title-text{
        font-size: 40px;
        text-align: center;
    }
    .title-text:nth-child(1){
        color: black;
    }
    .title-text:nth-child(2){
        color: var(--red-legal);
    }
    .tg{
        color: var(--grey-intense-legal);
    }
    .bg{
        background-color: var(--red-legal);
        color: white;
    }
    @media (max-width: 650px) {
        .title-text{
            font-size: 28px;
        }
    }
</style>