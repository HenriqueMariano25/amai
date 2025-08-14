<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-8 py-8 px-8 xl:px-32 2xl:px-52">
    <span class="text-primary font-medium text-4xl mb-4">Atividades</span>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center">
      <div class="w-full md:w-[60%] flex">
        <img src="@/assets/images/foto_fundo.jpeg" alt="primeira imagem" class=" h-full rounded-xl shadow-lg w-full">
      </div>
      <div class="flex flex-col gap-2 text-xl cada-atividade">
        <span class="titulo text-zinc-900">Testes de Aceitação em Fábrica - TAF</span>
        <ul class="texto-atividade space-y-1">
          <li>Análise de estudos elétricos;</li>
          <li>Consultoria de sistemas de controle e proteção;</li>
          <li>Consolidação de projetos básicos;</li>
          <li>Elaboração de especificações técnicas;</li>
          <li>Análise de projeto executivo elétrico, SPCS e arquiterturas;</li>
        </ul>
      </div>
    </div>
    <divider/>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center">
      <div class="flex flex-col gap-2 text-xl cada-atividade">
        <span class="titulo text-zinc-900">Engenharia do proprietário</span>
        <ul class="texto-atividade space-y-1">
          <li>Análise de estudos elétricos;</li>
          <li>Consultoria de sistemas de controle e proteção;</li>
          <li>Consolidação de projetos básicos;</li>
          <li>Elaboração de especificações técnicas;</li>
          <li>Análise de projeto executivo elétrico, SPCS e arquiterturas;</li>
        </ul>
      </div>
      <div class="w-full md:w-[60%] flex max-lg:order-first">
        <img src="@/assets/images/foto_fundo.jpeg" alt="primeira imagem" class=" h-full rounded-xl shadow-lg w-full">
      </div>
    </div>
    <divider/>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center">
      <div class="w-full md:w-[60%] flex">
        <img src="@/assets/images/foto_fundo.jpeg" alt="primeira imagem" class=" h-full rounded-xl shadow-lg w-full">
      </div>
      <div class="flex flex-col gap-2 text-xl cada-atividade">
        <span class="titulo text-zinc-900">Testes de Aceitação em Fábrica - TAF</span>
        <ul class="texto-atividade text-xl">
          <li>Análise de estudos elétricos;</li>
          <li>Consultoria de sistemas de controle e proteção;</li>
          <li>Consolidação de projetos básicos;</li>
          <li>Elaboração de especificações técnicas;</li>
          <li>Análise de projeto executivo elétrico, SPCS e arquiterturas;</li>
        </ul>
      </div>
    </div>
    <divider/>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center">
      <div class="flex flex-col gap-2 text-xl cada-atividade">
        <span class="titulo text-zinc-900">Engenharia do proprietário</span>
        <ul class="texto-atividade text-xl">
          <li>Análise de estudos elétricos;</li>
          <li>Consultoria de sistemas de controle e proteção;</li>
          <li>Consolidação de projetos básicos;</li>
          <li>Elaboração de especificações técnicas;</li>
          <li>Análise de projeto executivo elétrico, SPCS e arquiterturas;</li>
        </ul>
      </div>
      <div class="w-full md:w-[60%] flex max-lg:order-first">
        <img src="@/assets/images/foto_fundo.jpeg" alt="primeira imagem" class=" h-full rounded-xl shadow-lg w-full">
      </div>
    </div>
    <divider/>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center">
      <div class="w-full md:w-[60%] flex">
        <img src="@/assets/images/foto_fundo.jpeg" alt="primeira imagem" class=" h-full rounded-xl shadow-lg w-full">
      </div>
      <div class="flex flex-col gap-2 text-xl cada-atividade">
        <span class="titulo text-zinc-900">Testes de Aceitação em Fábrica - TAF</span>
        <ul class="texto-atividade text-xl">
          <li>Análise de estudos elétricos;</li>
          <li>Consultoria de sistemas de controle e proteção;</li>
          <li>Consolidação de projetos básicos;</li>
          <li>Elaboração de especificações técnicas;</li>
          <li>Análise de projeto executivo elétrico, SPCS e arquiterturas;</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titulo {
  font-weight: 500;
  font-size: 32px;
  text-decoration: red;
}

.texto-atividade{
  list-style: none;
  font-size: 24px /* 20px */;
  line-height: 1.75rem /* 28px */;
  max-width: 100vw;
  white-space: break-spaces;
}
</style>