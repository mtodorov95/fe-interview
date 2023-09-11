<script setup lang="ts">

defineProps<{code: string}>()

</script>

<template>
    <div class="code-block">
        <code>
            <p v-for="line in code.split('\n')" :key="line">{{line}}</p>
        </code>
    </div>
</template>

<style scoped>
.code-block {
    background-color: var(--color-background-dark);
    padding: 1em;
    border-radius: 4px;
    color: var(--color-white);
    text-align: left;
}
</style>
