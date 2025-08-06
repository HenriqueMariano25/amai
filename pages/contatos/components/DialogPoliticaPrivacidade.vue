<script setup lang="ts">
const props = defineProps({
  visible: Boolean,
})

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
}>()


</script>

<template>
  <Dialog class="w-11/12 md:w-6/12" :visible="visible" modal header="Política de privacidade"
          @update:visible="(value) => emit('update:visible', value)">
    <div class="flex flex-col gap-4 text-gray-900">
      <span class="text-xl font-bold">Objetivo</span>
      <span class="indent-6">
        Informar todos os clientes e colaboradores da AM.AI Energia no que refere à aplicação da Lei Geral de Proteção de Dados – LGPD.
      </span>
      <span class="text-xl font-bold">ÂMBITO</span>
      <span class="indent-6">Aplica-se a todos os clientes e colaboradores da AM.AI Energia.</span>
      <span class="text-xl font-bold">DESCRIÇÃO DO PROCESSO</span>
      <div class="indent-6">
        <p>A AM.AI Energia necessita colher e tratar dados pessoais dos seus clientes no âmbito da prestação de serviço
          de comércio eletrônico e marketplace de produtos e serviços. Neste sentido, a presente Política de Privacidade
          e Dados Pessoais da AM.AI Energia (doravante “Política da Privacidade”), visa ajudar os nossos clientes a
          compreender quais dados pessoais recolhemos, como e por que motivo os usamos, a quem divulgamos e como
          protegemos a sua privacidade quando utilizam os nossos serviços.</p>
        <p>
          Ao usar a plataforma da AM.AI Energia (ou qualquer um dos sites ou aplicativos) e quaisquer produtos, redes
          sociais, serviços de software, ferramentas, aplicativos, recursos ou funcionalidades oferecidas no ou através
          do site, ou aplicativo móvel (coletivamente “Site” ou “Sites”) será considerado expresso o seu consentimento
          para a coleta, uso e divulgação de informações pessoais conforme estabelecido nesta Política de Privacidade.
          Observe que se optar por compartilhar suas informações em um formato aberto, como por meio de um site de
          terceiros, como o Facebook, Instagram ou outras mídias sociais, serão consideradas informações públicas – e
          não pessoais. </p>
      </div>
      <span class="text-xl font-bold">PORQUÊ?</span>
      <div class="indent-6">
        <p>
          A AM.AI Energia está empenhada em proteger a segurança e a privacidade dos seus clientes. Neste contexto,
          elaborou a presente Política de Privacidade, com a finalidade de afirmar o seu compromisso e respeito para com
          as regras de privacidade e de proteção de dados pessoais.</p>
        <p>
          Pretendemos que os nossos clientes conheçam as regras gerais de privacidade e os termos de tratamento dos
          dados que recolhemos, no estreito cumprimento da legislação aplicável neste âmbito, nomeadamente Lei nº
          13.709, de 14 de Agosto de 2018 (“Lei Geral de Proteção de Dados – LGPD” ou simplesmente “LGPD”). </p>
        <p>
          A AM.AI Energia procura respeitar as melhores práticas em matéria de segurança e proteção de dados pessoais,
          de promoção/sensibilização para as boas práticas neste âmbito, e melhorando sistemas de forma a gerir a
          proteção de dados que lhe são disponibilizados pelos seus clientes, no estreito cumprimento das obrigações
          legais. </p>
        <p>
          O preenchimento dos formulários de recolhimento de dados e o fornecimento de dados direta ou indiretamente,
          implicam o conhecimento das condições desta Política, e de quaisquer outros termos, políticas e condições
          específicas referentes aos serviços prestados. </p>
      </div>
      <span class="text-xl font-bold">O QUE SÃO DADOS PESSOAIS?</span>
      <div class="indent-6">
        <p>Entende-se por dados pessoais qualquer informação relacionada a pessoa natural identificada ou identificável
          (titular dos dados), de qualquer natureza e independentemente do respectivo suporte. É considerada
          identificável a pessoa que possa ser identificada direta ou indiretamente, designadamente por referência a um
          número de identificação ou a mais elementos específicos da sua identidade física, fisiológica, psíquica,
          econômica, cultural ou social</p>
        <p>Os dados pessoais poderão ter uma natureza diferenciada em determinadas situações, classificando-os a LGPD
          como “dados sensíveis”. Estes podem versar sobre a origem racial ou étnica do seu titular, as suas opiniões
          políticas, as suas convicções religiosas ou filosóficas, informação genética, identificadores biométricos,
          vida sexual, orientação sexual ou sobre a sua saúde.</p>
      </div>
      <span class="text-xl font-bold">OUTRAS DEFINIÇÕES IMPORTANTES</span>
      <div class=" ml-4 flex flex-col gap-2">
        <ol style="list-style: lower-roman" class="indent-6">
          <li class="">
            Consentimento do titular dos dados – manifestação de vontade, livre, específica, informada e explícita, pela
            qual o titular dos dados aceita, mediante declaração ou ato positivo inequívoco, que os dados pessoais que
            lhe dizem respeito sejam objeto de tratamento;
          </li>
          <li>
            Controlador: Pessoa natural ou jurídica, de direito público ou privado, a quem competem as decisões
            referentes ao tratamento dos dados pessoais;
          </li>
          <li class="!indent-6">
            Definição de perfis – qualquer forma de tratamento automatizado de dados pessoais que consiste na
            utilização desses dados pessoais para, nomeadamente, incluir uma pessoa singular em determinada categoria,
            respeitante ao seu desempenho profissional, à sua situação econômica, saúde, preferências pessoais,
            interesses, comportamento, localização ou deslocações;
            <ol style="list-style: decimal">
              <li>
                Encarregado da proteção de dados (Data Protection Officer – “DPO”) – pessoa ou entidade nomeada para
                garantir, numa organização, a conformidade do tratamento de dados pessoais com o LGPD, assegurando a
                comunicação eficiente com os titulares dos dados e a cooperação com as autoridades de controle, fazendo
                ainda a ponte com as diferentes áreas de atividade dentro do AM.AI Energia. O DPO não recebe instruções
                relativamente ao exercício das suas funções, respondendo diretamente aos órgãos de direção da entidade
                que o nomeou;
              </li>
              <li>
                Responsável pelo tratamento – pessoa singular ou coletiva, autoridade pública, agência ou outro
                organismo que, individualmente ou em conjunto com outras, determina as finalidades e os meios de
                tratamento de dados pessoais;
              </li>
              <li>
                Terceiro – pessoa singular ou coletiva, serviço ou organismo que não seja o titular dos dados, o
                Controlador, o Operador e as pessoas que, sob a autoridade direta do Controlador ou do Operador, estão
                autorizadas a tratar os dados pessoais
              </li>
            </ol>
          </li>
          <li>
            Titular dos dados – pessoa singular identificada ou identificável a quem os dados pessoais dizem respeito;
          </li>
          <li>
            Tratamento – operação ou conjunto de operações efetuadas sobre dados pessoais ou sobre conjuntos de dados
            pessoais, por meios automatizados ou não automatizados, tais como coleta, registo, organização,
            estruturação, conservação, adaptação ou alteração, recuperação, consulta, utilização, divulgação por
            transmissão, difusão ou qualquer outra forma de disponibilização, comparação ou interconexão, a limitação, o
            apagamento ou a destruição;
            <ol style="list-style: decimal" class="ml-8">
              <li>
                Operador: Pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados
                pessoais em nome do controlador;
              </li>
              <li>
                Violação de dados pessoais – violação da segurança que provoque, de modo acidental ou ilícito, a
                destruição, a perda, a alteração, a divulgação ou o acesso, não autorizados, a dados pessoais
                transmitidos, conservados ou sujeitos a qualquer outro tipo de tratamento
              </li>
              <li>
                Pseudonimização – o tratamento de dados pessoais de forma que deixem de poder ser atribuídos a um
                titular de dados específico sem recorrer a informações suplementares, desde que essas informações
                suplementares sejam mantidas separadamente e sujeitas a medidas técnicas e organizativas para assegurar
                que os dados pessoais não possam ser atribuídos a uma pessoa singular identificada ou identificável;
              </li>
            </ol>
          </li>
          <li>
            Anonimização – técnica que resulta do tratamento de dados pessoais a fim de lhes retirar elementos
            suficientes para que deixe de ser possível identificar o titular dos dados, de forma irreversível. Mais
            precisamente, os dados têm de ser tratados de forma a que já não possam ser utilizados para identificar uma
            pessoa singular utilizando o conjunto dos meios suscetíveis de serem razoavelmente utilizados, seja pelo
            responsável pelo tratamento, seja por terceiros.
          </li>
          <li>
            Autoridade Nacional de Proteção de Dados – Órgão da administração pública responsável por zelar, implementar
            e fiscalizar o cumprimento da lei;
          </li>
        </ol>
      </div>
      <span class="text-xl font-bold">QUEM É O RESPONSÁVEL PELO TRATAMENTO DOS SEUS DADOS PESSOAIS ?</span>
      <div class="indent-6">
        <p>A presente Política de Privacidade visa dar conhecimento aos clientes a respeito dos termos de tratamento de
          dados pessoais do AM.AI Energia, determinando as finalidades e meios de tratamento dos seus dados no contexto
          da prestação de serviços, comércio eletrônico, redes sociais e marketplace, pelo que este deve ser considerado
          como Controlador, nos termos da LGPD.</p>
        <p>
          Assim, quando for atendido por um terceiro independente, por conta e ordem do AM.AI Energia, este terceiro
          será considerado um Operador, nos termos da LGPD. Assim, se houver qualquer tipo de questionamento a respeito
          da privacidade dos dados do cliente, solicitamos que também seja indicado quem é este terceiro, quando for o
          caso, para fins de apuração de eventual infração, dolo, negligência, imprudência ou imperícia.
        </p>
        <p>
          Nos termos da presente Política, os clientes do AM.AI Energia estão cientes das responsabilidades referentes
          às informações prestadas sobre os dados pessoais dos usuários do site, das redes sociais de demais canais
          digitais, que assumem o risco em caso documentação e/ou informação incompleta dos usuários e clientes do AM.AI
          Energia cadastrados na plataforma.
        </p>
      </div>
      <span class="text-xl font-bold">QUE DADOS PESSOAIS RECOLHEMOS E ATRAVÉS DE QUE MEIOS ?</span>
      <div class="indent-6">
        <p>
          A AM.AI Energia coleta informações pessoais fornecidas pelo cliente, informações estas capazes de
          identificá-lo. Estas informações coletadas podem variar de acordo com o seu uso do AM.AI Energia, bem como com
          o tipo de informação que você opta nos fornecer.
        </p>
        <p>
          Coletamos suas informações pessoais quando você usa nossos Sites e redes sociais ou faz contato conosco por
          meio de outras fontes, como quando você: (i) visita/navega em nossos Sites; (ii) preenche formulários em
          nossos Sites; (iii) participa e/ou preenche formulários em um evento; (iv) faz ou tentar fazer um pedido; (v)
          registra uma conta/como cliente; (vi) envia-nos um e-mail; (vii) participar de promoções ou pesquisas; (viii)
          se comunica ou relaciona com um representante de atendimento ao cliente; (ix) encaminha informações a um
          amigo; e (x) se inscreve em um evento.
        </p>
        <p>
          Em particular, podemos coletar as seguintes categorias de informações pessoais:
        </p>
        <p>
          – Identificadores pessoais: nome, pseudônimo, endereço (cobrança/ envio / contato), endereço de e-mail, número
          de telefone, número do cartão de crédito, número do cartão de débito, RG/CPF/CNPJ, assinatura, número da conta
          bancária.
        </p>
        <p>
          – Histórico de transações: produtos comprados, obtidos ou considerados.
        </p>
        <p>
          – Dados de comunicação: conteúdo de áudio e eletrônico.
        </p>
        <p>
          Informações que Coletamos Automaticamente
        </p>
        <p>
          Coletamos informações pessoais sobre você.
        </p>
        <p>
          Poderemos usar algumas informações coletadas sobre você e os serviços que você usa para nos ajudar a
          personalizar e melhorar sua experiência. Em particular, podemos coletar as seguintes categorias de informações
          pessoais (independentemente ou por meio de provedores de serviços de marketing):
        </p>
        <p>
          – Identificadores de dispositivo: endereço de protocolo da Internet (IP), tipo de navegador, sistema
          operacional, nome de domínio, ID exclusivo do dispositivo.
        </p>
        <p>
          – Dados de localização: localização física e país inferido.
        </p>
        <p>
          – Internet ou outra atividade de rede semelhante (por meio de cookies, web beacons e pixel tags): histórico de
          navegação, histórico de pesquisa, informações sobre sua interação com nossos Sites, aplicativo, e-mails de
          marketing ou anúncios.
        </p>
        <p>
          Informações que Coletamos de Outras Fontes
        </p>
        <p>
          Algumas informações que coletamos estão disponíveis publicamente. Podemos coletar informações sobre você de
          outras empresas e organizações de agregação de dados. Ao coletar informações adicionais sobre você, podemos
          corrigir informações imprecisas, aumentar a segurança de suas transações e fornece recomendações de produtos e
          ofertas especiais que provavelmente serão de seu interesse.
        </p>
        <p>
          – Inferências extraídas de outras informações pessoais: perfil que reflete as preferências, características,
          tendências psicológicas, predisposições, comportamento e atitudes de uma pessoa.
        </p>
        <p>
          Todas essas informações coletadas pelo AM.AI Energia são cumulativas, a fim de que o AM.AI Energia e seus
          Operadores possam prover um melhor serviço.
        </p>
      </div>
      <span class="text-xl font-bold">CATEGORIA DE DADOS TRABALHADOS, MEIOS E FORMAS DE COLETA</span>
      <div class="indent-6">
        <p>
          O cliente será sempre devidamente informado da obrigatoriedade da disponibilização destes dados para continuar
          o processo de cadastramento junto ao AM.AI Energia. </p>
        <p>
          Quando o cliente cria um cadastro com a AM.AI Energia, são coletados os seguintes dados: Nome Completo, Razão
          Social, Fantasia, Endereço Completo, CNPJ, CPF, RG, IE, Telefone, Forma de Captação, Responsável, Telefone,
          Celular, E-mail, Data do Cadastro, Senha (Criptografada), Código, Logotipo, dados dos Funcionários,
          Prestadores de Serviço, e Fornecedores, contratos, dados bancários, Data Nascimento, Arquivos (Contrato
          Social, dentre outros). </p>
      </div>
      <span class="text-xl font-bold">QUAIS AS FINALIDADES DA COLETA DOS SEUS DADOS PESSOAIS?</span>
      <div class="indent-6">
        <p>
          Os dados pessoais dos clientes são tratados para oferecerem melhor prestação de serviço de gestão de negócios
          da AM.AI Energia, comercial e de marketing digital. Para que isso aconteça, muitas vezes é necessário realizar
          o cruzamento de dados que coletamos, para que as ações de marketing sejam direcionadas àquilo que o cliente
          espera receber do AM.AI Energia. </p>
        <p>
          Neste sentido, usamos os dados pessoais para comunicar e gerir a nossa relação com o cliente. Neste sentido,
          podemos contatá-lo por carta, e-mail, mídias Sociais, SMS, Whatsapp, Telegram e demais canais que julgarmos
          oportunos por motivos administrativos ou operacionais, por exemplo, de modo a enviar-lhe novidades que possam
          vir a ser do seu interesse. Também vamos utilizar os seus dados pessoais para responder aos seus pedidos,
          sugestões ou contatos, para melhorar os nossos serviços e a sua experiência enquanto cliente do AM.AI
          Energia. </p>
        <p>
          – Podemos usar as categorias de informações pessoais mencionadas acima para um ou mais dos seguintes fins
          comerciais: </p>
        <p>
          – Para processar sua solicitação de informações (por exemplo, produtos/serviços, demonstrações culinárias,
          oportunidades de Consultor Independente). </p>
        <p>
          – Para processar transações de produtos e serviços e enviar avisos sobre suas transações. </p>
        <p>
          – Fornecer suporte de vendas e atendimento ao cliente, bem como garantia de qualidade. </p>
        <p>
          – Para cumprir ou atender o motivo pelo qual as informações são fornecidas. Por exemplo, se você nos fornecer
          suas informações bancárias para receber pagamentos de comissões, usaremos essas informações para transmitir os
          pagamentos de comissões. </p>
        <p>
          – Para fornecer marketing e publicidade direcionados, fornecer avisos de atualização de serviço e fazer
          ofertas promocionais com base em suas preferências de comunicação. </p>
        <p>
          – Para fornecer suporte de vendas. </p>
        <p>
          – Para permitir e-mails para amigos. Podemos fornecer funcionalidade para permitir que você envie mensagens
          sobre o conteúdo relacionado ao Site a um amigo através do Site. Se desejar usar este recurso, você pode nos
          fornecer o endereço de e-mail do seu amigo para que possamos facilitar o envio da sua mensagem para ele. </p>
        <p>
          – Para verificar sua identidade, incluindo questões relacionadas à conta. </p>
        <p>
          – Para enviar comunicações administrativas relativas ao Site, anúncios relacionados a serviços, etc., que são
          necessários para atendê-lo, responder às suas preocupações e fornecer o alto nível de atendimento ao cliente
          que o AM.AI Energia oferece. Como essas informações podem ser importantes para o nosso uso, você não pode
          cancelar o recebimento de tais comunicações, a menos que retire explicitamente o seu consentimento para nosso
          uso de suas informações pessoais conforme descrito nesta Política de Privacidade. </p>
        <p>
          – Para revisar/gerenciar o uso e as nossas operações e para conformidade com nossos Termos de Uso e a
          lei. </p>
        <p>
          – Para resolver problemas do nosso negócio ou nossos serviços. </p>
        <p>
          – Para contatá-lo em qualquer número de telefone, através de uma chamada de voz ou através de mensagens de
          texto (SMS / Whatsapp / Telegram) ou e-mail, conforme autorizado pelos nossos Termos e Condições. </p>
        <p>
          – Para detectar, prevenir ou investigar violações de segurança, fraude ou outra atividade
          suspeita/proibida/ilegal; ou violações de nossa Política de Privacidade. </p>
        <p>
          – Manter registros apropriados para fins administrativos internos. </p>
        <p>
          – Para fornecer informações importantes sobre segurança do produto. </p>
        <p>
          – Usamos o seu endereço IP e os endereços IP de todos os usuários, para fins de cálculo dos níveis de uso,
          ajudar a diagnosticar problemas com os servidores, administrar o Site, analisar tendências,
          estatísticas/pesquisas internas, incluindo detecção e prevenção de atividades suspeitas, administrar o Site,
          rastrear padrões de tráfego e reunir informações demográficas para uso agregado. </p>
        <p>
          – Para melhorar nossos canais digitais e apresentar o conteúdo a você. </p>
        <p>
          – Para testes, pesquisas, análises e desenvolvimento de produtos. </p>
        <p>
          – Conforme descrito a você ao coletar suas informações pessoais. </p>
        <p>
          – Podemos usar essas tecnologias para coletar informações para uma variedade de propósitos, como analisar como
          nossos canais digitais são usados, personalizar sua experiência conosco ou melhorar nosso conteúdo ou ofertas.
          Seu navegador pode fornecer ferramentas para bloquear ou deletar cookies. No entanto, se o seu navegador
          estiver configurado para rejeitar cookies ou você os deleta manualmente, poderá ter alguns problemas para
          acessar e usar algumas das páginas e recursos que estão atualmente em nossas plataformas digitais, ou que
          poderemos colocar no futuro. (cookies) </p>
      </div>
      <span class="text-xl font-bold">COM QUE FUNDAMENTO TRATAMOS OS SEUS DADOS PESSOAIS?</span>
      <div class="indent-6">
        <p>
          O AM.AI Energia tratará os seus dados pessoais apenas quando esteja devidamente habilitado. A LGPD exige, para
          que o tratamento de dados pessoais seja lícito, que exista um fundamento de licitude adequado para cada
          tratamento específico. </p>
        <p>
          Relativamente aos tratamentos dos seus dados efetuados pelo AM.AI Energia para melhorar os nossos serviços e
          cumprir os nossos objetivos administrativos e de qualidade, o fundamento de licitude adequado será a
          prossecução de interesses legítimos do Controlador, bem como Cumprimento Contratual, quando aplicável, além do
          próprio consentimento do cliente. Tal implica que os titulares dos dados possam opor-se ao tratamento dos seus
          dados para os efeitos acima referidos, ao abrigo do LGPD, caso apresentem motivos válidos relacionados com a
          sua situação particular. Em tal eventualidade, o Controlador poderá apresentar razões legítimas que
          justifiquem a continuação desse tratamento, caso em que se reserva o direito de continuar a tratar os seus
          dados para esses efeitos, tal como nos casos em que tal tratamento seja necessário para efeitos de declaração,
          exercício ou defesa de um direito em processo judicial. </p>
        <p>
          Já relativamente ao tratamento de dados realizado pelo AM.AI Energia no contexto do cumprimento de obrigações
          legais, o fundamento de licitude para a realização de tais tratamentos – na sua maioria, comunicações de dados
          para entidades externas – será a necessidade do tratamento para o efeito do cumprimento de obrigações
          jurídicas do Controlador, inclusive cumprimento contratual ou legítimo interesse. </p>
      </div>
      <span class="text-xl font-bold">QUE PROFISSIONAIS DO AM.AI Energia TÊM ACESSO AOS SEUS DADOS?</span>
      <div class="indent-6">
        <p>
          No âmbito do tratamento dos seus dados pessoais, o AM.AI Energia observa, a todo o tempo, os princípios da
          proteção de dados desde a concepção (privacy bydesign). Tal compromisso implica, entre outros aspetos, que os
          seus dados pessoais serão de acesso limitado às pessoas que tenham necessidade de os conhecer no exercício das
          suas funções, na estrita medida do necessário para a prossecução das finalidades de tratamento que já
          elencamos acima. </p>
      </div>
      <span class="text-xl font-bold">QUAL O PERÍODO DE CONSERVAÇÃO DOS SEUS DADOS PESSOAIS?</span>
      <div class="indent-6">
        <p>
          Os dados pessoais dos clientes do AM.AI Energia recolhidos são tratados no estrito cumprimento da legislação
          aplicável, sendo armazenados em base de dados específicas. Tais dados são conservados em um formato que
          permita a identificação dos titulares dos dados apenas durante o período necessário para as finalidades para
          as quais são tratados. </p>
        <p>
          O período durante o qual os dados são armazenados e conservados varia de acordo com a finalidade para a qual a
          informação é utilizada. Existem, no entanto, requisitos legais que obrigam a conservar os dados por um
          determinado período. Tomamos por referencial para determinação do período de conservação adequado as várias
          deliberações das autoridades de controle de proteção de dados, nomeadamente da Autoridade Nacional de Proteção
          de Dados- ANPD. </p>
      </div>
      <span class="text-xl font-bold">QUAIS OS DIREITOS DOS TITULARES DOS DADOS?</span>
      <div class="indent-6">
        <p>
          Nos termos da legislação aplicável, o titular dos dados poderá solicitar, a todo o tempo, o acesso aos dados
          pessoais que lhe digam respeito, bem como à sua retificação, à portabilidade dos seus dados, diretamente
          através do e-mail do AM.AI Energia, ou mediante contato presencial com o AM.AI Energia. </p>
        <p>
          Você também tem o direito de: </p>
        <p>
          – Solicitar detalhes sobre as categorias de informações pessoais coletadas sobre você e, se permitido e
          prático, uma cópia das informações pessoais (portabilidade de dados). </p>
        <p>
          – Solicitar a exclusão de qualquer informação pessoal que coletamos de você, sujeito a certas exceções. Assim
          que sua solicitação for verificada, daremos prosseguimento a ela, a menos que uma exceção se aplique. Existe a
          possibilidade de negarmos sua solicitação de exclusão se a retenção das informações for necessária para nós ou
          nossos provedores de serviço podermos: </p>
        <p>
          – Concluir a transação para a qual coletamos as informações pessoais, fornecer um bem ou serviço que você
          solicitou, realizar ações razoavelmente previstas no contexto de nosso relacionamento comercial contínuo com
          você ou, de outra forma, executar nosso contrato com você. </p>
        <p>
          – Detectar incidentes de segurança, proteger contra atividades maliciosas, enganosas, fraudulentas ou ilegais
          ou processar os responsáveis por tais atividades. </p>
        <p>
          – Depurar produtos para identificar e reparar erros que prejudiquem a funcionalidade pretendida
          existente. </p>
        <p>
          – Exercer a liberdade de expressão, garantir o direito de outro consumidor de exercer seus direitos de
          liberdade de expressão, ou exercer outro direito previsto em lei. </p>
        <p>
          – Cumprir com a LGPD e legislação competente. </p>
        <p>
          – Envolver-se em pesquisas públicas ou científicas, históricas ou estatísticas revisadas por pares de
          interesse público que cumpram todas as outras leis de ética e privacidade aplicáveis, caso a exclusão das
          informações provavelmente impossibilite ou prejudique seriamente a realização da pesquisa, se você tiver
          previamente informado seu consentimento. </p>
        <p>
          – Permitir apenas usos internos que estejam razoavelmente alinhados com as expectativas do consumidor com base
          em seu relacionamento conosco. </p>
        <p>
          – Cumprir uma obrigação legal. </p>
        <p>
          – Fazer outros usos internos e legais dessas informações que sejam compatíveis com o contexto em que você as
          forneceu. </p>
        <p>
          Sem prejuízo de qualquer outra via de recurso administrativo ou judicial, o titular dos dados tem direito a
          apresentar uma reclamação à ANPD ou a outra autoridade de controle competente nos termos da lei, caso
          considere que os seus dados não estão sendo objeto de tratamento legítimo por parte do AM.AI Energia, nos
          termos da legislação aplicável e da presente Política. </p>
      </div>
      <span class="text-xl font-bold">QUAIS AS MEDIDAS DE SEGURANÇA ADOTADAS PELO AM.AI Energia?</span>
      <div class="indent-6">
        <p>
          O AM.AI Energia está empenhada em assegurar a confidencialidade, proteção e segurança dos dados pessoais dos
          seus clientes, através da implementação das medidas técnicas e organizativas adequadas para proteger os seus
          dados contra qualquer forma de tratamento indevido ou ilegítimo e contra qualquer perda acidental ou
          destruição destes dados. Para o efeito, dispomos de sistemas e equipes destinados a garantir a segurança dos
          dados pessoais tratados, criando e atualizando procedimentos que previnam acessos não autorizados, perdas
          acidentais e/ou destruição dos dados pessoais, comprometendo-se a respeitar a legislação relativa à proteção
          de dados pessoais dos clientes e a tratar estes dados apenas para os fins para que foram recolhidos, assim
          como a garantir que estes dados são tratados com adequados níveis de segurança e confidencialidade. </p>
        <p>
          O AM.AI Energia pode, em alguns casos, transmitir os seus dados pessoais a terceiros. O AM.AI Energia definiu
          regras claras contratuais no tratamento de dados pessoais com os seus operadores, e exige que estes adotem as
          medidas técnicas e organizacionais apropriadas para proteger os seus dados pessoais. Contudo, em alguns casos,
          podemos ser obrigados por lei a divulgar os seus dados pessoais a terceiros (tais como autoridades de
          controle) relativamente aos quais temos um controle limitado relativamente à proteção dos dados pessoais. </p>
        <p>
          A base de dados de informações formada pelo AM.AI Energia pode ser disponibilizada a parceiros de negócio
          estratégicos visando o benefício e geração de resultados mútuos, como o fornecimento ou melhora de nossos
          produtos, serviços e propaganda. </p>
        <p>
          O AM.AI Energia não se responsabiliza pelo uso e tratamento dado pelos parceiros de negócios e econômico do
          AM.AI Energia aos dados dos clientes coletados e compartilhados, sendo de responsabilidade do AM.AI Energia ou
          parceiro que os utilizar dar o devido tratamento e uso. </p>
        <p>
          Pode ser necessário – por lei, processo legal, litígio e/ou solicitações de autoridades públicas e
          governamentais dentro ou fora de seu país de residência – que o AM.AI Energia revele suas informações
          pessoais. Podemos também revelar suas informações se determinarmos que, para propósitos de segurança nacional,
          imposição da lei ou outros problemas de importância pública, a revelação será necessária ou apropriada. </p>
        <p>
          Também podemos revelar suas informações se determinarmos que a revelação é razoavelmente necessária para impor
          nossos termos e condições ou proteger nossas operações ou usuários. Além disso, no caso de uma reorganização,
          fusão ou venda, podemos transferir qualquer e todas as informações pessoais que coletamos a terceiros
          relevantes. </p>
      </div>
      <span class="text-xl font-bold">EM QUE CIRCUNSTÂNCIAS EXISTE COMUNICAÇÃO DE DADOS A OUTRAS ENTIDADES?</span>
      <div class="indent-6">
        <p>
          O AM.AI Energia recorre a outras entidades para a prestação de determinados serviços. Eventualmente essa
          prestação de serviços poderá implicar o acesso, por estas entidades, a dados pessoais dos seus clientes. Tal
          será o caso das entidades que prestem serviços de suporte dos sistemas informáticos do AM.AI Energia. </p>
        <p>
          Assim, qualquer entidade que se caracterize como Operador do AM.AI Energia tratará os dados pessoais dos
          nossos clientes, em nosso nome e por nossa conta, na estrita obrigação de seguir as nossas instruções. O AM.AI
          Energia assegura que tais entidades que se caracterizam por ser Operadores oferecem garantias suficientes de
          execução de medidas técnicas e organizacionais adequadas de forma que o tratamento satisfaça os requisitos da
          lei aplicável e assegure a segurança e proteção dos direitos dos titulares dos dados, nos termos do acordo de
          subcontratação celebrado com os referidos Operadores. </p>
        <p>
          O AM.AI Energia poderá, ainda, transmitir dados pessoais dos seus clientes a entidades terceiras, quando
          julgue tais comunicações de dados como necessárias ou adequadas: </p>
        <p>
          i. à luz da lei aplicável, </p>
        <p>
          ii. cumprimento contratual; </p>
        <p>
          iii. legítimo interesse; </p>
        <p>
          i. no cumprimento de obrigações jurídicas/ordens judiciais, e; </p>
        <p>
          ii. para responder a solicitações de autoridades públicas ou governamentais. </p>
        <p>
          Neste sentido, o AM.AI Energia poderá transmitir os seus dados pessoais à qualquer Entidade Pública
          Contratante, aos Tribunais, Solicitadores, aos órgãos de polícia criminal ou ao Ministério Público quando seja
          notificado para o efeito ou quando tal seja necessário para o cumprimento de obrigações jurídicas, conforme
          legalmente previsto. </p>
        <p>
          O AM.AI Energia poderá ainda transmitir os seus dados pessoais à prestadores de serviços sob contrato conosco
          e que dêem suporte às nossas operações comerciais, como processamento de pagamentos que não sejam em dinheiro,
          cálculos de impostos sobre vendas/uso, cobrança de contas, envio de comunicações de marketing, atendimento ao
          cliente, administração de promoções/concursos/sorteios, gerenciamento/planejamento de eventos, hospedagem de
          IT, produtos de manutenção, realização de pesquisas, atendimento de pedidos, agregação de dados e serviços de
          tecnologia. Nossos contratos determinam que esses provedores de serviço apenas usem suas informações em
          conexão com os serviços que prestam para nós e não para seu próprio benefício. </p>
        <p>
          Por favor observe que nossos provedores de serviços podem estar localizados em jurisdições estrangeiras e suas
          informações pessoais podem estar sujeitas às leis dessas jurisdições estrangeiras e acessíveis às autoridades
          policiais e outras autoridades. </p>
        <p>
          Em qualquer das situações acima mencionadas, o AM.AI Energia compromete-se a tomar todas as medidas razoáveis
          para garantir a proteção efetiva dos dados pessoais que trata. </p>
      </div>
      <span class="text-xl font-bold">CONTATE-NOS</span>
      <div class="indent-6">
        <p>
          Poderá contatar o Encarregado de Proteção de Dados (“DPO”) do AM.AI Energia para mais informações sobre o
          tratamento dos seus dados pessoais, bem como quaisquer questões relacionadas com o exercício dos direitos que
          lhe são atribuídos pela legislação aplicável e, em especial, os referidos na presente Política de Privacidade,
          através dos seguintes contatos: e-mail contato@amaienergia.com.br. </p>
      </div>
      <span
          class="text-xl font-bold">DIREITO À NÃO DISCRIMINAÇÃO PARA O EXERCÍCIO DE SEUS DIREITOS DE PRIVACIDADE</span>
      <div class="indent-6">
        <p>
          Não iremos discriminar você por exercer qualquer um dos direitos descritos acima. Isso inclui, mas não se
          limita a: (i) negar bens ou serviços a você; (ii) cobrar de você preços ou taxas diferentes por bens ou
          serviços, inclusive por meio do uso de descontos ou outros benefícios ou imposição de penalidades; (iii)
          fornecer um nível ou qualidade diferente de bens ou serviços; ou (iv) sugerir que você receberá um preço ou
          taxa diferente por bens ou serviços ou um nível ou qualidade diferente de bens ou serviços. </p>
      </div>
      <span class="text-xl font-bold">MÍDIAS SOCIAIS</span>
      <div class="indent-6">
        <p>
          Trabalhamos com sites de redes sociais como Facebook, Twitter, Pinterest, Instagram, Google, LinkedIn, Tik
          Tok, Clubhouse e YouTube. Todas essas empresas operam sites de terceiros. Fornecemos acesso as nossas
          plataformas digitais por terceiros e parceiros de negócios para que possamos gerar interesse em nossos
          produtos entre os membros de suas redes sociais e permitir que você compartilhe o interesse nos produtos com
          amigos em sua rede. O uso de quaisquer recursos disponibilizados a você em nossas plataformas digitais por
          terceiros pode resultar na coleta ou compartilhamento de informações sobre você por nós ou por terceiros. Se
          você não deseja que tenhamos acesso às informações sobre você em sites de terceiros, você deve notificar as
          plataformas de terceiros a não compartilhar as informações. Não podemos controlar como seus dados são
          coletados, armazenados, usados ou compartilhados por sites de terceiros ou a quem são divulgados.
          Certifique-se de revisar as políticas de privacidade e configurações de privacidade em seus sites de redes
          sociais para ter certeza de compreender as informações que estão compartilhando. Se você não deseja que um
          site de terceiros compartilhe informações sobre você, deve entrar em contato com esse site e determinar se ele
          oferece a oportunidade de cancelar o compartilhamento dessas informações. O AM.AI Energia não é responsável
          por como esses terceiros podem usar as informações coletadas de ou sobre você. </p>
      </div>
      <span class="text-xl font-bold">USO POR MENORES DE IDADE</span>
      <div class="indent-6">
        <p>
          Não pretendemos que nossas plataformas digitais ou serviços online sejam usados por nenhum menor de 18 anos.
          Caso você seja pai ou responsável e acha possível termos coletado informações sobre seu filho(a), entre em
          contato conosco em contato@AM.AI Energiaenergia.com.br. </p>
      </div>
      <span class="text-xl font-bold">PUBLICIDADE COM BASE EM INTERESSES</span>
      <div class="indent-6">
        <p>
          Podemos fazer parceria com redes de anúncios e outros provedores de veiculação de anúncios (“Provedores de
          Publicidade”) que divulgam anúncios em nosso nome e de outros em sites não afiliados. Alguns desses anúncios
          podem ser personalizados, o que significa que se destinam a ser mais relevantes para você com base nas
          informações que os Provedores de Publicidade coletam sobre suas visitas a este Site e outros sites ao longo do
          tempo. </p>
      </div>
      <span class="text-xl font-bold">SITES E PLUG-INS DE TERCEIROS</span>
      <div class="indent-6">
        <p>
          Nossas plataformas digitais podem conter links para sites de terceiros ou aplicativos que não são afiliados ao
          AM.AI Energia – e que podem ter políticas de privacidade diferentes das nossas. Não somos responsáveis pelas
          práticas de privacidade de outros sites e incentivamos você a ler as declarações de privacidade deles antes de
          divulgar qualquer informação pessoal. Por favor entre em contato com esses sites diretamente se tiver alguma
          dúvida sobre suas políticas de privacidade. Este Site pode incluir ferramentas de mídia social, como redes
          sociais e ferramentas de blog oferecidas por terceiros. Se você usar essas ferramentas para compartilhar
          informações sobre o uso do Site ou de outra forma interagir com recursos de mídia social no Site, essas
          empresas de mídia social terceirizadas podem coletar informações sobre você e podem usar e compartilhar tais
          informações de acordo com suas próprias políticas, inclusive compartilhando tais informações com o público em
          geral. Suas interações com empresa de mídia social terceirizadas e o uso de seus recursos são regidos pelas
          políticas de privacidade das empresas de mídia social que fornecem esses recursos. Nós incentivamos você a ler
          cuidadosamente as políticas de privacidade de qualquer conta de mídia social que você criar e usar. </p>
      </div>
      <span class="text-xl font-bold">COMO FICO SABENDO SOBRE AS ALTERAÇÕES DA POLÍTICA DE PRIVACIDADE?</span>
      <div class="indent-6">
        <p>
          O AM.AI Energia reserva-se o direito de, a qualquer momento, proceder a modificações ou atualizações à
          presente Política de Privacidade, sendo essas alterações devidamente atualizadas nas nossas Plataformas.
          Sugerimos que as consulte regularmente para estar a par de eventuais alterações. </p>
      </div>
      <span class="text-xl font-bold">POLÍTICA DE COOKIES</span>
      <div class="indent-6">
        <p>
          Utilizamos cookies para personalizar conteúdo e anúncios, fornecer funcionalidades de redes sociais e analisar
          o nosso tráfego. Também partilhamos informações acerca da sua utilização do site com os nossos parceiros de
          redes sociais, publicidade e análise. Clique em “Configurações de cookie” para atualizar suas preferências
          pessoais de cookies. </p>
      </div>
      <span class="text-xl font-bold">COOKIES PUBLICITÁRIOS</span>
      <div class="indent-6">
        <p>
          Esses cookies podem ser configurados através do nosso site por nossos parceiros de publicidade parceiros de
          redes sociais. Eles podem ser utilizados por essas empresas para construir um perfil de seus interesses e
          mostrar-lhe anúncios relevantes em outros sites. Esses cookies também podem ser usados para permitir que você
          compartilhe páginas e conteúdo que você achar interessante em nossos sites através de redes sociais de
          terceiros e outros sites. Eles não armazenam informações pessoais diretamente, mas são baseados em identificar
          exclusivamente o seu navegador e dispositivo de internet. Se você não permitir que esses cookies, você vai
          experimentar menos publicidade direcionada e pode não ser capaz de compartilhar páginas ou conteúdo que você
          achar interessante através de sites de redes sociais de terceiros. </p>
      </div>
      <span class="text-xl font-bold">COOKIES DE FUNCIONALIDADE</span>
      <div class="indent-6">
        <p>
          Estes cookies permitem o website para fornecer funcionalidade e personalização avançada. Eles podem ser
          criados por nós ou por terceiros fornecedores cujos serviços temos acrescentado às nossas páginas. Se você não
          permitir que esses cookies, em seguida, alguns ou todos estes serviços podem não funcionar corretamente. </p>
      </div>
      <span class="text-xl font-bold">COOKIES ANALÍTICOS</span>
      <div class="indent-6">
        <p>
          Esses cookies nos permitem contar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho
          do nosso site. Eles nos ajudam a saber quais páginas são as mais e menos populares e ver como os visitantes se
          movem em torno do site. Todas as informações coletar esses cookies é agregada e, portanto, anônimo. Se você
          não permitir que esses cookies não saberemos quando você visitou nosso site, e não será capaz de monitorar seu
          desempenho. </p>
      </div>
      <span class="text-xl font-bold">COOKIES ESTRITAMENTE NECESSÁRIOS</span>
      <div class="indent-6">
        <p>
          Esses cookies são necessários para o site funcionar e não pode ser desligado em nossos sistemas. Eles são
          geralmente apenas um conjunto em resposta às ações feitas por você que ascendem a um pedido de serviços, tais
          como configurar suas preferências de privacidade, entrando ou preenchimento de formulários. Você pode
          configurar seu navegador para bloquear ou alertá-lo sobre estes cookies, mas algumas partes do site não vão,
          então, trabalhar. Esses ‘cookies’ não armazena qualquer informação de identificação pessoal. </p>
      </div>
      <span class="text-xl font-bold">COOKIES E SUA PRIVACIDADE</span>
      <div class="indent-6">
        <p>
          Quando você visitar qualquer site da web, pode armazenar ou recuperar informações em seu navegador,
          principalmente na forma de cookies. Esta informação pode ser sobre você, suas preferências ou o dispositivo e
          é usado principalmente para fazer funcionar o site como você espera que ele. A informação não costuma
          identificá-lo diretamente, mas pode dar-lhe uma experiência web mais personalizada. Porque nós respeitamos seu
          direito à privacidade, você pode optar por não permitir alguns tipos de cookies. Clique nas categorias
          diferentes rubricas para saber mais e mudar as nossas configurações padrão. No entanto, alguns tipos de
          bloqueio de cookies podem afetar sua experiência no site e os serviços que são capazes de oferecer. </p>
      </div>
      <div>
        <Button label="Fechar" severity="secondary" @click="$emit('update:visible', false)"/>
      </div>
    </div>
  </Dialog>
</template>

<style scoped>
ol li{
  text-indent: 1.5rem
}
</style>