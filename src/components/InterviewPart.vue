<script setup lang="ts">
import SectionCard from "./SectionCard.vue"
import PillContainer from "./PillContainer.vue"
import MultipleChoice from "./MultipleChoice.vue"
import CodeBlock from "./CodeBlock.vue"
import { useStore } from "vuex";
import { ref } from "vue";

const STEPS = 6;

const store = useStore();
const step = ref(1);

const getDuration = (step:number) => store.getters.duration[step];

const setRedFlags = (flags: string[]) => {
    store.dispatch('setRedFlags', flags)
}

const setCodeRedFlags = (flags: string[]) => {
    store.dispatch('setCodeRedFlags', flags)
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
    <SectionCard v-if="step == 1" @done="finishSection()" title="Introduction"
        description="Casual chat + brief introduction of me, the product and the team" :time="getDuration(1)" />
    <SectionCard v-if="step == 2" @done="finishSection()" title="About you" description="Tell me about your experience"
        :time="getDuration(2)">
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
    <SectionCard v-if="step == 3" @done="finishSection()" title="Simple code snipet"
        description="Write code to sum numbers in array, e.g. sum([1, 2, 3]) -> 6" :time="getDuration(3)">
        <p>Possible answer:</p>
        <CodeBlock code="const sum = arr => arr.reduce((sum, x) => sum + x, 0)" />
        <hr>
        <p>Follow ups:</p>
        <ul>
            <li>let vs const?</li>
            <li>function vs arrow function?</li>
        </ul>
        <hr>
        <MultipleChoice @select="(selected: string[]) => setCodeRedFlags(selected)" header="Red Flags"
            :options="['Bad fundamentals', 'Non-idiomatic code']" />
    </SectionCard>
    <PillContainer v-if="step == 4" @select="(selected: string) => setFramework(selected)" header="Framework of choice"
        :options="['Vue', 'React', 'Angular']" />
    <SectionCard v-if="step == 5" @done="finishSection()" title="Login Form"
        :description="'Build a login form in ' + store.getters.framework" :time="getDuration(5)">
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
        <MultipleChoice @select="(selected: string[]) => setCodeRedFlags(selected)" header="Red Flags"
            :options="['No HTML knowledge', 'Lacks framework knowledge']" />
    </SectionCard>
    <SectionCard v-if="step == 6" @done="finishSection()" title="Reverse interview"
        description="Answer questions that the candidate may have.">
        <button @click="$emit('done')" class="pill">Finish</button>
    </SectionCard>
</template>
