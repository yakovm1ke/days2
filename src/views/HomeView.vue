<script setup lang="ts">
import MainWrapper from '@/components/ui/MainWrapper.vue'
import ContentItem from '@/components/ui/ContentItem.vue'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import {differenceInDays} from 'date-fns'
import { ref, type Ref } from 'vue'
import DaysCounter from '../components/DaysCounter.vue'

const dateText = ref('')
const days: Ref<null | number> = ref(null)

function handleInput(value: string) {
	dateText.value = value

	if (!dateText.value) {
		days.value = null
		return
	}

	const date = new Date(new Date(dateText.value).toDateString())
	const today = (new Date(new Date().toDateString()))

	days.value = differenceInDays(date, today)
}

function handleClear() {
	days.value = null
	dateText.value = ''
}
</script>

<template>
  <MainWrapper>
    <ContentItem>
      <div :class="$style.row">
        <Input
          type="date"
          :value="dateText"
          @handle-input="handleInput"
        />
        <Button
          v-if="days"
          @click="handleClear"
        >
          Очистить
        </Button>
      </div>

      <DaysCounter
        :days="days"
        :class="$style.counter"
      />
    </ContentItem>
  </MainWrapper>
</template>

<style module>
.row {
  display: flex;
  gap: var(--size-small);
}
.counter {
  margin-top: var(--size-small);
}
</style>