<template>
  <main :class="$style.mainWrapper">
    <div :class="$style.container">
      <slot />
    </div>
  </main>
</template>

<style module>
.mainWrapper {
  box-sizing: border-box;
  padding: var(--size-large);
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
