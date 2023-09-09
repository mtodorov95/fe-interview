<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ title: string }>()

const count = ref(0)
</script>

<template>
    <div class="card">
        <h2>{{ title }}</h2>

        <button type="button" @click="count++">count is {{ count }}</button>
    </div>
</template>

<style scoped></style>
