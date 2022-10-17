<template>
  <div :class="$style.inputWrapper">
    <label
      v-if="label"
      :class="$style.label"
    >
      {{ label }}
    </label>
    <input
      :class="$style.input"
      :value="value"
      :placeholder="placeholder"
      :type="type"
      @input="handleInput"
    >
  </div>
</template>

<script lang='ts' setup>
const emits = defineEmits(['handleInput'])
const props = defineProps({
	label: {
		type: String,
		default: '',
	},
	value: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
		default: '',
	},
	type: {
		type: String,
		default: '',
	},
})

function handleInput (event: Event) {
	emits('handleInput', (event.target as HTMLInputElement).value)
}
</script>

<style module>
.inputWrapper {
  box-sizing: border-box;
  width: 100%;
}
.label {
}
.input {
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border: 2px solid var(--d2-neutral);
  padding: var(--size-extra-small);
  border-radius: var(--size-extra-small);
  background: white;
}
</style>