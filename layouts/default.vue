<script setup lang="ts">

import MenuTopo from "~/components/shared/MenuTopo.vue";
import Rodape from "~/components/shared/Rodape.vue";
import MenuTopoMobile from "~/components/shared/MenuTopoMobile.vue";

const {ehMobile} = useEhMobile()

const mostrarPanelMenuLateralMobile = ref<boolean>(false)

</script>

<template>
  <div class="relative" :class="{'mt-[64px]': ehMobile}">
    <MenuTopo v-if="!ehMobile"/>
    <MenuTopoMobile v-if="ehMobile"/>
    <slot/>
    <Rodape/>
  </div>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Kanit', sans-serif;
}
</style>