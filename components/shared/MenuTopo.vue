<script setup lang="ts">

</script>

<template>
  <div class="bg-primary flex justify-between text-white px-2 py-1">
    <div class="flex flex-col justify-center items-center">
      <div class="flex items-center">
        <img src="../../assets/images/am_ai_text.png" alt="Logo" class="h-[45px] w-fit"/>
        <img src="../../assets/images/am_ai_icon.png" alt="Icone" class="h-[35px] w-fit"/>
      </div>

<!--      <span class="text-xs">Inteligência Aplicada na Gestão de Ativos</span>-->
    </div>
    <div class="flex gap-4 text-xl items-center">
      <NuxtLink to="/" class="opcao-menu">
        <span>HOME</span>
      </NuxtLink>
      <NuxtLink to="/quem_somos" class="opcao-menu">
        <span>QUEM SOMOS</span>
      </NuxtLink>
      <NuxtLink to="/nossos_servicos" class="opcao-menu">
        <span>NOSSOS SERVIÇOS</span>
      </NuxtLink>
      <NuxtLink to="/portfolio" class="opcao-menu">
        <span>PORTFÓLIO</span>
      </NuxtLink>
      <NuxtLink to="/contatos" class="opcao-menu">
        <span>CONTATOS</span>
      </NuxtLink>
      <NuxtLink to="/noticias" class="opcao-menu">
        <span>NOTÍCIAS</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

.opcao-menu:hover {
  opacity: 0.6;
  scale: 1.2;
  font-weight: 500;
  transition-duration: 0.2s;
}
</style>