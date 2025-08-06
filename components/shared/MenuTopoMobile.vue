<script setup lang="ts">
import {Icon} from '@iconify/vue';
import {ref} from 'vue';

const opcoesMenu = ref([{
  nome: 'Home',
  rota: '/'
}, {
  nome: 'Sobre nós',
  rota: '/sobre_nos'
}, {
  nome: 'Atividades',
  rota: '/atividades'
}, {
  nome: 'Obras',
  rota: '/obras'
}, {
  nome: 'Contatos',
  rota: '/contatos'
}, {
  nome: 'Notícias',
  rota: '/noticias'
}])

const mostrarOpcoesMenu = ref<boolean>(false);

</script>

<template>
  <div class="fixed top-0 left-0 z-50 w-[100vw]">
    <div class="w-full bg-primary p-2 flex justify-between items-center"
         @click="mostrarOpcoesMenu = !mostrarOpcoesMenu">
      <div class="flex gap-2 items-center">
        <img src="../../assets/images/am_ai_text.png" alt="Logo" class="h-[45px] w-fit"/>
        <img src="../../assets/images/am_ai_icon.png" alt="Icone" class="h-[35px] w-fit"/>
      </div>
      <Icon icon="mingcute:menu-fill" width="48" height="48" style="color: #fff" v-if="!mostrarOpcoesMenu"/>
      <Icon icon="material-symbols:close-rounded" width="48" height="48" style="color: #fff" v-if="mostrarOpcoesMenu"/>
    </div>
    <div class="w-full flex flex-col bg-secondary text-2xl opcoes-menu" :class="{'mostrar': mostrarOpcoesMenu}">
      <div v-for="opcao in opcoesMenu" class="flex justify-center items-center border-b border-white" :key="opcao.nome">
        <NuxtLink :to="opcao.rota" class="w-full text-center text-white p-2">
          {{ opcao.nome }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.opcoes-menu {
  background-color: rgb(41 96 144);
  opacity: 0;
  height: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  display: none;

  transition-duration:  0.1s;
}

.mostrar {
  max-height: 100%;
  opacity: 1 !important;
  height: 100% !important;
  display: block
}
</style>