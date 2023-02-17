# **React**

## Instalação Node Windows

- Para criar as nossas aplicações em React vamos utilizar um executor de scripts do Node, que é o **_npx_**;
- Com o comando: **_npx create-react-app <nome>_** temos uma nova aplicação sendo gerada;
- Podemos iniciar a aplicação com **_npm start_**;

## O que são hooks?

- Recursos do React que tem **_diversas funções_**;
- Como: **_guardar e alterar o estado de algum dado_** na nossa aplicação;
- Todos os hooks começam com **_use_**, por exemplo: **_useState_**;
- Podemos criar os nossos hooks, isso é chamado de **_custom hook_**;
- Os hooks precisam ser **_importados_**;
- Geralmente são úteis em todas as aplicações;

## useState hook

- O hook de **_useState_** é um dos mais utilizados;
- Utilizamos para **_gerenciar o estado de algum dado_**, variáveis não funcionam corretamente, o componente não re-renderiza;
- Para guardar o dado definimos o nome da variável e para alterar vamos utilizar **_setNome_**, onde nome é o nome do nosso dado;

## Renderização de lista

- Uma outra ação bem comum é **_renderizar listas_** de dados no template;
- Fazemos isso com os dados com tipo de **_array_**;
- Utilizando o **_método map_** para nos auxiliar;
- Além dos dados podemos **_inserir JSX_** em cada interação;

## A propriedade key

- Interar listas sem a **_propriedade key_** nos gera um warning, podemos verificar isso no console;
- **_O React precisa de uma chave única_** em cada um dos itens interados;
- Isso serve para **_ajudá-lo na renderização do componente_**;
- Geralmente teremos um **_array de objetos_** e podemos colocar key como alguma chave única, como o **_id_** de algum dado;
- Em **_último caso_** devemos utilizar o index do método map;

## Previous state

- **_Previous state_** é um recurso que nos permite pegar o dado em seu valor original derntro de um set de dado;
- **_Isso é muito utilizado para modificar listas_**, pois temos o valor antigo e transformammos em um valor novo;
- O **_primeiro argumento_** de um set sempre será o previous state;

## Renderização condicional

- **_Renderização condicional_** é quando imprimimos uma parte do template baseado em uma condição;
- Ou seja, utilizando uma **_checagem com if_**;
- Isso é interessante em situações como: usuário autenticado/ não autenticado;

## Props

- **_Props_** é outro recurso fundamental do React;
- Nos premite **_passar valores de componente pai para um componente filho_**;
- Isso será muito útil quando os dados forem carregados via banco de dados, por exemplo;
- As props vem em um objeto no **_argumento da função do componente_**;

## Desestruturando props

- è super comum passar **_mais de uma prop em um componente_**;
- Para facilitar isso o React nos permite **_desestruturar as propriedades que chegam_**, como recurso de destructuring;
- Se temos duas props: name e age;
- Podemos fazer assim: function MyComponent({name, age});
- Agora **_não precisamos mais utilizar_** props.algumaCoisa;

## Reutilização de componentes

- Com **_props_** a **_reutilização de componentes_** começa a fazer muito sentido;
- Se temos os dados de 1000 carros por exemplo, podemos **_reaproveitar o nosso CarDetails 1000 vezes_**;
- Isso torna o nosso código mais padronizado, facilitando a manutenção;

## Reutilização com loop

- Os arrays de dados podem ter **_muitos itens_** também;
- Então o correto é utilizar uma **_estrutura de loop (map)_** para a sua exibição;
- E com isso conseguimos conciliar os **_três conceitos_**: renderização de listas, reaproveitamento de componentes e props;

## React Fragments

- Os **_React fragments_** são interessantes para quando precisamos ter mais de um elemento pai em um componente;
- Criamos uma tag vazia: <>...</>
- **_Ela serve como elemento pai_**, não alterando a estrutura do HTML com uma div, por exemplo;

## Children prop

- **_Children prop_** é um recurso utilizado para quando um componente precisa ter JSX dentro dele;
- Porém **_este JSX vem do componente pai_**;
- Então o componente age como um **_container_**, abraçando estes elementos;
- E children é considerada uma **_prop do componente_**;

## Funçoes em props

- As **_funções podem ser passadas para as props_** normalmente;
- Basta criar a função no componente pai e **_enviar como prop_** para o componente;
- No componente filho ela pode ser ativada por um evento, por exemplo;

## Elevação de state

- Elevação de state ou **_State lift_** é quando um valor é elevado do componente filho para o componente pai;
- Geralmente temos **_um componente que usa o state e o outro que o altera_**;
- Então precisamos passar a alteração para o componente pai, e este passa para o componente que usa o state;

