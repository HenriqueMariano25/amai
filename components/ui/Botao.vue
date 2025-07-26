<script setup lang="ts">
defineProps({
  texto: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <div class="bg-primary hover:bg-primary-dark rounded py-2 px-4 text-white text-center  text-2xl font-bold cursor-pointer">
    {{ texto }}
  </div>
</template>

<style scoped>

</style>