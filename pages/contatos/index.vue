<script setup lang="ts">
import {Icon} from "@iconify/vue";
import Botao from "~/components/ui/Botao.vue";
import {ref} from "vue";
import DialogPoliticaPrivacidade from "~/pages/contatos/components/DialogPoliticaPrivacidade.vue";

const assuntos = ref([
  {assunto: 'Solicitação de proposta'},
  {assunto: 'Solicitação de apresentação do portfólio'},
  {assunto: 'Trabalhe conosco - envie seu currículo'},
])

const mostrarDialogPoliticaPrivacidade = ref(false);


</script>

<template>
  <div class="flex flex-col gap-8 py-8 px-8 xl:px-32 2xl:px-52">
    <span class="text-primary font-medium text-4xl">Contatos</span>
    <div class="grid grid-cols-1 md:grid-cols-7">
      <div class="flex flex-col gap-8 col-span-3">
        <div class="flex flex-col ">
          <span class="font-bold text-2xl text-zinc-800">Fale conosco</span>
          <ul class="lista-opcoes">
            <li class="flex gap-1 ">
              <Icon icon="mdi:linkedin" width="24" height="24" style="color: #000"/>
              <a target="_blank" href="https://www.linkedin.com/company/amaienergia/">linkedin.com/amaienergia/</a>
            </li>
            <li class="flex gap-1 ">
              <Icon icon="ri:instagram-fill" width="24" height="24" style="color: #000"/>
              <a target="_blank" href="https://www.instagram.com/amaienergia">@amaienergia</a>
            </li>
            <li class="flex gap-1 ">
              <Icon icon="material-symbols:mail-rounded" width="24" height="24" style="color: #000"/>
              <a target="_blank" href="mailto:webmaster@example.com">contato@amaienergia.com.br</a>
            </li>
            <li class="flex gap-1 ">
              <Icon icon="mingcute:whatsapp-fill" width="24" height="24" style="color: #000"/>
              <a target="_blank"
                 href="https://wa.me/5511954758300?text=Olá!%20Visitei%20seu%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20AM.IA%20Energia.">+55
                (11) 95475-8300</a>
            </li>
            <li class="mt-1">
              <div class="w-full lg:w-6/12">
                <a target="_blank"
                   href="https://wa.me/5511954758300?text=Olá!%20Visitei%20seu%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20AM.IA%20Energia.">
                  <Botao icone="mingcute:whatsapp-fill" cor-icone="#000" texto="Mande uma mensagem"
                         class="!text-base font-normal !p-1"/>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-2xl text-zinc-800">Escritório</span>
          <span class=" text-zinc-800">EZ Towers Torre B</span>
          <span class=" text-zinc-800">R. Arquiteto Olavo Redig de Campos, N° 105 – 24⁰ Andar</span>
          <span class=" text-zinc-800">Chácara Santo Antônio</span>
          <span class=" text-zinc-800">São Paulo, SP</span>
          <span class=" text-zinc-800">CEP 04711-905</span>
        </div>
        <div class="flex flex-col mb-8 lg:mb-0">
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
        <div class="flex gap-2 items-center">
          <Checkbox inputId="ingredient2" name="pizza" value="Mushroom"/>
          <label for="ingredient2">Li e concordo com os termos da
            <span class="font-bold cursor-pointer text-primary-light" @click="mostrarDialogPoliticaPrivacidade = !mostrarDialogPoliticaPrivacidade">
              política de privacidade.
            </span>
          </label>
        </div>
        <Botao cor-icone="#000" texto="Enviar" class=" font-normal !p-2"/>
      </div>
    </div>
    <div class=" w-full flex h-[450px] justify-center items-center">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2167.995801943011!2d-46.7027433!3d-23.6269373!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51cb431d0533%3A0xe9bf1885cc18baf1!2sEdif%C3%ADcio%20EZ%20Towers%20-%20Bloco%20B!5e1!3m2!1spt-BR!2sbr!4v1754449765081!5m2!1spt-BR!2sbr"
          width="100%" height="450" style="border:0;" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <DialogPoliticaPrivacidade v-model:visible="mostrarDialogPoliticaPrivacidade"/>
  </div>
</template>

<style scoped>
.lista-opcoes li:hover {
  color: rgb(110, 110, 110);
  cursor: pointer;
}
</style>