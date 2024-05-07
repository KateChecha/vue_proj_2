<template>
  <div>
        <p class="text-title pb-3">Услуги юристов и адвокатов по арбитражным делам</p>
        <div class="pb-3">
            <p class="py-2 text-roboto">Здесь представлен далеко не весь перечень вопросов, с которыми мы работаем. Основные вопросы, с которыми к нам обращаются граждане:</p>
            <ul>
                <li v-for="(item, i) in list" :key="i">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list: ['Семейные споры;', 'Наследственные споры;', 'Сопровождение сделок с недвижимостью;', 'Защита прав потребителей;', 'Споры по кредитным договорам;', 'Страховые споры по ОСАГО и КАСКО;', 'Страховые споры по ипотечному страхованию;', 'Взыскание неустойки с застройщика;', 'Трудовые споры;', 'Расторжение брака;', 'Раздел имущества супругов;', 'Представление интересов в суде;', 'Установление факта родства;', 'Оформление наследства;', 'Споры с медицинскими организациями.']
        }
    }
}
</script>


<style scoped>
    p{
        color: var(--grey-intense-legal);
    }
    .text-title{
        font-size: 32px;
        color: black;
    }
    .bg{
        background-color: var(--red-legal);
        color: white;
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
        .text-title{
            font-size: 24px;
        }
    }
    @media (max-width: 650px) {
        .bg{
            width: 100%;
        }
    }
</style>