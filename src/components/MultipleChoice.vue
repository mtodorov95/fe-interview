<script setup lang="ts">
import { ref, watch } from 'vue';

defineProps(
    {
        options: {
            required: true,
            type: Array<string>
        }, header: String,
    }
)

const emit = defineEmits(['select'])

const selectedOptions = ref([])

watch(selectedOptions, (value) => emit('select', value));
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
    text-align: left;
}
</style>
