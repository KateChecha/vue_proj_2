<template>
   <v-expansion-panels
   
   v-model="panel">
      <v-expansion-panel
        v-for="item in accordion"
        :key="item.title">
        <v-expansion-panel-title class="text-acc">
          {{item.title}}
          <template v-slot:actions="{ expanded }">
            <v-img :src="!expanded ? './plus.svg' : './minus.svg'" :width="48" :height="48" class="ml-4"></v-img>
          </template>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          {{item.text}}
        </v-expansion-panel-text>
    </v-expansion-panel>
    </v-expansion-panels>
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

<style>
    .v-expansion-panel-title__overlay{
        opacity: 0 !important;
    }
    .v-expansion-panel-title:hover > .v-expansion-panel-title__overlay {
        opacity: 0 !important;
    }
    .v-expansion-panel-title--active:hover > .v-expansion-panel-title__overlay, .v-expansion-panel-title[aria-haspopup=menu][aria-expanded=true]:hover > .v-expansion-panel-title__overlay {
        opacity: 0 !important;
    }
    .v-expansion-panel{
        padding: 10px 10px;
        transition: 0.5s !important;
    }
    .v-expansion-panel--active {
        padding: 10px !important;
    }
</style>