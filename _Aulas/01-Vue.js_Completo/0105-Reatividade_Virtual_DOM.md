# Reatividade e Virtual DOM

## REATIVIDADE - JS

* Sem vue.js

~~~html
<div>
  <p>Camisas - R$ <span class="preco">49</span></p>
  <button class="adicionar">Adicionar</button>
  <button class="remover">Remover</button>
  <span class="total">0</span>
  <p>Total: <span class="precoTotal"></span></p>
</div>
~~~

~~~javascript
const dados = {
  preco: 49,
  total: 0
};

const adicionar = document.querySelector(".adicionar");
const remover = document.querySelector(".remover");
const preco = document.querySelector(".preco");
const total = document.querySelector(".total");
const precoTotal = document.querySelector(".precoTotal");

preco.innerText = dados.preco;
total.innerText = dados.total;
precoTotal.innerText = dados.total * dados.preco;

function atualizarUI() {
  total.innerText = dados.total;
  precoTotal.innerText = dados.total * dados.preco;
}

function incrementar() {
  dados.total++;
  atualizarUI();
}

function diminuir() {
  dados.total--;
  atualizarUI();
}

adicionar.addEventListener("click", incrementar);
remover.addEventListener("click", diminuir);
~~~

## REATIVIDADE - VUE

* Com Vue.js

~~~html
<div id="app">
  <p>Bermudas - R$ <span>{{preco}}</span></p>
  <button @click="total++">Adicionar</button>
  <button @click="total--">Remover</button>
  <span>{{total}}</span>
  <p>Total: <span>{{total * preco}}</span></p>
</div>

<script>
  const vm = new Vue({
    el: "#app",
    data: {
      preco: 49,
      total: 0,
    }
  });
</script>
~~~

## VIRTUAL DOM

* O virtual dom é um objeto javascript que simula o dom atual. Mudanças são primeiramente feitas nesse objeto e em seguida uma verificação é feita no DOM, para sincronizar o mesmo.

~~~javascript
const vdom = {
  text: "",
  tag: "ul",
  children: [
    {
      text: "Item 1",
      tag: "li"
    },
    {
      text: "Item 2",
      tag: "li"
    }
  ]
};
~~~
