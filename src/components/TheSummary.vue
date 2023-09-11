<script setup lang="ts">
import { useStore } from 'vuex';

defineProps<{inFocus: boolean}>()

const store = useStore(); 
</script>

<template>
    <div class="summary" :class="inFocus ? 'focus' : ''">
        <h3>Summary</h3>
        <p v-if="store.getters.targetPosition">Position: {{ store.getters.targetPosition }}</p>
        <p v-if="store.getters.experience">Experience: {{ store.getters.experience }}</p>
        <div v-if="store.getters.redFlags.length">
            <p>Prior exp. Red Flags:</p>
            <ul>
                <li v-for="flag in store.getters.redFlags" :key="flag">{{ flag }}</li>
            </ul>
        </div>
        <div v-if="store.getters.codeRedFlags.length">
            <p>Code Red Flags:</p>
            <ul>
                <li v-for="flag in store.getters.codeRedFlags" :key="flag">{{ flag }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.summary {
    position: absolute;
    top: 0;
    left: 50px;
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 1em;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    min-width: 150px;
    max-width: 300px;
    text-align: left;
}

h3 {
    width: 100%;
    text-align: center;
}

.focus {
    position: inherit;
    border-radius: 4px;
    max-width: 100%;
}
</style>
