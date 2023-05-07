<template>
    <Button v-bind="defaultProps">
        <template v-for="slot in Object.keys($slots)" v-slot:[slot]>
            <slot :name="slot"></slot> </template
    ></Button>
</template>

<script setup>
import { computed, useAttrs } from 'vue';
import Button from 'primevue/button';

const defaultProps = computed(() => {
    return {
        ...useAttrs(),
    };
});
</script>

<style lang="scss" scoped></style>
