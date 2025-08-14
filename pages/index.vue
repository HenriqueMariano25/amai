<script setup lang="ts">
import Botao from "~/components/ui/Botao.vue";
import {ref} from 'vue';

const clientes = ref(['@/assets/images/cliente.png', '../assets/images/cliente.png', '../assets/images/cliente.png', '../assets/images/cliente.png'])

</script>

<template>
  <div class="flex flex-col">
    <div class="image-wrapper relative">
      <div class="bg-black/70 absolute w-full h-full fundo"/>
      <img src="@/assets/images/foto_fundo.jpeg" alt="Minha imagem"/>
      <div class="absolute flex flex-col bottom-12 right-12 text-white items-end rounded p-4 gap-1 escrita">
        <span class="text-xl font-medium">AM.AI ENERGIA</span>
        <span class="text-4xl font-normal">"Inteligência Aplicada na Gestão de Ativos."</span>
      </div>
    </div>
    <div class="flex flex-col gap-4 px-8 lg:px-24 text-center mt-8 mb-8 ">
      <span class="text-3xl font-bold">Soluções aplicadas com inteligência </span>
      <div class="flex gap-4 ">
        <div class="text-start flex flex-col gap-4 w-fit justify-center">
          <span class="text-xl lg:text-2xl text-start">AM.AI trabalha com uma equipe de profissionais altamente capacitados e experientes em negócios, projetos, gestão de ativos e comissionamento de subestações, com ampla experiência no setor de energia elétrica.</span>
          <div
              class="bg-primary hover:bg-primary-dark rounded p-2 text-white text-center  text-2xl font-bold cursor-pointer">
            Conheça a AM.AI
          </div>
        </div>
        <div class="lg:flex gap-2 relative h-[420px] w-10/12 justify-center hidden ">
          <div class="border-[12px] border-white rounded-xl self-end">
            <img src="@/assets/images/img01.jpeg" alt="img 01" class="w-[280px] h-[260px] rounded-xl shadow">
          </div>
          <div class="border-[12px] border-white -ml-28 rounded-xl h-fit overflow-hidden bg-white">
            <img src="@/assets/images/img02.jpeg" alt=" img 02" class="w-[280px] h-[260px] rounded-xl  shadow">
          </div>
          <div class="border-[12px] border-white -ml-24 rounded-xl self-end bg-white">
            <img src="@/assets/images/foto_fundo.jpeg" alt="img 03 " class="w-[280px] h-[260px] rounded-xl shadow">
          </div>
        </div>
      </div>
    </div>
    <div class="solucao-ativos flex flex-col relative">
      <div class="h-full w-full absolute bg-black/60 z-0"/>
      <div class="py-8 px-8 lg:px-24 z-10 flex flex-col gap-8 lg:gap-12">
        <span class="text-center text-3xl font-bold text-white">Soluções para ativos de energia</span>
        <div class="flex flex-col md:flex-row justify-around gap-8 lg:gap-24">
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
        <div class="flex flex-col md:flex-row justify-center gap-8 lg:gap-32">
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
    <div class="p-8 bg-gray-100 grid grid-cols-6">
      <div class="col-span-4">
        <img src="@/assets/images/foto_fundo.jpeg" alt="img 03 " class=" rounded">
      </div>
      <div class="text-2xl col-span-2 -ml-6 justify-center flex flex-col gap-8">
        <div class="item-atividades text-primary">
          <div class="hex-wrapper">
            <div class="hex-inner"/>
          </div>
          <span>Engenharia do proprietário</span>
        </div>
        <div class="item-atividades text-primary">
          <div class="hex-wrapper">
            <div class="hex-inner"/>
          </div>
          <span>Testes de Aceitação em Fábrica - TAF</span>
        </div>
        <div class="item-atividades text-primary">
          <div class="hex-wrapper">
            <div class="hex-inner"/>
          </div>
          <span>Testes de Aceitação em Campo - TAC</span>
        </div>
        <div class="item-atividades text-primary">
          <div class="hex-wrapper">
            <div class="hex-inner"/>
          </div>
          <span>Gestão de Ativos</span>
        </div>
        <div class="item-atividades text-primary">
          <div class="hex-wrapper">
            <div class="hex-inner"/>
          </div>
          <span>O&M</span>
        </div>
        <div class="item-atividades text-primary">
          <div class="hex-wrapper">
            <div class="hex-inner"/>
          </div>
          <span>Consultoria/Auditoria Técnica</span>
        </div>
        <div class="item-atividades text-primary">
          <div class="hex-wrapper">
            <div class="hex-inner"/>
          </div>
          <span>Treinamentos</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center w-full mt-4 mb-4 gap-4">
      <div class="text-2xl lg:text-4xl">
        <span class="font-bold text-gray-600">ALGUNS DOS NOSSOS</span>
        <span class="font-bold text-primary"> CLIENTES</span>
      </div>
      <Carousel class="flex md:hidden " :value="clientes" :numVisible="1" :numScroll="1" autoplay-interval="">
        <template #item="slotProps">
          <div class="border border-surface-200 dark:border-surface-700 rounded m-2 ">
            <div class="">
              <div class="relative mx-auto">
                <img src="../assets/images/foto_fundo.jpeg" :alt="slotProps.data" class="w-full rounded"/>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
      <div class="md:grid grid-cols-9 gap-6 hidden">
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
        <img src="../assets/images/cliente.png" height="78" width="121"/>
      </div>
    </div>
    <div class="relative w-full flex flex-col items-end text-end  fale-conosco ">
      <div class="h-full w-full absolute bg-gray-200/50 z-0"/>
      <div class="flex flex-col z-10 p-4 md:p-10 gap-4 items-end">
        <span class="text-xl md:text-2xl font-bold">Tem alguma dúvida ou gostaria de conversar mais<br/> sobre as nossas áreas de atuação ?</span>
        <div class="w-fit">
          <Botao texto="FALE CONOSCO"/>
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

.item-solucao-ativo {
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;

  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  justify-content: center;
  text-align: center;
  gap: 8px;
}

.hex-wrapper {
  width: 50px;
  height: 50px;
  background: rgb(243, 244, 246); /* Borda */
  clip-path: polygon(
      50% 0%,
      93% 25%,
      93% 75%,
      50% 100%,
      7% 75%,
      7% 25%
  );
  display: flex;
  align-items: center;
  justify-content: center;
}

.hex-inner {
  width: 30px;
  height: 30px;
  background: #0e2841;
  clip-path: inherit;
}

.item-atividades {
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
}

.fale-conosco {
  background-image: url("@/assets/images/segunda-foto-home.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

</style>