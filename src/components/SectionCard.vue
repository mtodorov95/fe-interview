<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';


const props = defineProps(
    { title: String, description: { type: String, required: false }, time: { type: Number, required: true } }
)

const timePassed = ref(0);
let interval: number;
onMounted(() => {
    interval = setInterval(() => {
        timePassed.value += 1;

        if (timePassed.value >= props.time * 60) {
            clear();
        }
    }, 1000)
});

const clear = () => clearInterval(interval);
const progress = computed(() => (timePassed.value / (props.time * 60)) * 100);
</script>

<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <p class="description">{{ description }}</p>
        <slot></slot>
        <div :style="{ 'width': progress + '%' }" class="timer" :class="progress >= 90 ? 'warn' : ''"></div>
    </div>
</template>

<style scoped>
.timer {
    max-width: 100%;
    height: 15px;
    background-color: var(--color-secondary);
    font-size: 12px;
}

.warn {
    background-color: var(--color-primary);
}
</style>
