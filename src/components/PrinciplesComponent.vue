<template>
    <v-container>
        <h2>Мы можем позволить себе истинную роскошь — <br class="br"/> придерживаться в работе проверенных принципов.</h2>
        <div class="container-num">
            <div class="card-num" v-for="(item, idx) in principlesData" :key="idx">
                <p class="tp"><span class="red-text">0{{ idx + 1 }}.</span> {{ item.title }} </p>
                <p class="text-start text-card text-caption text-roboto">{{ item.text }}</p>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            principlesData: [
                {
                    title: 'Честность',
                    text: 'Мы строим отношения с клиентами на основе доверия. Без этого невозможно эффективно оказывать юридические услуги. Честность  — основа доверия. Мы описываем клиентам соответствующую действительности ситуацию и перспективы разрешения арбитражного спора. Наша цель — предоставить реальную информацию, чтобы клиент решил, нужны ему наши услуги или нет.'
                },
                {
                    title: 'Творческий подход',
                    text: 'В арбитражных делах всегда есть пространство для манёвра. В одной и той же ситуации можно поступить по-разному, и последствия тоже будут разными. Мы глубоко знаем норму закона и понимаем, как суды трактуют её. Юрист по арбитражным делам нужен не для того, чтобы объяснить, что задуманное не удастся, а для того, чтобы сконструировать механизм, благодаря которому все получится.'
                },
                {
                    title: 'Аккуратность',
                    text: 'Юридические сложности бизнеса часто лежат сразу в нескольких отраслях права. Поэтому адвокат по арбитражным делам, который моделирует решение правовой проблемы, должен видеть, как предлагаемая им модель отразится на всех аспектах дела. Для этого необходимо обладать высокой квалификацией. Недопустимо решать проблемы так, чтобы на их месте возникали новые.'
                }
            ]
        }
    }
}
</script>

<style>
    .card-num{
        height: 100%;
        border-right: 1px rgb(202, 202, 202) solid;
        text-align: center; 
        display: flex;
        flex-direction: column;
        padding-right: 16px;
    }
    .card-num:last-child{
        border-right: none;
    }
    .container-num{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding-top: 40px;
        max-width: 1800px !important;
        grid-column-gap: 20px;
    }
    @media (max-width: 1100px){
        .container-num{
            grid-template-columns: 1fr;
        }
        .card-num{
            border-right: none;
            padding-right: 0px;    
            padding-bottom: 20px;
        }
    }
</style>

<style scoped>
    h2{
        color: var(--red-legal);
        font-size: 32px;
        text-align: center;
        font-weight: 400;
    }
    .tp{
        text-align: start;
        font-size: 26px;
        padding-bottom: 16px;
    }
    @media (max-width: 1100px){
    
        .br{
            display: none;
        }
        h2{
            font-size: 28px;
        }
        .tp{
            font-size: 24px;
        }
    }
    @media (max-width: 650px){
        .t{
            font-size: 24px !important;
        }
        h2{
            font-size: 24px;
            text-align: start;
            line-height: 25px;
        }
        .tp{
            font-size: 20px;
        }
    }
</style>