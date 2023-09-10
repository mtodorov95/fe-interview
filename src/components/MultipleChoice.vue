<script setup lang="ts">
import { ref } from 'vue';

defineProps(
    {
        options: {
            required: true,
            type: Array<string>
        }, header: String,
    }
)

const selectedOptions = ref([])

</script>

<template>
    <h2 class="header">{{ header }}</h2>
    <div class="choice-container">
        <div class="option" v-for="option in options" :key="option">
            <input type="checkbox" :id="option" :value="option" v-model="selectedOptions">
            <label :for="option">{{ option }}</label>
        </div>
    </div>
</template>

<style scoped>
.choice-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 1em;
    margin-bottom: 1em;
}
</style>
