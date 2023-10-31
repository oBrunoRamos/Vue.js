# Instância

## FUNÇÃO CONSTRUTORA

* São funções responsáveis pela construção de objetos. Assim como classes.

~~~javascript
function VueClone(options) {
  this.options = options;
  this.el = document.querySelector(options.el);
  this.data = options.data;
}

const vm = new VueClone({
  el: "#app",
  data: {
    produto: "Camisa"
  }
});
~~~

## INSTÂNCIA VUE

* Vue é uma função construtora que recebe como argumento um objeto.

~~~javascript
const vm = new Vue();

console.log(vm);
~~~

## PROPRIEDADES DE VUE

* As propriedades do objeto retornado com a função Vue, geralmente começam com $ e _, isso é feito para evitar conflito com propriedades que serão criadas internamento pelos usuários.

~~~javascript
const vm = new Vue({
  el: "#app",
  data: {
    instrumento: "Violão"
  }
});

vm.$data;
// objeto {nome: "Violão"}
vm.$el;
// elemento #app
~~~

## ELEMENTO

* Passe o seletor da tag principal que será utilizada na instância do Vue.js. Geralmente são utilizados ID's, lembrando que para selecionar um ID é necessário o #.

~~~html
<div id="app"></div>
~~~

~~~javascript
const vm = new Vue({
  el: "#app"
});
~~~

## ACESSO INTERNO

* Tudo OKA palavra chave this faz referência ao objeto que é retornado com a função construtora. Então dentro da instância this.$data é igual à vm.$data. Atenção ao contexto de this, o mesmo pode mudar se usado dentro de outras funções.

~~~javascript
const vm = new Vue({
  el: "#app",
  data: {
    nome: "Martelo",
    cor: "Vermelho"
  },
  computed: {
    tituloProduto() {
      return this.ferramenta + " " + this.cor;
    }
  }
});
~~~

## CONTEXTO DE THIS

* Atenção ao contexto de this, o mesmo pode mudar se usado dentro de outras funções.

~~~javascript
const vm = new Vue({
  el: "#app",
  data: {
    nome: "Martelo"
  },
  computed: {
    mostrar() {
      setTimeout(function() {
        console.log(this.nome);
        // undefined
      });
      setTimeout(() => {
        console.log(this.nome);
        // Martelo
      });
      console.log(this.nome);
      // Martelo
    }
  }
});
~~~
