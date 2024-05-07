<template>
    <SliderComponent  :slide="slider"/>
    <CardPersonsComponent :infoPersons="infoPersons"/>
    <BannerTeamComponent class="my-4"/>
</template>

<script>
import SliderComponent from '@/components/SliderComponent.vue'
import CardPersonsComponent from '@/components/CardPersonsComponent.vue'
import BannerTeamComponent from '@/components/BannerTeamComponent.vue'
export default {
    components: { SliderComponent, CardPersonsComponent, BannerTeamComponent },
    data(){
        return {
            slider: [
                {
                    text: 'Мы — команда высококлассных специалистов и правопреемник первого в России частного адвокатского объединения, защищаем права и интересы бизнеса и граждан  с 1990 года.',
                    img: 'second-slide-company',
                    title: '«ЗАПОЛЬСКИЙ И ПАРТНЕРЫ»',
                    subtitle: 'адвокатское бюро',
                },
                {
                    img: 'first-slide-company',
                    title: '«ЗАПОЛЬСКИЙ И ПАРТНЕРЫ»',
                    subtitle: 'адвокатское бюро',
                    text: 'Каждая правовая ситуация является уникальной и требует индивидуального подхода. Мы вкладываем все свои знания и опыт, чтобы найти наилучшее решение для каждого клиента.'
                },
                {
                    img: 'third-slide-company',
                    title: '«ЗАПОЛЬСКИЙ И ПАРТНЕРЫ»',
                    subtitle: 'адвокатское бюро',
                    text: 'Каждая правовая ситуация является уникальной и требует индивидуального подхода. Мы вкладываем все свои знания и опыт, чтобы найти наилучшее решение для каждого клиента.'
                },
            ],
            infoPersons: [
                {
                    img: "sz.png",
                    name: "Сергей Запольский",
                    post: "УПРАВЛЯЮЩИЙ ПАРТНЕР",
                    post_text: "Основатель и управляющий партнер адвокатского бюро «Запольский и партнеры», доктор юридических наук, профессор, заслуженный юрист Российской Федерации."
                },
                {
                    img: "ok.png",
                    name: "Ольга Киселева",
                    post: "АДВОКАТ, РУКОВОДИТЕЛЬ СУДЕБНО-АРБИТРАЖНОЙ ПРАКТИКИ",
                    post_text: "к.ю.н., эксперт в области гражданского права и арбитражного процесса, наследственных споров, страхования и недвижимости"
                },
            ],
        }
    },
    mounted(){
        window.scrollTo(0,0);
    },
}
</script>

<style>

</style>