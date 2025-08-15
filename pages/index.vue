<script setup lang="ts">
import Botao from "~/components/ui/Botao.vue";
import {ref} from 'vue';
import {servicos} from "~/utils/constants/nossoServicos"

const clientesMobile = ref(['@/assets/images/cliente.png', '../assets/images/cliente.png', '../assets/images/cliente.png', '../assets/images/cliente.png'])

const clientes = ref([])

const buscarClientes = async () => {
  try {
    const imagens = import.meta.glob('~/assets/images/home/clientes/*.{png,jpg,jpeg}', {eager: true});

    clientes.value = Object.values(imagens).map(imagem => imagem.default);
  } catch (erro) {
    console.log(erro)
  }
}

const parceiros = ref([])

const buscarParceiros = async () => {
  try {
    const imagens = import.meta.glob('~/assets/images/home/parceiros/*.{png,jpg,jpeg}', {eager: true});

    parceiros.value = Object.values(imagens).map(imagem => imagem.default);
  } catch (erro) {
    console.log(erro)
  }
}

const fotosServicos = ref([])
const buscarFotosServicos = async () => {
  try {
    const imagens = import.meta.glob('~/assets/images/nossos_servicos/*.{png,jpg,jpeg}', {eager: true});

    fotosServicos.value = Object.values(imagens).map(imagem => imagem.default);
  } catch (erro) {
    console.log(erro)
  }
}

const imagemMaiorServico = ref(null)
const servicoSelecionado = ref(null)
const trocarImagem = (nomeServico) => {
  const imagemEncontrada = fotosServicos.value.find(img => img.includes(nomeServico));
  servicoSelecionado.value = nomeServico

  if (imagemEncontrada) {
    imagemMaiorServico.value = imagemEncontrada
  }
}

onMounted(() => {
  buscarClientes();
  buscarParceiros();
  buscarFotosServicos();

  imagemMaiorServico.value = fotosServicos.value.find(img => img.includes(servicos[0].nome)) || null
  servicoSelecionado.value = servicos[0]?.nome || null
})

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
      <span class="text-4xl font-bold">QUEM SOMOS</span>
      <div class="flex gap-4 ">
        <div class="text-start flex flex-col gap-4 w-fit justify-center">
          <span class="text-xl lg:text-2xl text-start">A AM.AI trabalha com um Equipe de Profissionais altamente capacitados e experientes em Ativos de SPCS e Equipamentos Primários da Geração, Transmissão e Distribuição de Energia. Prestando Serviços de Engenharia, Comissionamento e Gestão de Ativos, com foco no Setor Elétrico.</span>
          <NuxtLink to="/quem_somos">
            <div
                class="bg-primary hover:bg-primary-dark rounded p-2 text-white text-center  text-2xl font-bold cursor-pointer">
              Conheça a AM.AI
            </div>
          </NuxtLink>
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
    <div class="solucao-ativos flex flex-col relative bg-primary-light justify-center items-center py-8 gap-8">
      <span class="text-4xl font-bold text-white">PORTFÓLIO</span>
      <div class="grid grid-cols-4 gap-8 px-8">
        <Card style="width: 100%; overflow: hidden" class="border-4 border-white">
          <template #header>
            <img alt="user header" src="../assets/images/foto_fundo.jpeg"/>
          </template>
          <template #title>Teste</template>
          <template #subtitle>Janeiro de 2025 a Março de 2025</template>
        </Card>
        <Card style="width: 100%; overflow: hidden" class="border-4 border-white">
          <template #header>
            <img alt="user header" src="../assets/images/foto_fundo.jpeg"/>
          </template>
          <template #title>Teste</template>
          <template #subtitle>Janeiro de 2025 a Março de 2025</template>
        </Card>
        <Card style="width: 100%; overflow: hidden" class="border-4 border-white">
          <template #header>
            <img alt="user header" src="../assets/images/foto_fundo.jpeg"/>
          </template>
          <template #title>Teste</template>
          <template #subtitle>Janeiro de 2025 a Março de 2025</template>
        </Card>
        <Card style="width: 100%; overflow: hidden" class="border-4 border-white">
          <template #header>
            <img alt="user header" src="../assets/images/foto_fundo.jpeg"/>
          </template>
          <template #title>Teste</template>
          <template #subtitle>Janeiro de 2025 a Março de 2025</template>
        </Card>
      </div>
      <NuxtLink to="/portfolio">
        <div class="text-white bg-gray-100/30 rounded px-2 py-1 text-2xl ">
          Conhecer portfólio
        </div>
      </NuxtLink>
    </div>
    <div class="p-8 bg-gray-100 grid grid-cols-6">
      <span class="text-4xl font-bold text-primary-dark col-span-6 mb-8 text-center">NOSSOS SERVIÇOS</span>
      <div class="col-span-4 !h-[560px]">
        <!--        <img src="@/assets/images/foto_fundo.jpeg" alt="img 03 " class=" rounded">-->
        <img :src="imagemMaiorServico" :alt="imagemMaiorServico" class="h-full w-full object-cover rounded"/>
      </div>
      <div class="text-2xl col-span-2 -ml-6 justify-center flex flex-col gap-8">
        <NuxtLink :to="{ path: '/nossos_servicos', query: { destaque: servico.nome } }" v-for="servico in servicos"
                  @mouseenter="trocarImagem(servico.nome)"
                  :class="{'text-primary-light/50': servicoSelecionado === servico.nome }" :key="servico.nome"
                  class="item-atividades text-primary hover:text-primary-light/40 cursor-pointer">
          <div class="hex-wrapper">
            <div class="hex-inner"/>
          </div>
          <span>{{ servico.titulo }}</span>
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-between items-stretch w-full mt-4 mb-4 gap-8 px-8">
      <div class="flex flex-col gap-4 w-5/6">
        <div class="text-2xl lg:text-4xl text-center">
          <span class="font-bold text-gray-600">NOSSOS</span>
          <span class="font-bold text-primary"> CLIENTES</span>
        </div>
        <Carousel class="flex md:hidden " :value="clientesMobile" :numVisible="1" :numScroll="1" autoplay-interval="">
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
        <div class="md:grid grid-cols-6 gap-6 hidden">
          <div v-for="imagem in clientes" :key="imagem" class="col-span-1 flex justify-center items-center">
            <img :src="imagem" height="78" width="121"/>
          </div>
        </div>
      </div>
      <Divider layout="vertical" class="!hidden md:!flex"></Divider>
      <div class="flex flex-col gap-4 w-5/6">
        <div class="text-2xl lg:text-4xl text-center">
          <span class="font-bold text-gray-600">NOSSOS</span>
          <span class="font-bold text-primary-light"> PARCEIROS</span>
        </div>
        <Carousel class="flex md:hidden " :value="clientesMobile" :numVisible="1" :numScroll="1" autoplay-interval="">
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
        <div class="md:grid grid-cols-6 gap-6 hidden">
          <div v-for="imagem in parceiros" :key="imagem" class="col-span-1 flex justify-center items-center">
            <img :src="imagem" height="78" width="121"/>
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-full flex flex-col items-end text-end bg-primary-light/70">
      <div class="flex w-full justify-between p-4 md:p-10 gap-4 items-center">
        <span
            class="text-xl md:text-4xl font-bold text-white">Conheça as soluções que a AM.AI realiza em cada Setor</span>
        <NuxtLink to="/contatos">
          <Botao texto="FALE CONOSCO"/>
        </NuxtLink>
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


</style>