## CSS global

- O **_CSS global_** é utilizado para estilizar diversos elementos em comum ou fazer um reset no CSS;
- Utilizamos o arquivo **_index.css_** para isso;
- Ele está na pasta src;

## CSS de Componente

- O **_CSS de componente_** é utilizado para um componente específico;
- Geralmente **_é criado um arquivo com o mesmo nome do componente_** e este é **_importado no componente_**;
- Note que este método **\*não é scoped**, ou seja, o CSS vaza para outros componentes se houver uma regra em colisão;
- O React ja cria um exemplo desta técnica com o App.css/js;

## Inline Style

- O inline style do React é **_igual o do css_**;
- Por meio do **_atributo style_** conseguimos aplicar regras diretamente em um elemento;
- **_Devemos optar por outras maneiras de CSS_**, o inline pode dificultar a manutenção ou deixar o código imprevisível em algumas situações;

## Inline style Dinâmico

- O **_CSS dinâmico inline_** aplica estilo baseado em uma condicional;
- Vamos inserir no atributo um **_if ternário_**;
- Dependendo da condição podemos mudar que regras de estili um elemento recebe;

## Classes dinâmicas no CSS

- Podemos também aplicar lógica para **_mudar a classe de CSS de um elemento_**;
- Tambpem utilizaremos o **_if ternário_**;
- Essa abordagem é **_mais interessante que o CSS inline_**;
- Pois as classes estarão isoladas no arquivo de CSS, resolvendo o problema de organização de código;

## CSS Modules

- O **_CSS Modules_** é um recurso de CSS **_scoped_**;
- Ou seja, ele vai ser **_exclusivo do componente_**;
- O nome do arquivo é: **_Componente.module.css_**;
- Precisamos importá-lo também no componente;

## Formulários e  React

- no React  vamos  tambbém utilizar a ***tag form*** para formulários;
- As labels dos inputs contém o atributo htmlfor, que deve ter o valor do name do inpput;
- ***Não utilizamos action***, pois o processamento será feito de forma assíncrona;

## Label envolvendo input

- Em React um padrão comum é a ***tag label envolvendo o input***;
- Isso faz com que o atributo se torne ***opcional***;
- ***simplificando nossa estruttura de HTLM***, sem perder a semântica;

## Manipulação de valores

- Para manipular os valores dos inputs vamos utilizar o ***hook useState***;
- Ou seja, podemos armazenar na variável ***e utilizar o set para alterar o valor***;
- Vamos criar uma função para alterar o valor no evento  ***onChange***;
- Deixando nosso código facil  de trabalhar nas próximas etapas: como envio dos dados para BD e validação;

## Simplificando a manipulação

- Quando temos vários inputs podemos ***realizar a manipulação de forma mais simpes***;
- Basicamente criamos uma ***função inline no onChenge***;
- Ela vai ***alterar o valor do state*** com o método set, da mesma forma que a função isolada;

# Envio de formulário

- Para enviar um form, vmos utilizar o evento ***onSubmit***;;
- ***Ele chamará uma função***, e nesta devemos lembrar de parar  a submissão com o ***precentDefault***;
- Nesta etapa  podemos realizar validações, envio de form para o servidor, reset  de form e outras ações;

## Controlled inputs

- ***Controlled inputs*** é um recurso que nos permite mais flexibilidade nos forms de React;
- Precisamos  apenas ***igualar o valor ao state***;
- Um uso muito comum: formulários de edição, que os dados vem do back-end, conseguimos preencher o input mais facilmente;

## Limpando formulários

- Com o controller inputs, limpar o form será ***fácil***;
- Basta  ***atribuir um valor de uma string vazia aos states*** e pronto!
- Isso  será feito após o envio, em formulários que o usuário precisa preencher novamente;

## input de Textarea

- O textarea ***pode ser considerado um input de texto*** normal;
- Utilizaremos o ***value*** para alterar o state inicial;
- E o evento  ***onChange*** para modificar o valor do state;

## Input  de select

- o select também será ***muito semelhante*** aos outros  inputs;
- Quando temos a alteração  de um valor o ***evento onChange*** pode captar isso;
- O value tambem pode atribuir qual ***option*** estará  selecionada;

## JSON server

- O ***JSON server*** é um pacote npm;
- Ele ***simula uma API***, e isso nos possibilita fazer requisições HTTP;
- Vamos aprender a ***integrar este recurso com o React***;
- Podemos entender isso como uma etapa  de preparação para APIs reais;
- Ou seja, atingir o mesmo resultado  mas sem precisar  de uma estrutura  no back-end;







