<script setup lang="ts">
import {ref} from 'vue';
import {collection, getDocs, getDoc, onSnapshot} from 'firebase/firestore';
import {query} from "@firebase/database";
import DialogDetalheObra from "~/pages/portfolio/components/DialogDetalheObra.vue";
import type {IObra} from "~/interfaces/obra.interface";


const {$firestore} = useNuxtApp();

const obras = ref<IObra[]>([])
const loading = ref(true);
const mostrarDialogDetalheObra = ref(false)
const obraSelecionada = ref<IObra | null>(null);

const fetchObras = async () => {
  try {
    loading.value = true;

    const obrasQuery = query(collection($firestore, 'obras'))

    onSnapshot(obrasQuery, (snapshot) => {
      const obrasList: IObra[] = [];

      snapshot.forEach((doc) => {
        const dadosObra: IObra = doc.data()
        if(dadosObra.descricao.length > 100) {
          dadosObra.descricaoFormatada = dadosObra.descricao.substring(0, 100) + '...';
        }

        obrasList.push({id: doc.id, ...dadosObra});
      });
      obras.value = obrasList;
    }, (error) => {
      console.error("Erro ao escutar as mudanças:", error);
    })
  } catch (e) {
    console.error("Erro ao buscar documento:", e);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchObras();
});

</script>

<template>
  <div class="flex flex-col gap-8 py-8 px-8 xl:px-32 2xl:px-52">
    <span class="text-primary font-medium text-4xl mb-4">Portfólio</span>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between items-center">
      <div v-for="obra in obras" class="flex flex-col gap-2" :key="obra.id">
        <Card style="width: 100%; overflow: hidden " @click="obraSelecionada = obra; mostrarDialogDetalheObra = true"
              class="cursor-pointer">
          <template #header>
            <img alt="user header" src="../../assets/images/foto_fundo.jpeg"/>
          </template>
          <template #title>{{ obra.nome }}</template>
          <template #subtitle>{{ obra.data }}</template>
          <template #content>
            <p class="m-0">{{ obra.descricaoFormatada }}</p>
          </template>
        </Card>
      </div>
    </div>
    <DialogDetalheObra v-model:visible="mostrarDialogDetalheObra" :obra="obraSelecionada"/>
  </div>
</template>

<style scoped>

</style>