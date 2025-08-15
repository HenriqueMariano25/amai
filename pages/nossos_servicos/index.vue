<script setup lang="ts">

const route = useRoute();
const itemDestacado = ref(null)

const fotos = ref([])
const buscarFotos = async () => {
  try {
    const imagens = import.meta.glob('~/assets/images/nossos_servicos/*.{png,jpg,jpeg}', {eager: true});

    fotos.value = Object.values(imagens).map(imagem => imagem.default);

  } catch (erro) {
    console.error(erro)
  }
}

onMounted(() => {
  buscarFotos()

  const destaque = route.query.destaque

  if(destaque){
    setTimeout(()=>{
      const elemento = document.getElementById(`item-${destaque}`)

      if(elemento){
        elemento.scrollIntoView({behavior: 'smooth', block: 'center'});
        itemDestacado.value = destaque
      }

      setTimeout(() => {
        itemDestacado.value = null;
      }, 2000);
    },100)
  }
})

</script>

<template>
  <div class="flex flex-col gap-8 py-8 px-8 xl:px-32 2xl:px-52" id="item-engenhariaDoProprietario">
    <span class="text-primary font-medium text-4xl mb-4">Nossos serviços</span>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center">
      <div class="w-full md:w-[60%] flex h-[450px]">
        <img
            :src="fotos.find(img => img.includes('engenhariaDoProprietario'))"
            alt="primeira imagem"
            class=" h-full rounded-xl shadow-lg w-full object-cover">
      </div>
      <div class="flex flex-col gap-2 text-xl cada-atividade">
        <span class="titulo text-zinc-900">Engenharia do proprietário</span>
        <ul class="texto-atividade space-y-1">
          <li>Análise de projeto executivo elétrico, SPCS e arquiteturas;</li>
          <li>Análise de estudos elétricos;</li>
          <li>Análise à compra de equipamentos;</li>
          <li>Análise aos Testes de Aceitação em Fábrica (TAF);</li>
          <li>Consultoria de sistemas de controle e proteção;</li>
          <li>Consolidação de projetos básicos;</li>
          <li>Coordenação de Testes de Campo (TAC);</li>
          <li>Elaboração de especificações técnicas;</li>
          <li>Supervisão de montagem;</li>
        </ul>
      </div>
    </div>
    <divider/>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center" id="item-taf">
      <div class="flex flex-col gap-2 text-xl cada-atividade">
        <span class="titulo text-zinc-900">Testes de Aceitação em Fábrica (TAF)</span>
        <span class="sub-titulo">Atuação e Fiscalização</span>
        <ul class="texto-atividade space-y-1">
          <li>Fiação interna e construtiva dos painéis;</li>
          <li>Parametrização das proteções;</li>
          <li>Integração do sistema digital, incluindo:
          </li>
          <li>
            <ul class="space-y-1">
              <li class="ml-5">Protocolos de comunicação;</li>
              <li class="ml-5">Lógicas e intertravamentos das unidades de controle;</li>
              <li class="ml-5">Testes de desempenho do sistema completo;</li>
              <li class="ml-5">Testes de equipamentos de AT e MT;</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-[60%] flex h-[450px] max-lg:order-first">
        <img :src="fotos.find(img => img.includes('taf'))" alt="primeira imagem"
             class=" h-full rounded-xl shadow-lg w-full object-cover">
      </div>
    </div>
    <divider/>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center" id="item-tac">
      <div class="w-full md:w-[60%] flex h-[450px]">
        <img :src="fotos.find(img => img.includes('tac'))" alt="primeira imagem"
             class=" h-full rounded-xl shadow-lg w-full object-cover">
      </div>
      <div class="flex flex-col gap-2 text-xl cada-atividade">
        <span class="titulo text-zinc-900">Teste de Aceitação em Campo (TAC)</span>
        <span class="sub-titulo">Atuação e Fiscalização em SPCS e Equipamentos Primários</span>
        <ul class="texto-atividade space-y-1">
          <li>Verificação da cablagem e testes ponto a ponto;</li>
          <li>Verificação das curvas e ajuste das proteções;</li>
          <li>Lógicas e intertravamentos das unidades de controle;</li>
          <li>Integração do sistema digital com os equipamentos da planta;</li>
          <li>Validação de arquiteturas de proteção e comunicação;</li>
          <li>Testes de proteção, controle e teleproteção;</li>
          <li>Testes em equipamentos de alta tensão (seccionador, disjuntor, TC, TP, transformador...);</li>
          <li>Testes em equipamentos de média tensão (cubículos e skids) de UFVs;</li>
          <li>Testes em cabos isolados e malha de aterramento;</li>
          <li>Energização da planta;</li>
          <li>Operação assistida;</li>
        </ul>
      </div>
    </div>
    <divider/>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center" id="item-gestaoDeAtivos">
      <div class="flex flex-col gap-2 text-xl cada-atividade">
        <span class="titulo text-zinc-900">Gestão de ativos</span>
        <ul class="texto-atividade space-y-1">
          <li>Apoio em discussões técnicas;</li>
          <li>Visitas técnicas;</li>
          <li>Análises técnicas e relatórios técnicos;</li>
          <li>Apoio ao desenvolvimento de códigos e kpis para atendimento de tomada de decisões aos ativos;</li>
          <li>Desenvolvimento de ai ao auxilio de tomada de decisão;</li>
        </ul>
      </div>
      <div class="w-full md:w-[60%] flex h-[450px] max-lg:order-first">
        <img :src="fotos.find(img => img.includes('gestaoDeAtivos'))" alt="primeira imagem"
             class=" h-full rounded-xl shadow-lg w-full object-cover">
      </div>
    </div>
    <divider/>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center" id="item-OM">
      <div class="w-full md:w-[60%] flex h-[450px]">
        <img :src="fotos.find(img => img.includes('OM'))" alt="primeira imagem"
             class=" h-full rounded-xl shadow-lg w-full object-cover">
      </div>
      <div class="flex flex-col gap-2 text-xl cada-atividade">
        <span class="titulo text-zinc-900">O&M</span>
        <ul class="texto-atividade space-y-1">
          <li>Manutenções preventivas;</li>
          <li>Emissão de relatórios técnicos;</li>
          <li>Elaboração de manuais e plano de manutenção;</li>
          <li>Guias de manutenção e ensaios;</li>
          <li>Apoio com ferramentas ons (sam, sintegre...);</li>
          <li>Consultoria nas especificações técnicas;</li>
          <li>Apoio em análise de segurança - APR;</li>
          <li>Consultoria nas emissões de ordens (manobras e intervenções);</li>
          <li>Consultoria na elaboração de OPEX;</li>
        </ul>
      </div>
    </div>
    <divider/>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center" id="item-consultoriaAuditoriaTecnica">
      <div class="flex flex-col gap-2 text-xl cada-atividade">
        <span class="titulo text-zinc-900">Consultoria/Auditoria Técnica </span>
        <ul class="texto-atividade space-y-1">
          <li>Preparatório as auditorias regulatórias órgãos como aneel, arsesp;</li>
          <li>Levantamento técnico em subestações;</li>
          <li>Aplicações de subestações digitais e retrofits;</li>
          <li>Apoio em elaboração de propostas técnicas;</li>
          <li>Elaboração de especificações técnicas;</li>
          <li>Assessoria técnica:</li>
          <li>
            <ul class="space-y-1">
              <li class="ml-5">Levantamento do estado de instalações elétricas das subestações e instalações
                industriais;</li>
              <li class="ml-5">Análise técnica de equipamentos e sistemas;</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-[60%] flex h-[450px] max-lg:order-first">
        <img :src="fotos.find(img => img.includes('consultoriaAuditoriaTecnica'))" alt="primeira imagem"
             class=" h-full rounded-xl shadow-lg w-full object-cover">
      </div>
    </div>
    <divider/>
    <div class="flex flex-col lg:flex-row gap-4 justify-between items-center" id="item-treinamentos">
      <div class="w-full md:w-[60%] flex h-[450px]">
        <img :src="fotos.find(img => img.includes('treinamentos'))" alt="primeira imagem"
             class=" h-full rounded-xl shadow-lg w-full object-cover">
      </div>
      <div class="flex flex-col gap-2 text-xl cada-atividade">
        <span class="titulo text-zinc-900">Treinamentos</span>
        <ul class="texto-atividade space-y-1">
          <li>Equipamentos de Alta e Média Tensão;</li>
          <li>Serviços auxiliares CA/CC;</li>
          <li>Sensores e monitores dos Ativos;</li>
          <li>SPCS (solução aplicada);</li>
          <li>Ensaios elétricos;</li>
          <li>Malas de testes para equipamentos;</li>
          <li>Operação e manutenção;</li>
          <li>Solução customizada para o cliente na forma virtual e presencial;</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titulo {
  font-weight: 500;
  font-size: 32px;
}

.sub-titulo{
  font-weight: 500;
  font-size: 26px; /* Tailwind's gray-600 */
}

.texto-atividade{
  list-style: none;
  font-size: 24px /* 20px */;
  line-height: 1.75rem /* 28px */;
  max-width: 100vw;
  white-space: break-spaces;
}
</style>