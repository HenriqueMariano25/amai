<script setup lang="ts">

const props = defineProps({
  visible: Boolean,
  obra: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
}>()

const imgs = ['../../../assets/images/foto_fundo.jpeg', '@/../assets/images/foto_fundo.jpeg', '@/../assets/images/foto_fundo.jpeg']

</script>

<template>
  <Dialog class="w-11/12 md:w-6/12" :visible="visible"  modal :header="obra ? obra.nome : ''"
          @update:visible="(value) => emit('update:visible', value)">
    <div class="flex flex-col gap-4">
      <Carousel :value="imgs" :numVisible="1" :numScroll="1" circular :autoplayInterval="4000">
        <template #item="slotProps">
          <div class="border border-surface-200 dark:border-surface-700 rounded">
            <div class="">
              <div class="relative mx-auto">
                <!--              <img :src="slotProps.data"-->
                <!--                   :alt="slotProps.data.name" class="w-full rounded"/>-->
                <img alt="user header" src="../../../assets/images/foto_fundo.jpeg" class="rounded-xl shadow-2xl"/>
                <!--              <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)"-->
                <!--                   class="absolute" style="left:5px; top: 5px"/>-->
              </div>
            </div>
          </div>
        </template>
      </Carousel>
      <span>
      {{ obra ? obra.descricao : '' }}
    </span>
      <div>
        <Button label="Fechar" severity="secondary" @click="$emit('update:visible', false)"/>
      </div>
    </div>

  </Dialog>
</template>

<style scoped>

</style>