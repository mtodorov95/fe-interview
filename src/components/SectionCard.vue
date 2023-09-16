<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const emit = defineEmits(['done']);


const props = defineProps(
    { title: String, description: { type: String, required: false }, time: { type: Number, required: false } }
)

const timePassed = ref(0);
const isPlaying = ref(false)
const progress = computed(() => (timePassed.value / (props.time! * 60)) * 100);

let interval: number;
onMounted(() => {
    playPause()
});

onBeforeUnmount(() => {
    if (interval) {
        clear();
    }
});

const startTimer = () => {
    if (props.time) {
        interval = setInterval(() => {
            timePassed.value += 1;

            if (timePassed.value >= props.time! * 60) {
                clear();
                emit('done');
            }
        }, 1000)
    }
}

const playPause = () => {
    if (isPlaying.value == true) {
        isPlaying.value = false;
        clear();
    } else {
        isPlaying.value = true;
        startTimer()
    }
}

const clear = () => {
    clearInterval(interval)
}

</script>

<template>
    <div class="card section flex-column">
        <button v-if="props.time" @click="playPause()" class="pill pill-primary play-pause" >{{isPlaying ? 'Pause' : 'Play'}}</button>
        <h2>{{ title }}</h2>
        <p v-if="description" class="description">{{ description }}</p>
        <slot></slot>
        <div v-if="props.time" :style="{ 'width': progress + '%' }" class="timer" :class="progress >= 90 ? 'warn' : ''"></div>
        <button @click="$emit('done')" class="pill">Next</button>
    </div>
</template>

<style scoped>
.section {
    max-width: 600px;
    position: relative;
}

.timer {
    max-width: 100%;
    height: 15px;
    background-color: var(--color-secondary);
    font-size: 12px;
}

.warn {
    background-color: var(--color-primary);
}

.play-pause {
    position: absolute;
    top: 3%;
    right: 3%;
    width: 70px;
}
</style>
