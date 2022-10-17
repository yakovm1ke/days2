<template>
  <div v-if="days !== null">
    {{ content }}
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import {verb, noun} from 'plural-ru'

const props = defineProps({
	days: {
		type: Number as () => number | null,
		default: null,
	},
})

const content  = computed(() => {
	if (props.days === null) return ''

	if (props.days === 0) return 'Это сегодня :)'

	const days = Math.abs(props.days)
	const daysNoun = noun(days, 'день', 'дня', 'дней')

	if (props.days < 0) {
		return `${verb(days, 'Прошёл', 'Прошло', 'Прошло')} ${days} ${daysNoun}`
	}

	return `${verb(props.days, 'Остался', 'Осталось', 'Осталось')} ${props.days} ${daysNoun}`
})
</script>

<style module>
</style>