<template>
    <v-container>
        <div class="w-100">
            <ContactMapComponent/>
            <!-- <FormFeedbackComponent class="bgf"/> -->
        </div>
    </v-container>
</template>

<script>
import ContactMapComponent from '@/components/ContactMapComponent.vue'
import FormFeedbackComponent from '@/components/FormFeedbackComponent.vue'
export default {
    components: { ContactMapComponent, FormFeedbackComponent },

    mounted(){
        window.scrollTo(0,0);
    },
}
</script>

<style scoped>
    .bgf{
        background: var(--grey-light-legal);
        border: 1px var(--grey-legal) solid;
    }
    /* .accordions-container{
        grid-template-columns: 59% 38%;
    } */
    @media (max-width: 1600px) {
        .card{
            width: 100%;
        }
    }
    /* @media (max-width: 1100px) {
        .accordions-container{
            grid-template-columns: 100%;
        }
    } */
</style>