<script setup lang="ts">
import SectionCard from "./SectionCard.vue"
import PillContainer from "./PillContainer.vue"
import MultipleChoice from "./MultipleChoice.vue"
import CodeBlock from "./CodeBlock.vue"
import TIMED_STEPS from '@/enums/steps'
import {redFlagsOptions, jsRedFlagsOption, frameworkRedFlagsOptions} from '@/data/options'
import { useStore } from "vuex";
import { ref } from "vue";

const STEPS = 6;

const emits = defineEmits(['done']);
const store = useStore();
const step = ref(1);

const getDuration = (step: TIMED_STEPS) => store.getters.duration[step];

const setRedFlags = (flags: string[]) => {
    store.dispatch('setRedFlags', flags)
}

const setCodeRedFlags = (idx: number, flags: string[]) => {
    store.dispatch('setCodeRedFlags', { 'idx': idx, 'flags': flags })
}

const setFramework = (framework: string) => {
    store.dispatch('setFramework', framework)
    incrementStep();
}

const finishSection = () => incrementStep();

const incrementStep = () => {
    step.value += 1;
    if (step.value > STEPS) {
        emits('done');
    }
}
</script>

<template>
    <SectionCard v-if="step == 1" @done="finishSection()" title="Introduction"
        description="Casual chat + brief introduction of me, the product and the team" :time="getDuration(TIMED_STEPS.INTRODUCTION)" />
    <SectionCard v-if="step == 2" @done="finishSection()" title="About you" description="Tell me about your experience"
        :time="getDuration(TIMED_STEPS.ABOUT_YOU)">
        <ul>
            <li>What were your responsibilities?</li>
            <li>What was the team structure?</li>
            <li>Who brought in tasks?</li>
            <li>How did you plan the work?</li>
            <li>How did you ensure what you built works?</li>
        </ul>
        <hr>
        <MultipleChoice @select="(selected: string[]) => setRedFlags(selected)" header="Red Flags"
            :options="redFlagsOptions" />
    </SectionCard>
    <SectionCard v-if="step == 3" @done="finishSection()" title="Simple code snipet"
        description="Write code to sum numbers in array, e.g. sum([1, 2, 3]) -> 6" :time="getDuration(TIMED_STEPS.CODE_SNIPET)">
        <p>Possible answer:</p>
        <CodeBlock code="const sum = arr => arr.reduce((sum, x) => sum + x, 0)" />
        <hr>
        <p>Follow ups:</p>
        <ul>
            <li>let vs const?</li>
            <li>function vs arrow function?</li>
        </ul>
        <hr>
        <MultipleChoice @select="(selected: string[]) => setCodeRedFlags(0, selected)" header="Red Flags"
            :options="jsRedFlagsOption" />
    </SectionCard>
    <PillContainer v-if="step == 4" @select="(selected: string) => setFramework(selected)" header="Framework of choice"
        :options="['Vue', 'React', 'Angular']" />
    <SectionCard v-if="step == 5" @done="finishSection()" title="Login Form"
        :description="'Build a login form in ' + store.getters.framework" :time="getDuration(TIMED_STEPS.FORM)">
        <p>Start with just the basic layout</p>
        <hr>
        <p>Follow ups:</p>
        <ul>
            <li>Style it with CSS</li>
            <li>Display errors on bad credentials</li>
            <li>Add browser autocomplete</li>
            <li>Show/hide password button</li>
            <li>Prevent multiple submissions</li>
        </ul>
        <hr>
        <MultipleChoice @select="(selected: string[]) => setCodeRedFlags(1, selected)" header="Red Flags"
            :options="frameworkRedFlagsOptions" />
    </SectionCard>
    <SectionCard v-if="step == 6" @done="finishSection()" title="Reverse interview"
        description="Answer questions that the candidate may have.">
    </SectionCard>
</template>
