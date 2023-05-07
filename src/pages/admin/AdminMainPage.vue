<template>
    <AdminLayout>
        <router-view></router-view>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/layouts/AdminLayout.vue';
defineProps({
    title: {
        type: String,
        default: () => '',
    },
});
</script>

<style></style>
