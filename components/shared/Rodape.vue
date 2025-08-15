<script setup lang="ts">
import {Icon} from '@iconify/vue';
import {servicos} from "~/utils/constants/nossoServicos";

</script>

<template>
  <div class="flex flex-col lg:flex-row gap-32 bg-primary text-white py-10 px-8 text-lg justify-center">
    <div class="flex items-center justify-center">
      <img src="../../assets/images/am_ai_text.png" alt="Logo" class="h-[80px] w-fit"/>
      <img src="../../assets/images/am_ai_icon.png" alt="Icone" class="h-[60px] w-fit"/>
    </div>
    <div>
      <span class="titulo">Links</span>
      <ul class="lista-opcoes">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/quem_somos">Quem somos</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/nossos_servicos">Nossos serviços</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/portfolio">Portfólio</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contatos">Contatos</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/noticias">Notícias</NuxtLink>
        </li>

      </ul>
    </div>
    <div>
      <span class="titulo ">Localização</span>
      <ul class="text-sm">
        <li>
          EZ Towers Torre B
        </li>
        <li>R. Arquiteto Olavo Redig de Campos</li>
        <li> N° 105 – 24⁰ Andar</li>
        <li>Chácara Santo Antônio</li>
        <li> São Paulo, SP</li>
        <li> CEP 04711-905</li>
      </ul>
    </div>
    <div>
      <span class="titulo">Nossos serviços</span>
      <ul class="">
        <NuxtLink :to="{ path: '/nossos_servicos', query: { destaque: servico.nome } }" v-for="servico in servicos"
                  :key="servico.nome" class=" text-white hover:text-gray-300 cursor-pointer">
          <li>
            <span>{{ servico.titulo }}</span>
          </li>
        </NuxtLink>
      </ul>
    </div>
    <div>
      <span class="titulo">Fale conosco</span>
      <ul class="lista-opcoes">
        <li class="flex gap-1 ">
          <Icon icon="mdi:linkedin" width="24" height="24" style="color: #fff"/>
          <a target="_blank" href="https://www.linkedin.com/company/amaienergia/">linkedin.com/amaienergia/</a>
        </li>
        <li class="flex gap-1 ">
          <Icon icon="ri:instagram-fill" width="24" height="24" style="color: #fff"/>
          <a target="_blank" href="https://www.instagram.com/amaienergia">@amaienergia</a>
        </li>
        <li class="flex gap-1 ">
          <Icon icon="material-symbols:mail-rounded" width="24" height="24" style="color: #fff"/>
          <a href="mailto:webmaster@example.com">contato@amaienergia.com.br</a>
        </li>
        <li class="flex gap-1 ">
          <Icon icon="mingcute:whatsapp-fill" width="24" height="24" style="color: #fff"/>
          <a target="_blank"
             href="https://wa.me/5511954758300?text=Olá!%20Visitei%20seu%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20AM.AI%20Energia.">+55
            (11) 95475-8300</a>
        </li>

      </ul>
    </div>
  </div>
</template>

<style scoped>
.titulo {
  color: #fff;
  font-weight: 500;
  font-size: 1.5em;

}

.lista-opcoes li:hover {
  color: rgb(180, 180, 180);
  cursor: pointer;
}
</style>