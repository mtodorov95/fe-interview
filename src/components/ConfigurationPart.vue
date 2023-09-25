<script setup lang="ts">
import PillContainer from "./PillContainer.vue"
import SectionCard from "./SectionCard.vue"
import { useStore } from "vuex";
import { ref } from "vue";

const emits = defineEmits(['done'])

const STEPS = 4;

const store = useStore();
const step = ref(1);
const name = ref();

const setName = () => {
    store.dispatch('setName', name.value ?? 'John Doe')
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
    step.value += 1;
    if (step.value > STEPS) {
        emits('done');
    }
}
</script>

<template>
    <SectionCard v-if="step == 1" title="Configure duration"
        description="Set your own interview duration, or use the default values?" @done="incrementStep()">
        <p>By default the time is 75 min broken down into: <br>5 min for interviewer introduction; <br>10 min for candidate
            introduction; <br>15 min for writing a simple code snipet + follow up questions;
            <br>10 min for framework questions
            <br>35 min for creating a login
            form in the framework of choice + follow up tasks.</p>
        <p>All timed steps will have a play-pause button and a progress bar, as well as a 'Next' button if you want to end the step early.<br>All other steps require input to proceed</p>
        <button class="pill">Configure(WIP)</button>
    </SectionCard>
    <SectionCard v-if="step == 2" title="Candidate name" @done="setName()">
        <input v-model="name" type="text" name="name" id="name">
    </SectionCard>
    <PillContainer v-if="step == 3" @select="(selected: string) => setPosition(selected)" header="Target position"
        :options="['Junior', 'Advanced', 'Senior']" />
    <PillContainer v-if="step == 4" @select="(selected: string) => setExperience(selected)" header="Prior experience"
        :options="['None', '1-3 yrs', '3-5 yrs', '> 5 yrs']" />
</template>
