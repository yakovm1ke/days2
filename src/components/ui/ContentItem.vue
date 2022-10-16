<template>
  <div :class="$style.contentItem">
    <slot />
  </div>
</template>

<style module>
.contentItem {
  width: 100%;
  box-sizing: border-box;
  padding: var(--size-small);
  border-radius: var(--size-small);
  border: 2px solid var(--d2-blue);
}
</style>