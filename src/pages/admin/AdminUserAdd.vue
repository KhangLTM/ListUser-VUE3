<template>
    <div class="bg-white rounded-md w-[400px] space-y-5">
        <div v-for="field in renderForm" :key="field.key" class="space-y-2">
            <p>{{ field.label }}</p>
            <BaseInput
                v-model="formData[field.key]"
                class="w-full"
                @input="validate(formData)"
            ></BaseInput>
            <div v-if="errors[field.key]" class="text-red-400">
                {{ errors[field.key] }}
            </div>
        </div>
        <div class="flex self-center justify-left">
            <BaseButton :disabled="hasErrors" @click="handleSubmit"
                >Submit</BaseButton
            >
        </div>
    </div>
    <Toast></Toast>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import { useRoute } from 'vue-router';

import cloneDeep from 'lodash/cloneDeep';
import isEmpty from 'lodash/isEmpty';

import { REPOSITORY_USERS } from '@/constants/service.js';
import { factoryRepositories } from '@/plugins/service.js';

import useValidator from '@/composable/validator.js';
import useFetchData from '@/composable/fetchApi.js';

import Toast from 'primevue/toast';

const route = useRoute();

const showToast = inject('$toast');

const initFormData = {
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
};

const formData = ref(cloneDeep(initFormData));

const renderForm = [
    {
        key: 'first_name',
        label: 'First Name',
        rules: [{ name: 'required' }],
    },
    {
        key: 'last_name',
        label: 'Last Name',
        type: 'text',
        rules: [{ name: 'required' }],
    },
    {
        key: 'email',
        label: 'Email',
        rules: [{ name: 'email' }],
    },
    {
        key: 'avatar',
        label: 'Avatar',
        rules: [{ name: 'required' }],
    },
];

const isEdit = computed(() => !!route.params.id);

if (isEdit.value) {
    const { fetchContext, fetchData } = useFetchData(
        REPOSITORY_USERS,
        'detailUser',
        {
            userId: route?.params?.id,
        },
        { immediate: false }
    );
    onMounted(async () => {
        await fetchData();
        formData.value = cloneDeep(fetchContext.data);
        delete formData.value.id;
    });
}

const { validate, errors, isSubmit } = useValidator(renderForm);

const hasErrors = computed(() => !isEmpty(errors.value));

const handleSubmit = async () => {
    try {
        isSubmit.value = true;
        const isValid = validate(formData.value);

        if (!isValid) return;

        let response;

        if (isEdit.value) {
            response = await factoryRepositories(REPOSITORY_USERS).updateUser({
                userId: route?.params?.id,
                data: cloneDeep(formData.value),
            });
        } else
            response = await factoryRepositories(REPOSITORY_USERS).createUser(
                cloneDeep(formData.value)
            );
        if ([201, 200].includes(response.status)) {
            formData.value = cloneDeep(initFormData);
            isSubmit.value = false;
            showToast('success', 'Success', 'Please check network tab');
        }
    } catch (e) {
        console.log(e);
    }
};
</script>

<style lang="scss" scoped></style>
