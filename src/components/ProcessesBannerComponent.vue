<template>
    <div>
        <div class="bc">
            <p class="text-title">Мы поможем в любой ситуации</p>
            <p class="w text-roboto fs14">Мы — команда опытных юристов, готовых помочь вам в любом юридическом вопросе. Наша цель — обеспечить нашим клиентам наилучшие результаты и максимальную защиту их прав. С нашим огромным опытом в юридической сфере, мы гарантируем, что ваше дело будет рассмотрено внимательно и профессионально. Мы находимся на связи 24/7 и готовы помочь вам в любое время. Не стесняйтесь обращаться к нам для юридической помощи!</p>
            
            <router-link to="/vue_proj_2/dist/contact">
                <v-btn :ripple="false" rounded="xl" size="large" class="text-roboto me-3 b">связаться</v-btn>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .bc{
        height: 470px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        background: var(--red-legal);
        padding: 30px;
    }
    .text-title{
        color: white;
        font-size: 28px;
    }
    .w{
        color: white;
    }
    @media (max-width: 650px) {
        .b{
            width: 100%;
        }
    }
</style>