<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-8 py-8 px-8 xl:px-32 2xl:px-52">
    <span class="text-primary font-medium text-4xl">Quem somos ?</span>
    <div class="flex flex-col lg:flex-row w-full gap-4">
      <div class="lg:w-[50vw] xl:!w-[65vw] text-xl indent-6">
        <p>
          A AM.AI Energia é empresa especializada em serviços de engenharia do proprietário, testes de aceitação em
          fábrica, comissionamento, treinamentos e consultoria de gestão de ativos para subestações de transmissão de
          energia elétrica. Estamos entusiasmados em ter a oportunidade de compartilhar nosso conhecimento e experiência
          com você. </p>
        <p class="mt-2">
          Somos uma equipe de profissionais altamente capacitados e experientes em negócios, projetos, gestão de ativos
          e comissionamento de subestações, com ampla experiência no setor de energia elétrica. Oferecemos serviços de
          consultoria, Engenharia do proprietário e desenvolvimento de projetos personalizados para ajudar nossos
          clientes a gerenciar seus ativos de forma eficiente e econômica ao longo de sua vida útil, garantindo a
          continuidade da operação de suas subestações. </p>
        <p class="mt-2">
          Entendemos que cada cliente tem necessidades e desafios únicos, por isso adaptamos nossos serviços para
          atender às necessidades específicas de cada projeto. Nosso objetivo é fornecer soluções personalizadas que
          ajudem nossos clientes a maximizar a eficiência e reduzir custos. Estamos comprometidos em fornecer serviços
          de alta qualidade, com total transparência e comunicação clara ao longo de todo o projeto.</p>
      </div>
      <div class="w-full lg:max-w-[35vw] order-first lg:order-last">
        <img src="@/assets/images/foto_fundo.jpeg" alt="primeira imagem" class="w-full h-full rounded-xl shadow-lg">
      </div>
    </div>
    <div class="flex lg:flex-row flex-col lg:gap-0 gap-8">
      <div class="w-full lg:max-w-[35vw]">
        <img src="@/assets/images/img02.jpeg" alt="Segunda imagem"
             class="w-full rounded-xl max-h-[450px] shadow-lg object-cover">
      </div>
      <div class="flex flex-col gap-4 items-center justify-center w-full">
        <span class="text-primary font-medium text-3xl">Nossa entregas</span>
        <div class="grid grid-cols-1 uppercase  md:grid-cols-2">
          <div class="cada-dado ">
            <span class="valor">150*</span>
            <span>clientes atendidos</span>
          </div>
          <div class="cada-dado">
            <span class="valor">30*</span>
            <span>subestaçoescomissionadas</span>
          </div>
          <div class="cada-dado">
            <span class="valor">50*</span>
            <span>treinamentos mestrados</span>
          </div>
          <div class="cada-dado">
            <span class="valor">15.000*</span>
            <span>clientes atendidos</span>
          </div>
          <div class="cada-dado">
            <span class="valor">10*</span>
            <span>clientes atendidos</span>
          </div>
          <div class="cada-dado">
            <span class="valor">150*</span>
            <span>consultorias técnicas</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cada-dado {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  font-size: 1.3rem;

}

.valor {
  font-size: 2rem;
  font-weight: bold;
  color: #1a202c; /* Cor primária */
}

.segunda-imagem {
  background-image: url('@/assets/images/img02.jpeg');
}
</style>