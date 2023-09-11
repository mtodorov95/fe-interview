<script setup lang="ts">
import PillContainer from "./components/PillContainer.vue"
import SectionCard from "./components/SectionCard.vue"
import { useStore } from "vuex";
import { ref } from "vue";

const STEPS = 3;

const store = useStore();
const step = ref(1);

const setPosition = (position: string) => {
    store.dispatch('setTargetPosition', position)
    incrementStep();
}
const setExperience = (exp: string) => {
    store.dispatch('setTargetExperience', exp)
    incrementStep();
}

const finishSection = () => incrementStep();

const incrementStep = () => {
    if (step.value != STEPS) {
        step.value += 1;
    }
}
</script>

<template>
    <SectionCard>
        <input type="text">
    </SectionCard>
    <PillContainer v-if="step == 1" @select="(selected: string) => setPosition(selected)" header="Target position"
        :options="['Junior', 'Advanced', 'Senior']" />
    <PillContainer v-if="step == 2" @select="(selected: string) => setExperience(selected)" header="Prior experience"
        :options="['None', '1-3 yrs', '3-5 yrs', '> 5 yrs']" />
</template>
