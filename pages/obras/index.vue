<script setup lang="ts">
import {ref} from 'vue';
import {collection, getDocs} from 'firebase/firestore';


const {$firestore} = useNuxtApp();

const loading = ref(true);

const fetchObras = async () => {
  try {
    loading.value = true;

    // Referência ao documento que contém a string Base64
    // const docRef = doc($firestore, 'obras');
    const colecao = await collection($firestore, 'obras')

    console.log(colecao)

    const obras = await getDocs(colecao)
    console.log("Äqiooo")


    console.log(obras)

    // if (docSnap.exists()) {
    //   const data = docSnap.data();
    //   documento.value = {
    //     id: docSnap.id,
    //     ...data,
    //   };
    //
    //   // A decodificação da string Base64 acontece no próprio navegador,
    //   // que interpreta o prefixo "data:image/png;base64," e renderiza a imagem
    //   // diretamente. Não é necessário um processamento adicional aqui.
    //
    // } else {
    //   console.log('Nenhum documento encontrado!');
    //   documento.value = null;
    // }
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
        <Card style="width: 100%; overflow: hidden">
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
      <Card style="width: 100%; overflow: hidden">
        <template #header>
          <img alt="user header" src="../../assets/images/foto_fundo.jpeg"/>
        </template>
        <template #title>Nome da obra</template>
        <template #subtitle>01/08/2025</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam... </p>
        </template>
      </Card>
      <Card style="width: 100%; overflow: hidden">
        <template #header>
          <img alt="user header" src="../../assets/images/foto_fundo.jpeg"/>
        </template>
        <template #title>Nome da obra</template>
        <template #subtitle>01/08/2025</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam... </p>
        </template>
      </Card>
      <Card style="width: 100%; overflow: hidden">
        <template #header>
          <img alt="user header" src="../../assets/images/foto_fundo.jpeg"/>
        </template>
        <template #title>Nome da obra</template>
        <template #subtitle>01/08/2025</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam... </p>
        </template>
      </Card>
      <Card style="width: 100%; overflow: hidden">
        <template #header>
          <img alt="user header" src="../../assets/images/foto_fundo.jpeg"/>
        </template>
        <template #title>Nome da obra</template>
        <template #subtitle>01/08/2025</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam... </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>