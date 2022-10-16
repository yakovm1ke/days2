<script setup lang="ts">
import MainWrapper from '@/components/ui/MainWrapper.vue'
import ContentItem from '@/components/ui/ContentItem.vue'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'
import { ref } from 'vue'

const date = ref('')

function handleInput(value: string) {
	date.value = value
}

function handleSubmit(event: Event) {
	event.preventDefault()

	if (!date.value) return
}
</script>

<template>
  <MainWrapper>
    <ContentItem>
      <form
        :class="$style.row"
        @submit="handleSubmit"
      >
        <Input
          type="date"
          :value="date"
          @handle-input="handleInput"
        />
        <Button>
          Создать
        </Button>
      </form>
    </ContentItem>
  </MainWrapper>
</template>

<style module>
.row {
  display: flex;
  gap: var(--size-small);
}
</style>