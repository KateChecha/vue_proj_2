<template>
    <v-container>
        <div class="accordions-container">
            <LawCardComponent/>
            <LawSubtitleComponent/>
        </div>
    </v-container>
    <LawBannerComponent/>
    <div class="d-flex justify-center">
        <LawAccordionComponent/>
    </div>
</template>

<script setup>
    import LawCardComponent from './LawCardComponent.vue';
    import LawSubtitleComponent from './LawSubtitleComponent.vue';
    import LawBannerComponent from './LawBannerComponent.vue'
    import LawAccordionComponent from './LawAccordionComponent.vue'
</script>

<script>
export default {

}
</script>

<style scoped>
    
</style>