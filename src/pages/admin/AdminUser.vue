<template>
    <BaseTable :value="fetchContext?.data ?? []" :columns="renderColumns">
        <template #avatar="{ data }">
            <img class="w-[48px] h-[48px]" :src="data?.avatar" />
        </template>
        <template #edit="{ data }">
            <BaseIcon
                class="clicked"
                name="edit"
                @click="
                    $router.push({
                        name: 'admin-user-edit',
                        params: {
                            id: data?.id,
                        },
                    })
                "
            ></BaseIcon>
        </template>
        <template #delete="{ data }">
            <BaseIcon
                class="clicked"
                name="delete"
                @click="handleDelete(data?.id)"
            ></BaseIcon>
        </template>

        <template #empty> No users found. </template>

        <template #loading> Loading customers data. Please wait. </template>
    </BaseTable>
    <BasePaginator
        v-model:first="page"
        @page="handleChangePage"
        :rows="fetchContext?.metaData?.per_page"
        :totalRecords="fetchContext?.metaData?.total"
    ></BasePaginator>
    <Toast></Toast>
</template>

<script setup>
import { ref, inject } from 'vue';

import { REPOSITORY_USERS } from '@/constants/service.js';
import { factoryRepositories } from '@/plugins/service.js';
import useFetchData from '@/composable/fetchApi.js';

import Toast from 'primevue/toast';

const showToast = inject('$toast');

const { fetchContext, resultQuery, fetchData } = useFetchData(
    REPOSITORY_USERS,
    'getUsers'
);

const renderColumns = [
    {
        name: 'ID',
        field: 'id',
    },
    {
        name: 'Avatar',
        field: 'avatar',
    },
    {
        name: 'First Name',
        field: 'first_name',
    },
    {
        name: 'Last Name',
        field: 'last_name',
    },
    {
        name: 'Email',
        field: 'email',
    },
    {
        name: 'Edit',
        field: 'edit',
    },
    {
        name: 'Delete',
        field: 'delete',
    },
];

const page = ref(0);

const handleChangePage = e => {
    if (e === 0) resultQuery.value.page = 1;
    resultQuery.value.page = page.value / fetchContext.metaData.per_page + 1;
};

const handleDelete = async id => {
    if (!id) return;
    await factoryRepositories(REPOSITORY_USERS).deleteUser(id);
    showToast('success', 'Success', 'Please check network tab');
    fetchData();
};
</script>

<style lang="scss" scoped></style>
