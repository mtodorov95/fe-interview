<script setup lang="ts">
import SectionCard from "./components/SectionCard.vue"
import PillContainer from "./components/PillContainer.vue"
import Summary from "./components/TheSummary.vue"
import { useStore } from "vuex/types/index.js";

const store = useStore();

const setPosition = (position: string) => {
    store.dispatch('setTargetPosition', position)
}
</script>

<template>
    <h1 class="title">FE Interview</h1>
    <Summary />


    <PillContainer @select="(selected: string) => setPosition(selected)" header="Target position"
        :options="['Junior', 'Advanced', 'Senior']" />
    <PillContainer header="Prior experience" :options="['None', '1-3 yrs', '3-5 yrs', '> 5 yrs']" />

    <SectionCard title="Introduction" />
</template>

<style scoped></style>
