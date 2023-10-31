# O Framework

## O FRAMEWORK

* Framework progressivo com o foco na criação de interfaces. Criado por Evan You.

## PORQUÊ VUE.JS

* Reatividade / Sincronia

* Manter a ui sincronizada com o estado. Estado (state) é um dado em uma variável.

* Conveniência

* Torna mais simples a manipulação do DOM.

* Componentes

* Facilita a divisão da interface em componentes, facilitando a manutenção.

## VUE.JS COMO FRAMEWORK

* Empresas

* Behance, Grammarly, Adobe, 9GAG e mais.

* Leve e Simples

* Com noções de HTML, CSS e JavaScript é possível ler o código.

* Comunidade Ativa

* 100k + estrelas no github, 450k + downloads por semana.

## SINTAXE BÁSICA

~~~html
<div id="app">
  <button @click="total++">Incrementar</button>
  <span>{{total}}</span>
</div>
~~~

~~~javascript
const vm = new Vue({
  el: "#app",
  data: {
    total: 0
  }
});
~~~

## SINTAXE BÁSICA (JS)

~~~html
<div>
  <button>Incrementar</button>
  <span></span>
</div>
~~~

~~~javascript
const button = document.querySelector("button");
const span = document.querySelector("span");
let total = 0;

function incrementar() {
  span.innerText = total++;
}

button.addEventListener("click", incrementar);
~~~
