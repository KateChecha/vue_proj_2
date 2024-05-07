<template>
    <v-container class="container-num">
        <div class="card-num" v-for="item in numbersData" :key="item.num">
            <p class="red-text fs40 pt-6 pb-4">{{ item.num }}</p>
            <p class="text-h6 w-75">{{ item.text }}</p>
        </div>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            numbersData: [
                {
                    num: '100%',
                    text: 'Конфиденциальность'
                },
                {
                    num: '> 1 800',
                    text: 'Бенефициаров'
                },
                {
                    num: '95%',
                    text: 'Успешные случаи'
                },
                {
                    num: '2 999',
                    text: 'Зарегистрированные случаи'
                },
            ]
        }
    }
}
</script>

<style scoped>
    .card-num{
        height: 170px;
        border-right: 1px rgb(202, 202, 202) solid;
        text-align: center; 
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card-num:last-child{
        border-right: none;
    }
    .container-num{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding-top: 40px;
        max-width: 1800px !important;
    }
    .fs40{
        font-size: 40px;
    }
    @media (max-width: 1110px) {
        .container-num{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
        .card-num{
            height: 170px;
            border-right: transparent;
            width: 320px;
        }
    }
</style>