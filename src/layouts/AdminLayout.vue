<template>
    <div class="common-layout h-screen">
        <div class="w-full">
            <header
                class="h-16 flex items-center justify-between px-5 border-b sperator"
            >
                <div class="flex items-center gap-[150px]">
                    <p class="text-2xl font-bold">ADMIN</p>
                    <BaseInput placeholder="search"></BaseInput>
                </div>

                <div class="">
                    <BaseButton label="Login" raised> </BaseButton>
                </div>
            </header>
            <div class="flex h-screen">
                <SideMenu :menuItems="ADMIN_SIDE_MENU"></SideMenu>
                <div class="w-full p-4 space-y-4">
                    <Breadcrumb :items="BREADCRUMB"></Breadcrumb>
                    <p v-if="getTitleRoutes" class="font-bold text-2xl">
                        {{ getTitleRoutes }}
                    </p>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import SideMenu from '@/components/elements/sidemenu/SideMenu.vue';
import Breadcrumb from '@/components/elements/Breadcrumb.vue';

import { ADMIN_SIDE_MENU, BREADCRUMB } from '@/constants/element.js';

defineProps({
    title: {
        type: String,
        default: () => '',
    },
});
const route = useRoute();

const getTitleRoutes = computed(() => {
    const mapTitle = {
        'admin-user': 'ALL USERS',
        'admin-user-add': 'ADDING USERS',
    };
    return mapTitle[route.name] || '';
});
</script>

<style></style>
