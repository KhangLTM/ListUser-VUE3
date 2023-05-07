<template>
    <Paginator v-bind="defaultProps">
        <template v-for="slot in Object.keys($slots)" v-slot:[slot]>
            <slot :name="slot"></slot>
        </template>
    </Paginator>
</template>

<script setup>
import { computed, useAttrs } from 'vue';
import Paginator from 'primevue/paginator';

const defaultProps = computed(() => {
    return {
        template:"PageLinks",
        ...useAttrs(),
    };
});
</script>

<style lang="scss"></style>
