<template>
    <span :style="iconStyle" class="material-symbols-outlined">
        {{ name }}</span
    >
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    fill: {
        type: Boolean,
        default: () => false,
    },
    name: {
        type: String,
        required: true,
        default: () => '',
    },
    size: {
        type: Number,
        default: () => 16,
    },
    weight: {
        type: Number,
        default: () => 500,
    },
});
const iconStyle = computed(() => {
    return `font-variation-settings: 'FILL' ${+props.fill}, 'wght' ${
        props.weight
    }, 'GRAD' 0, 'opsz' ${props.size};`;
});
</script>

<style></style>
