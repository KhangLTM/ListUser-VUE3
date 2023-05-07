<template>
    <div class="mt-5 flex justify-between clicked">
        <div
            :class="[
                'w-full text-base rounded-lg py-1 px-2 font-semibold',
                route.name === props.data.name
                    ? 'text-black'
                    : 'text-gray-500',
                { 'hover:bg-gray-200 hover:text-black': !hasChild },
            ]"
            @click="
                async () => {
                    await $router.push({ name: data?.name });
                }
            "
        >
            <div
                :class="[
                    `menu__item--level-${level}  `,
                    { 'flex justify-between items-center': hasChild },
                ]"
            >
                <p
                    @click="
                        () => {
                            if (showChild) showChild = false;
                        }
                    "
                >
                    {{ data.label }}
                </p>
                <div
                    v-if="hasChild"
                    class="clicked"
                    @click="showChild = !showChild"
                >
                    <BaseIcon :name="showChild ? 'expand_less' : 'expand_more'">
                    </BaseIcon>
                </div>
            </div>
            <template v-if="showChild && hasChild">
                <MenuItem
                    v-for="childItem in data.children"
                    :key="childItem.label"
                    :level="level + 1"
                    :data="childItem"
                />
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    data: {
        required: true,
        type: Array,
        default: () => [],
    },
    level: {
        type: Number,
        default: () => 1,
    },
});

const route = useRoute();

const showChild = ref(false);

const hasChild = computed(() => {
    return props.data?.children?.length ?? false;
});
</script>

<style lang="scss" scoped>
.menu {
    &__item {
        margin-top: 20px;

        @for $i from 2 through 3 {
            &--level-#{$i} {
                margin-left: calc(#{$i} * 0.5rem);
            }
        }
    }
}
</style>
