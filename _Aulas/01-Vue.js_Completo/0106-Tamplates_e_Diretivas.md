# Template e Diretivas

## TEMPLATE

* O Vue.js utiliza uma linguagem de template {{}} para criarmos o link entre o JavaScript e o HTML.

~~~html
<div id="app">
  <h1>{{titulo}}</h1>
  <p>{{conteudo}}</p>
</div>
~~~

~~~javascript
new Vue({
  el: "#app",
  data: {
    titulo: "Vue.js Completo",
    conteudo: "Este é o curso de Vue.js"
  }
});
~~~

## EXPRESSÕES

* Podemos utilizar expressões de JavaScript dentro dos {{}}.

~~~html
<div id="app">
  <p>Área Quadrado: {{lado * lado}}</p>
  <p>Perímetro Quadrado: {{lado * 4}}</p>
  <p>Curso Liberado: {{comprou ? 'Sim' : 'Não'}}</p>
</div>
~~~

~~~javascript
new Vue({
  el: "#app",
  data: {
    lado: 5,
    comprou: true
  }
});
~~~

## DIRETIVAS

* São atributos html especiais do Vue que permitem a interação entre o código JavaScript e o HTML.

~~~html
<div id="app">
  <p>Cliente Vitalício: {{comprou}}</p>
  <div v-if="comprou">
    <input v-model="color" type="color">
    <p v-bind:style="{backgroundColor: color}">Essa é a cor: {{color}}</p>
  </div>
</div>
~~~

~~~javascript
new Vue({
  el: "#app",
  data: {
    color: "#444",
    comprou: true
  }
});
~~~
