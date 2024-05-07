<template>
        <v-container>
            <div class="accordions-container">
                <AccordionComponent :accordion="accordionCriminal"/>
                <div class="w">
                    <CriminalSubtitleComponent/>
                    <FeedbackCardComponent class="p"/>
                </div>
            </div>
        </v-container>
</template>

<script>
import AccordionComponent from './AccordionComponent.vue'
import FeedbackCardComponent from './FeedbackCardComponent.vue'
import CriminalSubtitleComponent from './CriminalSubtitleComponent.vue'
export default {
    components: { AccordionComponent, FeedbackCardComponent, CriminalSubtitleComponent },
    data(){
        return{
            accordionCriminal: [
                {
                    title: 'Апелляционное обжалование',
                    text: 'Мы обжалуем не вступившее в законную силу решение нижестоящего суда (суда первой инстанции) в уголовном процессе. Это может означать новое рассмотрение дела, по существу.',
                },
                {
                    title: 'Досудебные проверки',
                    text: 'Мы обжалуем не вступившее в законную силу решение нижестоящего суда (суда первой инстанции) в уголовном процессе. Это может означать новое рассмотрение дела, по существу.',
                },
                {
                    title: 'Защита в суде',
                    text: 'Мы обжалуем не вступившее в законную силу решение нижестоящего суда (суда первой инстанции) в уголовном процессе. Это может означать новое рассмотрение дела, по существу.',
                },
                {
                    title: 'Защита на предварительном следствии',
                    text: 'Мы обжалуем не вступившее в законную силу решение нижестоящего суда (суда первой инстанции) в уголовном процессе. Это может означать новое рассмотрение дела, по существу.',
                },
                {
                    title: 'Кассационное обжалование',
                    text: 'Мы обжалуем не вступившее в законную силу решение нижестоящего суда (суда первой инстанции) в уголовном процессе. Это может означать новое рассмотрение дела, по существу.',
                },
            ]
        }
    }
}
</script>
<style scoped>
    .p{
        width: 90%;
    }
    .w{
        width: 100%;
    }
    @media (max-width: 1100px) {
        .p{
            width: 100%;
        }
    }
</style>
