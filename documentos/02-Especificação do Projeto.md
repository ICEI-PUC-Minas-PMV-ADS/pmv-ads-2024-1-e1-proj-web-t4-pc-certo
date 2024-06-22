# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Comprador Inexperiente em Hardware</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Um usuário sem experiência em hardware que deseja saber quais peças de computador deve comprar de acordo com suas necessidades e orçamento.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>

1. Estabelecer qual finalidade de uso o computador terá;

2. Definir um orçamento de seu interesse para a montagem sugerida;

3. Receber indicações de onde comprar cada peça da montagem realizada pela aplicação web. </td>

</tr>
</tbody>
</table>
<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02: Comprador Experiente em Hardware</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuários que buscam ajudar outras pessoas no processo de montagem e escolha das peças de um computador.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Acesso ao fórum do site para auxiliar outras pessoas interessadas em montar um computador e discutir assuntos relacionados a hardware de computador</td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 03: Usuário do Fórum</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Deseja interagir com publicações feitas por outros usuários, além de criar novos tópicos para comunidade tirar suas dúvidas. </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Acesso ao fórum do site para tirar suas dúvidas e discutir assuntos relacionados a hardware de computador</td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 04: Comprador Interessado em Aprender</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuário que tem como objetivo aprender e entender sobre como funciona o processo de escolha das peças de um computador a fins de conhecimento.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
1. Um guia que forneça um passo a passo de como escolher as peças certas na hora da montagem de um computador de acordo com cada prioridade;

2. Ter acesso ao fórum para publicar suas dúvidas e ler outras publicações feitas por outros usuários.

3. Conseguir realizar a montagem de um computador através de filtros de compatibilidade entre as peças automaticamente.</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
Comprador Inexperiente em Hardware | Saber quais peças comprar para meu novo computador. | Ter um novo computador que satisfaça minhas necessidades e meu orçamento. |
Comprador Inexperiente em Hardware | Definir um orçamento personalizado para minha montagem. | Montar um computador sem gastos desnecessários, de acordo com minha necessidade. |
Comprador Inexperiente em Hardware | Recomendações de sites seguros para a compra das peças que escolhi. | Ter certeza de que estou comprando no lugar certo e que será seguro. |
Comprador Experiente em Hardware | Compartilhar opinião sobre peças e montagens com outros usuários. | Ajudar outros com base em minhas experiências com o uso do computador. |
Administrador do Fórum | A permissão de banir/suspender usuários do fórum. | Ter maior controle e evitar que usuários inconvenientes atrapalhem os usuários. |
Comprador Interessado em Aprender | Um guia didático que me ajude na escolha e montagem de computadores. | Adquirir mais conhecimento nessa área e ajudar amigos que precisam. |
Comprador Interessado em Aprender | Ler comentários e avaliações de outras pessoas. | Adquirir mais conhecimento através de experiências e comentários de outras pessoas. |


## Requisitos do Projeto

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |A aplicação deve solicitar ao usuário qual será finalidade de uso das peças do computador a ser montado. |Alta|
| RF-02 |A aplicação deve filtrar entre quais peças suprem cada finalidade escolhida pelo usuário anteriormente para a sugestão final da recomendação.|Alta| 
| RF-03 |A aplicação deve coletar as informações por meio de um arquivo JSON dos componentes do computador, como preços e especificações.|Alta| 
| RF-04 |A aplicação deve oferecer um orçamento ajustável para o usuário.|Alta| 
| RF-05 |A aplicação deve calcular a soma dos componentes escolhidos para o usuário.|Alta| 
| RF-06 |A aplicação deve disponibilizar ao usuário a escolha das peças realizadas pela filtragem. |Alta| 
| RF-07 |A aplicação deve permitir o cadastro de usuários para o uso do fórum. |Média| 
| RF-08 |A aplicação deve permitir o login de usuários para o uso do fórum.|Média| 
| RF-09 |A aplicação deve disponibilizar links de lojas online de hardware de computador para que os usuários comprem as peças diretamente através do site.|Baixo| 
| RF-10 |A aplicação deve verificar se o orçamento está de acordo com a soma do preço dos componentes escolhidos pela aplicação.|Alta| 
| RF-11 |A aplicação deve conter um fórum da comunidade. |Média| 
| RF-12 |A aplicação deve permitir o usuário selecionar individualmente cada componente para o computador após o resultado gerado pela aplicação mantendo a compatibilidade e orçamento, caso necessário. |Média| 
| RF-13 |A aplicação deve permitir que apenas usuários logados realizem publicações no fórum.|Média| 
| RF-14 |A aplicação deve fornecer um guia para escolha de peças e como realizar a montagem de um computador. |Alta| 
| RF-15 |A aplicação deve fornecer um resumo dos componentes selecionados pelo usuário ao final da montagem. |Alta| 

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |A aplicação deve funcionar 24 horas por dia, todos os dias da semana. |Alta| 
| RNF-02 |A aplicação deve ser publicada em um ambiente acessível público na Internet.|Alta| 
| RNF-03 |A aplicação deve oferecer uma interface para o usuário simples e direta.|Alta|
| RNF-04 |A aplicação deve ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.|Alta| 
| RNF-05 |A aplicação deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox e Microsoft Edge. |Alta| 
| RNF-06 |A aplicação deve ter bom nível de contraste entre os elementos da tela.|Média| 
| RNF-07 |A aplicação deve armazenar as informações de cadastro dos usuários de forma criptografada. |Alta| 


**Prioridade: Alta / Média / Baixa. 

