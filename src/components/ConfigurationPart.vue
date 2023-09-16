<script setup lang="ts">
import PillContainer from "./PillContainer.vue"
import SectionCard from "./SectionCard.vue"
import { useStore } from "vuex";
import { ref } from "vue";

const emits = defineEmits(['done'])

const STEPS = 3;

const store = useStore();
const step = ref(1);
const name = ref();

const setName = () => {
    store.dispatch('setName', name.value ?? '')
    incrementStep();
}
const setPosition = (position: string) => {
    store.dispatch('setTargetPosition', position)
    incrementStep();
}
const setExperience = (exp: string) => {
    store.dispatch('setTargetExperience', exp)
    incrementStep();
}

const incrementStep = () => {
    if (step.value != STEPS) {
        step.value += 1;
    } else {
        emits('done')
    }
}
</script>

<template>
    <SectionCard v-if="step == 1" title="Candidate name" @done="setName()">
        <input v-model="name" type="text" name="name" id="name">
    </SectionCard>
    <PillContainer v-if="step == 2" @select="(selected: string) => setPosition(selected)" header="Target position"
        :options="['Junior', 'Advanced', 'Senior']" />
    <PillContainer v-if="step == 3" @select="(selected: string) => setExperience(selected)" header="Prior experience"
        :options="['None', '1-3 yrs', '3-5 yrs', '> 5 yrs']" />
</template>
