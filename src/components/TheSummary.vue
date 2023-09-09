<script setup lang="ts">
import { useStore } from 'vuex/types/index.js';

const store = useStore();
</script>

<template>
    <div class="summary">
        <h3>Summary</h3>

        <p>{{store.getters.targetPosition}}</p>
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
}
</style>
