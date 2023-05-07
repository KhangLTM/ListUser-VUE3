<template>
    <InputText v-bind="defaultProps">
        <template v-for="slot in Object.keys($slots)" v-slot:[slot]>
            <slot :name="slot"></slot>
        </template>
    </InputText>
</template>

<script setup>
import { computed, useAttrs } from 'vue';
import InputText from 'primevue/inputtext';

const defaultProps = computed(() => {
    return {
        ...useAttrs(),
    };
});
</script>

<style lang="scss"></style>
