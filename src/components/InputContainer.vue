<script setup lang="ts">

    defineProps<{ header: string }>()
    
</script>

<template>
    <h2 class="header">{{ header }}</h2>
    <div class="pill-container">
        <button @click="$emit('select', option)" class="pill" v-for="option in options" :key="option">{{option}}</button>
    </div>
</template>

<style scoped>
.pill-container {
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
    margin-top: 1em;
    margin-bottom: 1em;
}
</style>
