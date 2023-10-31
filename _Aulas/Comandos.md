# Comandos

## Diretivas

### Aula 0106

___

#### V-IF

~~~html
    <div v-if=""></div> 
~~~

* Se o objeto dentro de v-if for true, entrão ele mostrará a div, se não o Vue iá retirar ela, deixando no código essa div como um comentário.

___

#### V-SHOW

~~~html
    <div v-show=""></div>
~~~

* Se o objeto dentro de v-show for true, entrão ele mostrará a div, se não o Vue iá retirar ela, deixando no código essa div como display none no style, po´rm o codigo ainda estará no DOM.

___

#### V-MODEL

~~~html
    <input v-model="color">
~~~

* Dirêtiva específica para formulário, pois sempre que o valor atribuído a ele for alterado pelo usuário, ele irá automaticamente mudar o valor que esta guardado no objeto de origem.

___

#### V-BIND

~~~html


    <!-- Sintaxe padrão -->
    <div id="app">
        <a v-bind:href="href">link</a>
    </div>

    ________________________________________


    <!-- Atalho para o v-bind: -->
    <div id="app">
        <a :href="href"></a>
    </div>

    ________________________________________


    <div idd="app">
        <a :href="comteudo ? href : '' ">link</a>
    </div>   
    
    
~~~

~~~javascript
    new Vue({
        el: "#app",
        data: {
            href: "https://origamid.com"
            conteudo: true,
        }
    })
~~~

* Serve para colocar uma expressão de JavaScript em qualquer atributo html.

* No primeiro e segundo caso acima se usarmos os tamplates com {{href}} fazendo refrência ao objeto, dentro do atributo HTML href, não irá funcionar.

* No terceiro caso, podemos utilizar também operadores ternarios dentro de v-bind:, ali, se conteudo for true, ele disponibilizará o link, caso for flase, não irá liberar.

___
