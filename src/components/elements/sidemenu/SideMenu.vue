<template>
    <div class="w-[249px] px-3 border-r sperator space-y-5">
        <template v-for="item in menuItems" :key="item.name">
            <MenuItem :data="item"></MenuItem>
        </template>
    </div>
</template>

<script setup>
import MenuItem from '@/components/elements/sidemenu/MenuItem.vue';
defineProps({
    menuItems: {
        type: Array,
        default: () => [],
    },
});
</script>

<style lang="scss" scoped></style>
