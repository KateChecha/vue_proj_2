<template>
  <div class="accordion-container">
    <v-expansion-panels
   
    v-model="panel">
        <v-expansion-panel
            v-for="item in accordion"
            :key="item.title">
            <v-expansion-panel-title class="text-h5">
            {{item.title}}
            <template v-slot:actions="{ expanded }">
                <v-img :src="!expanded ? './plus.svg' : './minus.svg'"></v-img>
            </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
            {{item.text}}
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
    props: ['accordion'],
    data(){
        return{
            panel: [0]
        }
    }
}
</script>

<style scoped>
    .accordion-container{
        width: 65%;
    }
</style>