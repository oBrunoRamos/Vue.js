# 0101 - O Curso

## CURSO

* Vue.js Completo

* Diretivas, reatividade, componentes, router, vuex, api e mais

* Pré-requisitos

* HTML / CSS / JavaScript*

* Ferramentas

* Visual Studio Code, Node.js e NPM

## RANEK

* [https://ranek.origamid.dev]

## GRADE

* Vue.js Completo

* Instalação do vue.js, reatividade, template e diretivas

* Vue.js Para Iniciantes

* Instância, data, methods, v-bind, v-on, v-if, computed e watch

* Diretivas e Hooks

* Argumentos, modificadores, hooks de ciclo de vida e v-model

## A GRADE

* Techno Projeto

* Primeiro projeto utilizando os conceitos iniciais

* Componentes

* Básico, props, events, vue cli, slots e async

* Animações

* Transitions, components e list

## B GRADE

* Vue Router

* Router, dynamic, navigation guards, fetch e mais

* Vuex

* State, mutations, actions, getters e modules

* Projeto Final

* Ranek, Rest Api, Axios, JWT e mais

## VOCÊ ENTENDE?

~~~javascript
const stock = document.querySelector('.stock');

const getStock = (symbol) => {
  return fetch(`https://api.origamid.dev/stock/${symbol}/quote`)
    .then((response) => response.json())
    .then((data) => {
      stock.innerHTML = data.marketCap;
    });
};

getStock('aapl');
~~~

## DÚVIDAS FREQUENTES

* Completo ?

* Foco no entendimento completo do Vue.js e principais padrões de uso.

* Vai direto ao ponto?

* Não. O objeto do curso não é ir direto ao ponto, e sim fazer você entender o ponto. Eu rodo o ponto, volto no ponto e demonstro o ponto.

## PROFESSOR

* André Rafael

* Administrador e Designer

* Mestrando em User Experience Design

* Fundador da Origamid
