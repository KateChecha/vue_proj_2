<template>
    <div class="w">
        <PersonInfoComponent/>
    </div>
</template>

<script setup>
    import PersonInfoComponent from '@/components/PersonInfoComponent.vue'
</script>

<script>
export default {
    mounted(){
        window.scrollTo(0,0);
    },
}
</script>

<style scoped>
.w{
    height: auto;
}

</style>