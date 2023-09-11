<script setup lang="ts">
import SectionCard from "./components/SectionCard.vue"
import PillContainer from "./components/PillContainer.vue"
import MultipleChoice from "./components/MultipleChoice.vue"
import Summary from "./components/TheSummary.vue"
import { useStore } from "vuex";
import { ref } from "vue";

const STEPS = 9;

const store = useStore();
const step = ref(1);

const getDuration = (step:number) => store.getters.duration[step];

const setPosition = (position: string) => {
    store.dispatch('setTargetPosition', position)
    incrementStep();
}
const setExperience = (exp: string) => {
    store.dispatch('setTargetExperience', exp)
    incrementStep();
}
const setRedFlags = (flags: string[]) => {
    store.dispatch('setRedFlags', flags)
    incrementStep();
}
const setFramework = (framework: string) => {
    store.dispatch('setFramework', framework)
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
    <Summary :in-focus="step == STEPS"/>

    <PillContainer v-if="step == 1" @select="(selected: string) => setPosition(selected)" header="Target position"
        :options="['Junior', 'Advanced', 'Senior']" />
    <PillContainer v-if="step == 2" @select="(selected: string) => setExperience(selected)" header="Prior experience"
        :options="['None', '1-3 yrs', '3-5 yrs', '> 5 yrs']" />

    <SectionCard v-if="step == 3" @done="finishSection()" title="Introduction"
        description="Casual chat + brief introduction of me, the product and the team" :time="getDuration(3)" />
    <SectionCard v-if="step == 4" @done="finishSection()" title="About you" description="Tell me about your experience"
        :time="getDuration(4)">
        <ul>
            <li>What were your responsibilities?</li>
            <li>What was the team structure?</li>
            <li>Who brought in tasks?</li>
            <li>How did you plan the work?</li>
            <li>How did you ensure what you built works?</li>
        </ul>
        <hr>
        <MultipleChoice @select="(selected: string[]) => setRedFlags(selected)" header="Red Flags"
            :options="['Can not answer', 'Narrow responsibilities', 'Non-agile/top-down environment']" />
    </SectionCard>
    <SectionCard v-if="step == 5" @done="finishSection()" title="Simple code snipet"
        description="Write code to sum numbers in array, e.g. sum([1, 2, 3]) -> 6" :time="getDuration(5)">
        <p>Possible answer: <code>const sum = arr => arr.reduce((sum, x) => sum + x, 0)</code></p>
        <hr>
        <p>Follow ups:</p>
        <ul>
            <li>let vs const?</li>
            <li>function vs arrow function?</li>
        </ul>
    </SectionCard>
    <PillContainer v-if="step == 6" @select="(selected: string) => setFramework(selected)" header="Framework of choice"
        :options="['Vue', 'React', 'Angular']" />
    <SectionCard v-if="step == 7" @done="finishSection()" title="Login Form"
        :description="'Build a login form in ' + store.getters.framework" :time="getDuration(7)">
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
    </SectionCard>
    <SectionCard v-if="step == 8" @done="finishSection()" title="Reverse interview"
        description="Answer questions that the candidate may have.">
        <button @click="finishSection()" class="pill">Finish</button>
    </SectionCard>
</template>

<style scoped>
</style>
