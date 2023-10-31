# Instalação do Vue.js

## ADICIONAR SCRIPT

### Download da versão de desenvolvimento

* [https://vuejs.org/v2/guide/installation.html]

### Via CDN

* [https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js]

### Adicionar ao código

## INICIAR FUNÇÃO

~~~html
<div id="app">
  {{mensagem}}
</div>

<script>
new Vue({
  el: "#app",
  data: {
    mensagem: "Meu aplicativo"
  }
});
</script>
~~~

### CONSTRUCTOR FUNCTION

* O Vue é uma função construtora que recebe como argumento um objeto com diferentes opções.

~~~html
<div id="app">
  {{mes}}, {{ano}}
</div>

<script>
const vm = new Vue({
  el: "#app",
  data: {
    ano: 2019,
    mes: 'Agosto'
  }
});

console.log(vm, vm.mes);
</script>
~~~
