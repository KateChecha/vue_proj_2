<template>
    <v-expansion-panels
   
    v-model="panel">
        <v-expansion-panel
            v-for="item in accordion"
            :key="item.title">
            <v-expansion-panel-title class="text-acc">
            {{item.title}}
            <template v-slot:actions="{ expanded }">
                <v-img :src="!expanded ? './plus.svg' : './minus.svg'"  :width="48" :height="48" class="ml-4"></v-img>
            </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <p class="py-3 text-roboto">
                    <span class="r text-uppercase">Клиент:&nbsp;</span>
                    <span class="gr">{{item.client}}</span>
                </p>
                <p class="py-3 text-roboto">
                    <span class="r text-uppercase">Проблема:&nbsp;</span>
                    <span class="gr">{{item.problem}}</span>
                </p>
                <p class="py-3 text-roboto">
                    <span class="r text-uppercase">Цель и задачи:&nbsp;</span>
                    <span class="gr">{{item.task}}</span>
                </p>
                <p class="py-3 text-roboto">
                    <span class="r text-uppercase">Худший варант развитяи событий:&nbsp;</span>
                    <span class="gr">{{item.bad_result}}</span>
                </p>
                <p class="py-3 text-roboto">
                    <span class="r text-uppercase">Результат:&nbsp;</span>
                    <span class="gr">{{item.result}}</span>
                </p>
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

<style scoped>
    .r{
        color: var(--red-legal);
    }
    .gr{
        color: var(--grey-intense-legal);
    }
</style>