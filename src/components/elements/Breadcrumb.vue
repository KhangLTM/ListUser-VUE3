<template>
    <div class="flex">
        <template v-for="(item, idx) in items" :key="idx">
            <div
                v-if="route.name === item.name || idx === 0"
                :class="`${itemClass} ${activeClass(item.name)} `"
                @click="$router.push({ name: item.name })"
            >
                <BaseIcon :name="item.icon"></BaseIcon>
                <p>{{ item.label }}</p>
                <BaseIcon
                    v-if="route.name !== item.name"
                    name="chevron_right"
                ></BaseIcon>
            </div>
        </template>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const props = defineProps({
    items: {
        type: Array,
        default: () => [],
    },
    classItems: {
        type: String,
        default: () => '',
    },
});
const route = useRoute();

const activeClass = activeItem => {
    if (route.name.includes(activeItem)) return 'font-normal';
};
const itemClass = computed(() => {
    return `flex items-center gap-1 font-semibold clicked ${props.classItems}`;
});
</script>

<style lang="scss" scoped></style>
