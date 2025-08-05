<script setup lang="ts">
import {ref} from 'vue';
import {collection, getDocs, getDoc, onSnapshot} from 'firebase/firestore';
import {query} from "@firebase/database";
import DialogDetalheObra from "~/pages/obras/components/DialogDetalheObra.vue";


const {$firestore} = useNuxtApp();

const obras = ref([])
const loading = ref(true);
const mostrarDialogDetalheObra = ref(false)
const obraSelecionada = ref(null);

const fetchObras = async () => {
  try {
    loading.value = true;

    const obrasQuery = query(collection($firestore, 'obras'))

    onSnapshot(obrasQuery, (snapshot) => {
      const obrasList = [];

      snapshot.forEach((doc) => {
        obrasList.push({id: doc.id, ...doc.data()});
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
  <div class="flex flex-col gap-4 py-8 px-72">
    <span class="text-primary font-medium text-4xl mb-4">Obras</span>
    <div class="grid grid-cols-3 gap-8 justify-between items-center">
      <div v-for="obra in obras" class="flex flex-col gap-2" :key="obra.id">
        <Card style="width: 100%; overflow: hidden " @click="obraSelecionada = obra; mostrarDialogDetalheObra = true" class="cursor-pointer">
          <template #header>
            <img alt="user header" src="../../assets/images/foto_fundo.jpeg"/>
          </template>
          <template #title>{{ obra.nome }}</template>
          <template #subtitle>{{ obra.data }}</template>
          <template #content>
            <p class="m-0">{{ obra.descricao }}</p>
          </template>
        </Card>
      </div>
    </div>
    <DialogDetalheObra v-model:visible="mostrarDialogDetalheObra" :obra="obraSelecionada" />
  </div>
</template>

<style scoped>

</style>