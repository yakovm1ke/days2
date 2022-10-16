<template>
  <button :class="$style.button">
    <slot />
  </button>
</template>

<style module>
.button {
  outline: none;
  border: 2px solid var(--d2-neutral);
  border-radius: var(--size-extra-small);
  background: white;
}
.button:hover {
  cursor: pointer;
  background: var(--d2-neutral);
  color: white;
}
</style>
