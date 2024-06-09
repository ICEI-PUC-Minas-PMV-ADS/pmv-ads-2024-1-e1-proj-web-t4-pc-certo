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
    <li>Escolher as peças do computador e ir verificando se a soma está sendo feita corretamente e se o orçamento está sendo respeitado.</li> 
   </ol>
   </td>
  <td>A soma deve ser atualizada corretamente sempre que um componente é adicionado ou removido da seleção. A aplicação deve fornecer um feedback quando o orçamento é excedido ou está dentro do limite.</td>
  <td>Pedro Bezerra</td>
 </tr>
 <tr>
  <td>CT-02: Verificar a possibilidade do usuário submeter publicações com base no login</td>
  <td>
   <ul>
    <li>RF-08:	A aplicação deve permitir o login de usuários para o uso do fórum.</li>
   <li>RF-11:	A aplicação deve conter um fórum da comunidade.</li>
   </ul>
  </td>
  <td>Garantir que a impossibilidade de realizar publicações caso usuário não esteja logado.</td>
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
  <td>A soma deve ser atualizada corretamente sempre que um componente é adicionado ou removido da seleção. A aplicação deve fornecer um feedback quando o orçamento é excedido ou está dentro do limite.</td>
  <td>Pedro Bezerra</td>
 </tr>
</table>
