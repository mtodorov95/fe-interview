<script setup lang="ts">
import SectionCard from "./components/SectionCard.vue"
import PillContainer from "./components/PillContainer.vue"
import MultipleChoice from "./components/MultipleChoice.vue"
import Summary from "./components/TheSummary.vue"
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();
const step = ref(4);

const setPosition = (position: string) => {
    store.dispatch('setTargetPosition', position)
    incrementStep();
}
const setExperience = (exp: string) => {
    store.dispatch('setTargetExperience', exp)
    incrementStep();
}

const finishSection = () => incrementStep();

//const incrementStep = () => step.value += 1;
const incrementStep = () => {};
</script>

<template>
    <h1 class="title">FE Interview</h1>
    <Summary />

    <PillContainer v-if="step == 1" @select="(selected: string) => setPosition(selected)" header="Target position"
        :options="['Junior', 'Advanced', 'Senior']" />
    <PillContainer v-if="step == 2" @select="(selected: string) => setExperience(selected)" header="Prior experience"
        :options="['None', '1-3 yrs', '3-5 yrs', '> 5 yrs']" />

    <SectionCard v-if="step == 3" @done="finishSection()" title="Introduction"
        description="Casual chat + brief introduction of me, the product and the team" :time="1" />
    <SectionCard v-if="step == 4" @done="finishSection()" title="About you" description="Tell me about your experience"
        :time="1">
        <ul>
            <li>What were your responsibilities?</li>
            <li>What was the team structure?</li>
            <li>Who brought in tasks?</li>
            <li>How did you plan the work?</li>
            <li>How did you ensure what you built works?</li>
        </ul>
        <MultipleChoice @select="(selected: string) => setExperience(selected)" header="Red Flags"
            :options="['None', '1-3 yrs', '3-5 yrs', '> 5 yrs']" />
    </SectionCard>
</template>

<style scoped>
ul {
    text-align: left;
}
</style>
