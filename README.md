# **React**


## Instalação Node Windows

- Para criar as nossas aplicações em React vamos utilizar um executor de scripts do Node, que é o ***npx***;
- Com o comando: ***npx create-react-app <nome>*** temos uma nova aplicação sendo gerada;
- Podemos iniciar a aplicação com ***npm start***;

## O que são hooks?

- Recursos do React que tem ***diversas funções***;
- Como: ***guardar e alterar o estado de algum dado*** na nossa aplicação;
- Todos os hooks começam com ***use***, por exemplo: ***useState***;
- Podemos criar os nossos hooks, isso é chamado de ***custom hook***;
- Os hooks precisam ser ***importados***;
- Geralmente são úteis em todas as aplicações;

## useState hook

- O hook de ***useState*** é um dos mais utilizados;
- Utilizamos para ***gerenciar o estado de algum dado***, variáveis não funcionam corretamente, o componente não re-renderiza;
- Para guardar o dado definimos o nome da variável e para alterar vamos utilizar ***setNome***, onde nome é o nome do nosso dado; 

## Renderização de lista

- Uma outra ação bem comum é ***renderizar listas*** de dados no template;
- Fazemos isso com os dados com tipo de ***array***;
- Utilizando o ***método map*** para nos auxiliar;
- Além dos dados podemos ***inserir JSX*** em cada interação;

## A propriedade key

- Interar listas sem a ***propriedade key*** nos gera um warning, podemos verificar isso no console;
- ***O React precisa de uma chave única*** em cada um dos itens interados;
- Isso serve para ***ajudá-lo na renderização do componente***;
- Geralmente teremos um ***array de objetos*** e podemos colocar key como alguma chave única, como o ***id*** de algum dado;
- Em  ***último caso*** devemos utilizar o index do método map;

## Previous state

- ***Previous state*** é um recurso que nos permite pegar o dado em seu valor original derntro de um set de dado;
- ***Isso é muito utilizado para modificar listas***, pois temos o valor antigo e transformammos em um valor novo;
- O ***primeiro argumento*** de um set sempre será o previous state;

## Renderização condicional

- ***Renderização condicional*** é quando imprimimos uma parte do template baseado em uma condição;
- Ou seja, utilizando uma ***checagem com if***;
- Isso é interessante em situações como: usuário autenticado/ não autenticado;

## Props

- ***Props*** é outro recurso fundamental do React;
- Nos premite ***passar valores de componente pai para um componente filho***;
- Isso será muito útil quando os dados forem carregados via banco de dados, por exemplo;
- As props vem em um objeto no ***argumento da função do componente***;

## Desestruturando props

- è super comum passar ***mais de uma prop em um componente***;
- Para facilitar isso o React nos permite ***desestruturar as propriedades que chegam***, como recurso de destructuring;
- Se temos duas props: name e age;
- Podemos fazer assim: function MyComponent({name, age});
- Agora ***não precisamos mais utilizar*** props.algumaCoisa;

## Reutilização de componentes

- Com ***props*** a ***reutilização de componentes*** começa a fazer muito sentido;
- Se temos os dados de 1000 carros por exemplo, podemos ***reaproveitar o nosso CarDetails 1000 vezes***;
- Isso torna o nosso código mais padronizado, facilitando a manutenção;

## Reutilização com loop

- Os arrays de dados podem ter ***muitos itens*** também;
- Então o correto é utilizar uma ***estrutura de loop (map)*** para a sua exibição;
- E com isso conseguimos conciliar os ***três conceitos***: renderização de listas, reaproveitamento de componentes e props;

## React Fragments

- Os ***React fragments*** são interessantes para quando precisamos ter mais de um elemento pai em um componente;
- Criamos uma tag vazia: <>...</>
- ***Ela serve como elemento pai***, não alterando a estrutura do HTML com uma div, por exemplo;

## Children prop

- ***Children prop*** é um recurso utilizado para quando um componente precisa ter JSX dentro dele;
- Porém ***este JSX vem do componente pai***;
- Então o componente age como um ***container***, abraçando estes elementos;
- E children é considerada uma ***prop do componente***;

## Funçoes em props

- As ***funções podem ser passadas para as props*** normalmente;
- Basta criar a função no componente pai e ***enviar como prop*** para o componente;
- No componente filho ela pode ser ativada por um evento, por exemplo;

## Elevação de state

- Elevação de state ou ***State lift*** é quando um valor é elevado do componente filho para o componente pai;
- Geralmente temos ***um componente que usa o state e o outro que o altera***;
- Então precisamos passar a alteração para o componente pai, e este passa para o componente que usa o state;

## CSS global

- O ***CSS global*** é utilizado para estilizar diversos elementos em comum ou fazer um reset no CSS;
- Utilizamos o arquivo ***index.css*** para isso;
- Ele está na pasta src;

## CSS de Componente

- O ***CSS de componente*** é utilizado para um componente específico;
- Geralmente ***é criado um arquivo com o mesmo nome do componente*** e este é ***importado no componente***;
- Note que este método ***não é scoped**, ou seja, o CSS vaza para outros componentes se houver uma regra em colisão;
- O React ja cria um exemplo desta técnica com o App.css/js;

## Inline Style

- O inline style do React é ***igual o do css***;
- Por meio do ***atributo style*** conseguimos aplicar regras diretamente em um elemento;
- ***Devemos optar por outras maneiras de CSS***, o inline pode dificultar a manutenção ou deixar o código imprevisível em algumas situações;

## Inline style Dinâmico

- O ***CSS dinâmico inline*** aplica estilo baseado em uma condicional;
- Vamos inserir no atributo um ***if ternário***;
- Dependendo da condição podemos mudar que regras de estili um elemento recebe;

## Classes dinâmicas no CSS

- Podemos também aplicar lógica para ***mudar a classe de CSS de um elemento***;
- Tambpem utilizaremos o ***if ternário***;
- Essa abordagem é ***mais interessante que o CSS inline***;
- Pois as classes estarão isoladas no arquivo de CSS, resolvendo o problema de organização de código;

## CSS Modules

- O ***CSS Modules*** é um recurso de CSS ***scoped***;
- Ou seja, ele vai ser ***exclusivo do componente***;
- O nome do arquivo é: ***Componente.module.css***;
- Precisamos importá-lo também no componente;











Você busca por oportunidades remotas?

Seguem algumas plataformas que você precisa conhecer:

1 - Landing Jobs - https://landing.jobs/

2 - Trampos - https://lnkd.in/gzU2g4Ri

3 - italki - https://www.italki.com/pt

4 - UpWork - https://www.upwork.com/

5 - Virtual Vocations - https://lnkd.in/g2Z-Uet2

6 - Authentic Jobs - https://authenticjobs.com/

7 - Working Nomads - https://lnkd.in/gBZ4V5xK

8 - Remotar - https://remotar.com.br/

9 - Black Vagas - https://lnkd.in/gg8VFBSN

10 - Jobatus Brasil - https://lnkd.in/gmPa4dxi

Conhece mais alguma plataforma ? Me conta nos comentários 😁
