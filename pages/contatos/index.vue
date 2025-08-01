<script setup lang="ts">
import {Icon} from "@iconify/vue";
import Botao from "~/components/ui/Botao.vue";
import {ref} from "vue";

const assuntos = ref([
  {assunto: 'Solicitação de proposta'},
  {assunto: 'Solicitação de apresentação do portfólio'},
  {assunto: 'Trabalhe conosco - envie seu currículo'},
])

</script>

<template>
  <div class="flex flex-col gap-4 py-8 px-72">
    <span class="text-primary font-medium text-4xl">Contatos</span>
    <div class="grid grid-cols-7">
      <div class="flex flex-col gap-8 col-span-3">
        <div class="flex flex-col ">
          <span class="font-bold text-2xl text-zinc-800">Fale conosco</span>
          <ul class="lista-opcoes">
            <li class="flex gap-1 ">
              <Icon icon="mdi:linkedin" width="24" height="24" style="color: #000"/>
              <span>linkedin.com/company/amaienergia/</span>
            </li>
            <li class="flex gap-1 ">
              <Icon icon="material-symbols:mail-rounded" width="24" height="24" style="color: #000"/>
              <span>amai@atendimento.com.br</span>
            </li>
            <li class="flex gap-1 ">
              <Icon icon="mingcute:whatsapp-fill" width="24" height="24" style="color: #000"/>
              <span>+55 (22) 99237-6913</span>
            </li>
            <li class="flex gap-1 ">
              <Icon icon="mingcute:whatsapp-fill" width="24" height="24" style="color: #000"/>
              <span>+55 (22) 99237-6913</span>
            </li>
            <li class="mt-1">
              <div class="w-6/12">
                <Botao icone="mingcute:whatsapp-fill" cor-icone="#000" texto="Mande uma mensagem"
                       class="!text-base font-normal !p-1"/>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-2xl text-zinc-800">Localização</span>
          <span class=" text-zinc-800">Rua Giovanni Carnovali, N° 92</span>
          <span class=" text-zinc-800">Vila Caraguata</span>
          <span class=" text-zinc-800">São Paulo, SP</span>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-2xl text-zinc-800">Atendimento</span>
          <span class=" text-zinc-800">Segunda a Sexta - 08:00 a 18:00</span>
        </div>
      </div>
      <div class="w-full flex justify-center items-start">
        <Divider layout="vertical" class="!hidden md:!flex"><b>OU</b></Divider>
      </div>
      <div class="flex flex-col col-span-3 gap-2">
        <span class="font-bold text-2xl text-zinc-800">Preencha a baixo que entraremos em contato</span>
        <div class="flex flex-col gap-2 w-full">
          <label for="username">Assunto</label>
          <Select :options="assuntos" option-label="assunto" placeholder="Selecione um assunto" class="w-full md:w-56"/>
          <!--          <InputText id="username" aria-describedby="username-help"/> -->
        </div>
        <div class="flex flex-col gap-2">
          <label for="username">Nome</label>
          <InputText id="username" aria-describedby="username-help" placeholder="Ex: Andre"/>
        </div>
        <div class="flex flex-col gap-2">
          <label for="username">Telefone</label>
          <InputText id="username" aria-describedby="username-help" placeholder="Ex: Andre"/>
        </div>
        <div class="flex flex-col gap-2">
          <label for="username">E-mail</label>
          <InputText id="username" aria-describedby="username-help" placeholder="Ex: andre@amai.com.br"/>
        </div>
        <div class="flex flex-col gap-2">
          <label for="username">Escreva sobre o assunto que deseja tratar com a gente</label>
          <Textarea id="over_label" rows="3" cols="30" style="resize: none"/>
        </div>
        <div class="flex flex-col gap-2">
          <label for="username">Currículo</label>
          <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000"
                      @upload="onUpload" :auto="true" chooseLabel="Selecione o arquivo"/>
        </div>
        <Botao cor-icone="#000" texto="Enviar" class=" font-normal !p-2"/>
      </div>
    </div>
    <div class=" w-full h-1 flex h-[450px] justify-center items-center">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.4512554814185!2d-46.605112974748636!3d-23.643662120485985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b4f953c46bf%3A0x7a81cb86aac2025c!2sRua%20Giovanni%20Carnovali%2C%2092%20-%20Vila%20Caraguata%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004191-000!5e0!3m2!1spt-BR!2sbr!4v1754068346446!5m2!1spt-BR!2sbr"
          width="100%" height="450" style="border:0;" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<style scoped>
.lista-opcoes li:hover {
  color: rgb(110, 110, 110);
  cursor: pointer;
}
</style>