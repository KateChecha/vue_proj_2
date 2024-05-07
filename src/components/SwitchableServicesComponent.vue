<template>
    <LawComponent v-if="switchStatus == 'law'"/>
    <IndividComponent v-if="switchStatus == 'individ'"/>
    <CriminalComponent v-if="switchStatus == 'criminal'"/>
</template>

<script setup>
    import LawComponent from './LawComponent.vue';
    import IndividComponent from './IndividComponent.vue'
    import CriminalComponent from './CriminalComponent.vue'
</script>

<script>
export default {
    props: ['switchStatus'],
}
</script>

<style>

</style>