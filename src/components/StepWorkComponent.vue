<template>
    <v-container class="mb-5">
        <h2 class="t text-h4">Этапы работы</h2>
        <p class="text-uppercase t-red text-roboto t pt-2">для достижения нужного клиенту результата</p>
        <div class="container-num">
            <div class="card-num pr-4" v-for="(item, idx) in stepWorkData" :key="idx">
                <p class="text-acc text-left mb-1"><span class="red-text">0{{ idx + 1 }}.</span> {{ item.title }} </p>
                <p class="text-start text-card text-caption text-roboto">{{ item.text }}</p>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            stepWorkData: [
                {
                    title: 'Правовой аудит и выявление рисков',
                    text: 'Необходимо определить юридическую структуру проблемы и чем она грозит. Ситуации могут быть юридически сложными, а риски неочевидны.'
                },
                {
                    title: 'Разработка безопасных решений',
                    text: 'Нужного результата можно добиться разными способами. Следует оценить реалистичность каждого способа и сложности при их реализации.'
                },
                {
                    title: 'Внедрение выбранного решения',
                    text: 'Проводится последовательная и методичная работа по реализации выбранного механизма для разрешения проблемы.'
                }
            ]
        }
    }
}
</script>
<style scoped>
    .t{
        text-align: center;
    }
    
    @media (max-width: 650px){
        .t{
            text-align: start;
        }
    }
</style>
