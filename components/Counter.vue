<template>
  <div>
    <button @click="increment">Increase</button>
    <p>{{ count }}</p>
    <button @click="decrement">Decrease</button>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0)
function increment() {
  count.value++
}
function decrement() {
  count.value--
}
</script>



<style></style>
