<template>
  <main :class="$style.mainWrapper">
    <slot />
  </main>
</template>

<style module>
.mainWrapper {
  box-sizing: border-box;
  padding: var(--size-regular);
}
</style>
