<template>
    <div>
        <p class="text-title pb-3">Услуги юристов и адвокатов по арбитражным делам</p>
        <div class="pb-3">
            <p class="py-2 text-roboto">Мы работаем с физическими и юридическими лицами по следующим типам преступлений:</p>
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
            list: ['Экономические преступления;', 'Преступления в сфере оборота наркотиков;', 'Преступления против жизни и здоровья.']
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
</style>