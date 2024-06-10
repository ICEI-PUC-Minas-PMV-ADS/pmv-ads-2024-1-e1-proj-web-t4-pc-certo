# Plano de Testes de Software

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento do orçamento e soma dos valores dos componentes</td>
  <td>
   <ul>
    <li>RF-05:	A aplicação deve calcular a soma dos componentes escolhidos para o usuário.</li>
    <li>RF-10:	A aplicação deve verificar se o orçamento está de acordo com a soma do preço dos componentes escolhidos pela aplicação.</li>
   </ul>
  </td>
  <td>Garantir que a soma dos componentes escolhidos e o orçamento está sendo respeitado.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "iniciar"</li>
    <li>Escolher a finalidade</li> 
    <li>Escolher o nível de orçamento</li> 
    <li>Escolher o valor máximo a investir</li> 
     <li>Clicar em "Avançar" </li>
    <li>Escolher as peças do computador e ir verificando se a soma está sendo feita corretamente e se o orçamento está sendo respeitado.</li> 
   </ol>
   </td>
  <td>A soma deve ser atualizada corretamente sempre que um componente é adicionado ou removido da seleção. A aplicação deve fornecer um feedback quando o orçamento é excedido ou está dentro do limite.</td>
  <td>Pedro Bezerra</td>
 </tr>
 <tr>
  <td>CT-02: Verificar a possibilidade do usuário submeter publicações com base no login.</td>
  <td>
   <ul>
    <li>RF-08:	A aplicação deve permitir o login de usuários para o uso do fórum.</li>
    <li>RF-11:	A aplicação deve conter um fórum da comunidade.</li>
    <li>RF-13: A aplicação deve permitir que apenas usuários logados realizem publicações no fórum. </li>
   </ul>
  </td>
  <td>Garantir a impossibilidade de realizar publicações caso usuário não esteja logado.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Forum".</li>
    <li>Verificar se há botão para criar nova publicação.</li>
    <li>Informar o endereço da pagina "Nova Publicação - PC Certo".</li>
    <li>Verificar possibilidade de uso da página.</li>
   </ol>
   </td>
  <td>A opção de criar publicaçãos deve ser impossibilitada caso o usuário não tenha realizado login.</td>
  <td>Lucas Gabriel, Caetano Piccolo</td>
 </tr>
 <tr>
  <td>CT-03: A aplicação deve impedir a publicação caso as condições necessárias forem insuficientes.</td>
  <td>
   <ul>
    <li>RF-11:	A aplicação deve conter um fórum da comunidade.</li>
   </ul>
  </td>
  <td>Impossibilitar a publicação de um novo tópico ao forum caso as condições necessárias para tal não forem cumpridas, exibindo informações ao usuário sobre como satisfaze-las.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Forum".</li>
    <li>Verificar se há botão para criar nova publicação.</li>
    <li>Informar o endereço da pagina "Nova Publicação - PC Certo".</li>
    <li>Verificar possibilidade de uso da página.</li>
   </ol>
   </td>
  <td>O botão de enviar a publicação deverá não submeter as informações, além de exibir o(s) motivo(s) que estão impossibilitando o envio, permitindo ao usuário corrigir os campos para realizar sua publicaçao com êxito.</td>
  <td>Lucas Gabriel</td>
 </tr>
  <tr>
  <td>CT-04: Verificar se o programa irá funcionar de acordo com a necessidade do usuário</td>
  <td>
   <ul>
    <li>RF-01:	A aplicação deve perguntar ao usuário qual será especificamente o uso das peças do computador a serem montadas.</li>
    <li>RF-04:	A aplicação deve oferecer um orçamento ajustável para o usuário.</li>
   </ul>
  </td>
  <td>Garantir que o usuário consiga escolher o objetivo do computador e também quanto deseja investir no PC. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "iniciar" ou no Header clicar em "Montar PC"</li>
    <li>Escolher a finalidade e verificar se está sendo salvo corretamente no Local Storage.</li> 
    <li>Escolher o nível de orçamento e verificar se está sendo corretamente salvo no Local Storage.</li> 
    <li>Escolher o valor máximo a investir e verificar se está salvo corretamente no Local Storage.</li> 
     <li>Clicar em "Avançar" </li>
     <li>Verificar se na Página "Escolha de componentes", o campo "Orçamento" está de acordo com o valor máximo escolhido anteriormente</li>
   </ol>
   </td>
  <td>A aplicação deve respeitar as escolhas decididas inicialmente pelo usuário em todo processo de montagem.</td>
  <td>Luan Bezerra</td>
 </tr>
     <tr>
  <td>CT-05: Verificar se o programa irá exibir os componentes escolhidos pelo usuário ao final da montagem</td>
  <td>
   <ul>
    <li>RF-09:	A aplicação deve disponibilizar links de lojas online de hardware de computador para que os usuários comprem as peças diretamente através do site.</li>
    <li>RF-15:	A aplicação deve fornecer um resumo dos componentes selecionados pelo usuário ao final da montagem.</li>
   </ul>
  </td>
  <td>Garantir que o usuário consiga revisar os componentes selecionados. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Iniciar" na Página Inicial ou clicar em "Montar PC" no cabeçalho.</li>
    <li>Escolher a finalidade</li> 
     <li>Escolher o nível de orçamento</li>
     <li>Escolher o valor máximo a se investir</li>
    <li>Clicar em "Avançar"</li>
    <li>Escolher os componentes do computador</li>
    <li>Clicar em "Avançar" ao final de cada etapa da Escolha de Componentes</li>
     <li>Verificar se é redirecionado à página de Resumo de Componentes, exibindo imagens, modelos e preços correspondentes às peças escolhidas</li>
   </ol>
   </td>
  <td>A aplicação deve corresponder às escolhas decididads pelo usuário em todo processo de montagem.</td>
  <td>Pedro Machado</td>
 </tr>
</table>
