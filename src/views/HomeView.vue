<script setup lang="ts">
import MainWrapper from '@/components/ui/MainWrapper.vue'
import Calendar from '../components/ui/Calendar.vue'
</script>

<template>
  <MainWrapper>
    <Calendar />
  </MainWrapper>
</template>

<style module>
.row {
  display: flex;
  place-items: center;
  gap: var(--size-small);
  margin-top: var(--size-small);
}
</style>