<script setup lang="ts">
import SectionCard from "./components/SectionCard.vue"
import PillContainer from "./components/PillContainer.vue"
import Summary from "./components/TheSummary.vue"
import { useStore } from "vuex";

const store = useStore();

const setPosition = (position: string) => {
    store.dispatch('setTargetPosition', position)
}
const setExperience = (exp: string) => {
    store.dispatch('setTargetExperience', exp)
}
</script>

<template>
    <h1 class="title">FE Interview</h1>
    <Summary />

    <PillContainer @select="(selected: string) => setPosition(selected)" header="Target position"
        :options="['Junior', 'Advanced', 'Senior']" />
    <PillContainer @select="(selected: string) => setExperience(selected)" header="Prior experience"
        :options="['None', '1-3 yrs', '3-5 yrs', '> 5 yrs']" />

    <SectionCard title="Introduction" description="Casual chat + brief introduction of me, the product and the team" :time="5"/>
</template>

<style scoped></style>
