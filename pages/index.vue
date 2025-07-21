<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="image-wrapper relative">
      <div class="bg-black/70 absolute w-full h-full fundo"/>
      <img src="@/assets/images/foto_fundo.jpeg" alt="Minha imagem"/>
      <div class="absolute flex flex-col bottom-12 right-12 text-white items-end rounded p-4 gap-1 escrita">
        <span class="text-xl font-medium">AM.AI ENERGIA</span>
        <span class="text-4xl font-normal">"Inteligência Aplicada na Gestão de Ativos."</span>
      </div>
    </div>
    <div class="flex flex-col gap-4 px-24 text-center ">
      <span class="text-3xl font-bold">Soluções aplicadas com inteligência </span>
      <div class="flex gap-4 ">
        <div class="text-start flex flex-col gap-4 w-fit justify-center">
          <span class="text-2xl text-start">AM.AI trabalha com uma equipe de profissionais altamente capacitados e experientes em negócios, projetos, gestão de ativos e comissionamento de subestações, com ampla experiência no setor de energia elétrica.</span>
          <div
              class="bg-primary hover:bg-primary-dark rounded p-2 text-white text-center  text-2xl font-bold cursor-pointer">
            Conheça a AM.AI
          </div>
        </div>
        <div class="flex gap-2 relative h-[420px] w-10/12 justify-center">
          <div class="border-[12px] border-white rounded-xl self-end">
            <img src="@/assets/images/img01.jpeg" alt="img 01" class="w-[280px] h-[260px] rounded-xl ">
          </div>
          <div class="border-[12px] border-white -ml-28 rounded-xl h-fit overflow-hidden bg-white">
            <img src="@/assets/images/img02.jpeg" alt=" img 02" class="w-[280px] h-[260px] rounded-xl ">
          </div>
          <div class="border-[12px] border-white -ml-24 rounded-xl self-end bg-white">
            <img src="@/assets/images/foto_fundo.jpeg" alt="img 03 " class="w-[280px] h-[260px] rounded-xl ">
          </div>
        </div>
      </div>
    </div>
    <div class="solucao-ativos flex flex-col relative">
      <div class="h-full w-full absolute bg-black/60 z-0"/>
      <div class="py-8 px-24 z-10 flex flex-col gap-12">
        <span class="text-center text-3xl font-bold text-white">Soluções para ativos de energia</span>
        <div class="flex justify-around gap-24">
          <div class="item-solucao-ativo">
            <div>
              <span class="font-bold text-xl">Subestações</span>
            </div>
            <span class="text-start">Texto de texto para verificar como vai ficar essa infrmação</span>
          </div>
          <div class="item-solucao-ativo">
            <div>
              <span class="font-bold text-xl">Renováveis</span>
            </div>
            <span class="text-start">Texto de texto para verificar como vai ficar essa infrmação</span>
          </div>
          <div class="item-solucao-ativo">
            <div>
              <span class="font-bold text-xl">Comissionamento</span>
            </div>
            <span class="text-start">Texto de texto para verificar como vai ficar essa infrmação</span>
          </div>
        </div>
        <div class="flex justify-center gap-32">
          <div class="item-solucao-ativo">
            <div>
              <span class="font-bold text-xl">Gestão de ativos</span>
            </div>
            <span class="text-start">Texto de texto para verificar como vai ficar essa infrmação</span>
          </div>
          <div class="item-solucao-ativo">
            <div>
              <span class="font-bold text-xl">Treinamentos</span>
            </div>
            <span class="text-start">Texto de texto para verificar como vai ficar essa infrmação</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-wrapper {
  width: 100%;
  max-height: calc(100vh - 53px);
  overflow: hidden;
  position: relative;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* mantém proporção e corta o excesso */
  object-position: center; /* centraliza no meio */
  display: block;
}

.fundo:hover {
  opacity: 0.3;
  transition-duration: 0.2s;

}

.fundo:hover ~ .escrita {
  opacity: 0.5;
  transition-duration: 0.2s;
}

.escrita:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.escrita:hover + .fundo {
  opacity: 1;
  transition-duration: 0.2s;
}

.solucao-ativos {
  background-image: url("@/assets/images/segunda-foto-home.jpg");
}

.item-solucao-ativo{
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  width: 20%;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  justify-content: center;
  text-align: center;
  gap: 8px;
}

</style>