<script setup lang="ts">
import {Icon} from "@iconify/vue";

defineProps({
  texto: {
    type: String,
    default: ''
  },
  icone: {
    type: String,
    default: ''
  },
})

</script>

<template>
  <div
      class="bg-primary hover:bg-primary-dark rounded py-2 px-4 text-white text-center items-center text-center justify-center gap-1 flex text-2xl font-bold cursor-pointer">
    <Icon v-if="icone !== null && icone !== ''" :icon="icone" width="24" height="24" style="color: #fff"/>
{{ texto }}
  </div>
</template>

<style scoped>

</style>