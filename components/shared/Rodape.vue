<script setup lang="ts">
import { Icon } from '@iconify/vue';

</script>

<template>
  <div class="flex gap-8 bg-zinc-900 text-white py-10 px-8 text-lg justify-center">
    <div class="flex items-center">

      <img src="../../assets/images/am_ai_text.png" alt="Logo" class="h-[80px] w-fit"/>
      <img src="../../assets/images/am_ai_icon.png" alt="Icone" class="h-[60px] w-fit"/>
    </div>
    <div>
      <span class="titulo">Links</span>
      <ul class="lista-opcoes">
        <li>
          <NuxtLink to="/home">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/sobre_nos">Sobre nós</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/atividades">Atividades</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/obras">Obras</NuxtLink>
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
      <span class="titulo">Localização</span>
      <ul class="">
        <li>
          Rua Giovanni Carnovali, N° 92
        </li>
        <li>Vila Caraguata</li>
        <li> São Paulo, SP</li>
      </ul>
    </div>
    <div>
      <span class="titulo">Áreas de atuação</span>
      <ul class="">
        <li>Subestação</li>
        <li>Renováveis</li>
        <li>Comissionamento</li>
        <li>Gestão de ativos</li>
        <li>Treinamentos</li>
      </ul>
    </div>
    <div>
      <span class="titulo">Fale conosco</span>
      <ul class="lista-opcoes">
        <li class="flex gap-1 ">
            <Icon icon="mdi:linkedin" width="24" height="24" style="color: #fff"/>
            <span>linkedin.com/company/amaienergia/</span>
        </li>
        <li class="flex gap-1 ">
          <Icon icon="material-symbols:mail-rounded" width="24" height="24" style="color: #fff"/>
          <span>amai@atendimento.com.br</span>
        </li>
        <li class="flex gap-1 ">
          <Icon icon="mingcute:whatsapp-fill" width="24" height="24" style="color: #fff"/>
          <span>+55 (22) 99237-6913</span>
        </li>
        <li class="flex gap-1 ">
          <Icon icon="mingcute:whatsapp-fill" width="24" height="24" style="color: #fff"/>
          <span>+55 (22) 99237-6913</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.titulo {
  color: #56697A;
  font-weight: 500;
  font-size: 1.5em;

}

.lista-opcoes li:hover{
  color: rgb(180,180,180);
  cursor: pointer;
}
</style>