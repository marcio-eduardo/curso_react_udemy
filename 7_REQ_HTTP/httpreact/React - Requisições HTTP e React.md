# React - Requisições HTTP e React

## JSON server

- O ***JSON server*** é um pacote npm;
- Ele ***simula uma API***, e isso nos possibilita fazer requisições HTTP;
- Vamos aprender a ***integrar este recurso com React***;
- Podemos entender isso como uma etapa de preparação para APIs reais;
- Ou seja, atingir o mesmo resultado mas sem precisar de uma estrutura no back-end;

## A importância do useEffect

- O ***useEffect*** faz com que determinada ação seja executada apenas uma vez;
- Isso é interessante pois os componentes estão sempre se ***re-renderizando***, então precisamos ter ***ações únicas*** às vezes;
- O useEffect ainda possui um ***array de dependências***, que deve conter os dados que ativem a exevução da função de forma automática;
- O useEffect estará presente sempre nas ***requisições assíncronas***!

## Resgatando dados com React

- Para trazer os dados vamos ter que utilizar vários recursos;
- Primeiramente ter um local para salvá-los ***(useState)***;
- Renderizar a chamada a API apenas uma vez ***(useEffect)***;
- Um meio de fazer a requisição assíncrona ***(Fetch API)***;

## Adicionando dados

- Para adicionar um item vamos precisar resgatar os dados do form com o ***useState***;
- Reunir eles em uma ***função após o submit*** e enviar um request de ***POST*** para a nossa API;
- O processo é bem parecido com o de resgate de dados, mas agora estamos ***enviando dados***;

## Carregamento dinâmico de dados

- Se a requisição foi feita com sucesso, podemos ***adicionar o item a lista após o request***;
- Isso torna nossa aplicação mais ***performática***;
- Utilizaremos o ***set do useState*** para isso;

## Custom hook para o fetch

- É normal dividir funções que podem ser reaproveitadas em hooks
- Esta técnica é chamada de ***custom hook***, e vamos criar um para o resgate de dados;
- Os hook geralmente ficam na ***pasta hooks***;
- Devemos utilizar o padrão ***use***Name;
- Basicamente criamos uma função e exportamos ela;





