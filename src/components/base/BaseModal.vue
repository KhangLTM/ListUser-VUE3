<template>
    <Dialog v-bind="defaultProps">
        <template v-for="slot in Object.keys($slots)" v-slot:[slot]>
            <slot :name="slot"></slot>
        </template>
    </Dialog>
</template>

<script setup>
import {computed , useAttrs} from 'vue'
import Dialog from 'primevue/dialog';

const defaultProps = computed(()=>{
  return {
    ...useAttrs()
  }
})
</script>

<style lang="scss" scoped></style>
