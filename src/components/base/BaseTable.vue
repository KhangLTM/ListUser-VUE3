<template>
    <DataTable :value="defaultProps">
        <Column
            v-for="column in columns"
            :key="column.field"
            :header="column.name"
        >
            <template #body="slotProps">
                <slot :name="column.field" :data="slotProps.data">
                    {{ slotProps.data[column.field] }}
                </slot>
            </template>
        </Column>
    </DataTable>
</template>
<script setup>
import { computed, useAttrs } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

defineProps({
    columns: {
        type: Array,
        default: () => [],
    },
});
const defaultProps = computed(() => {
    return {
        ...useAttrs(),
    };
});
</script>

<style lang="scss" scoped></style>
