<script setup lang="ts">
import { ref } from "vue";
import ConfigurationPart from "./components/ConfigurationPart.vue"
import InterviewPart from "./components/InterviewPart.vue"
import Summary from "./components/TheSummary.vue"

const showSummary = ref(false);
const isConfiguring = ref(false);

</script>

<template>
    <Summary :in-focus="showSummary"/>

    <ConfigurationPart v-if="isConfiguring"/>

    <InterviewPart v-else @done="showSummary = true"/>
</template>
