<template>
    <div class="cards-containter">
        <p class="title-card">Арбитражные споры, с которыми мы работаем на регулярной основе</p>
        <div class="cards">
            <div v-for="(item, i) in card" :key="i" class="card">
                <img :src="`./${item.img}.svg`" alt="">
                <p>{{ item.title }}</p>
                <ul class="text-roboto">
                    <li v-for="(item, i) in item.list" :key="i">{{ item }}</li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            card: [
                {
                    img: 'government',
                    title: 'Споры с госорганами',
                    list: ["Роспотребнадзор;", "Госинспекция по труду;", "Налоговая инспекция;", "Антимонопольная служба и т.д.;"]
                },
                {
                    img: 'diploma',
                    title: 'Споры из договоров',
                    list: ["Поставки;", "Аренды;", "Подряда;", "Купли-продажи;", "Проектного подряда;", "Лизинга и т.д."]
                },
                {
                    img: 'corporation',
                    title: 'Корпоративные споры',
                    list: ["Между учредителями или учредителями и директором;", "По вопросам принятия решений;", "О внесении изменений в Устав и т.д."]
                },
                {
                    img: 'money',
                    title: 'Взыскание долгов с юридических лиц',
                    list: ["Взыскание долга в суде;", "Исполнительное производство;", "Банкротство должника;", "Привлечение директора/учредителей должника к субсидиарной ответственности;", "Взыскание личного имущества директора/учредителей в счёт долга."]
                },
                {
                    img: 'court',
                    title: 'Судебные споры',
                    list: ["Претензионный порядок;", "Ведение дела на судебной стадии;", "Помощь в исполнении решения суда."]
                },
            ],
            
        }
    }
}
</script>

<style scoped>
    .cards-containter{
        border: 1px var(--grey-legal) solid;
        padding: 30px;
        background: var(--grey-light-legal);
    }
    .cards{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: flex-start;
        align-items: baseline;
        grid-template-rows: 300px 270px;
    }
    .card{
        width: 350px;
        padding-top: 10px;
    }
    ul{
        padding: 10px 30px;
        color: var(--grey-intense-legal);
    }
    li::marker {
        font-size: 15px;
        padding-bottom: 2px;
    }
    p{
        font-size: 24px;
    }
    .title-card{
        font-size: 32px;
        margin-bottom: 20px;
    }
    @media (max-width: 1350px) {
        .cards{
            display: grid;
            grid-template-columns: 1fr;
            justify-content: flex-start;
            align-items: baseline;
            grid-template-rows: auto;
        } 
    }
    @media (max-width: 1099px) {
        .cards{
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: flex-start;
            align-items: baseline;
            grid-template-rows: 300px 270px;
        } 
    }
    @media (max-width: 809px) {
        .cards{
            display: grid;
            grid-template-columns: 1fr;
            justify-content: flex-start;
            align-items: baseline;
            grid-template-rows: auto;
        } 
    }
    @media (max-width: 650px) {
        .title-card{
            font-size: 24px;
        }
        .card{
            width: 100%;
        }
    }
</style>