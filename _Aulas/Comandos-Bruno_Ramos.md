# Comandos

* $set(array onde modificar(this.array) , index, 'novo valor') // Reatividade em uma função para adicioanr algo novo a uma array

## Diretivas

~~~javascript

    const vm =new Vue({
        el: '#app', // Elemento a qual a estancia se refere
        data:{
            // Variáveis vão aqui
        },
        component:{
            // Aqui vai o nome dos componentes importados para ser enviado para o html
        },
        computed:{
            // Aqui vão pequenas funções de logica basica pra não escrevermod dentro de {{ }}
        },
        props:{
            // Aqui vao as variaveis dinamicas
            img:Sting,
            idade:Number,
            maiorIdade:Boolean
        },
        watch:{
            // Fica esperando algum elemento especifico mudar de estado, então ativa uma função nele
        },
        methods:{
            // Aqui vão todas as funções da pagina
        },
        mouted(){
            // mouted ativa as funções da pagina
        }
    })


~~~

### V-IF

~~~html
    <div v-if=""></div> 
~~~

* Se o objeto dentro de v-if for true, entrão ele mostrará a div, se não o Vue iá retirar ela, deixando no código essa div como um comentário.

___

### V-SHOW

~~~html
    <div v-show=""></div>
~~~

* Se o objeto dentro de v-show for true, entrão ele mostrará a div, se não o Vue iá retirar ela, deixando no código essa div como display none no style, po´rm o codigo ainda estará no DOM.

___

### V-MODEL

~~~html
    <input v-model="color">
~~~

* Dirêtiva específica para formulário, pois sempre que o valor atribuído a ele for alterado pelo usuário, ele irá automaticamente mudar o valor que esta guardado no objeto de origem.

___

### V-BIND

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

### V-ON

~~~javascript
v-on:click == @click // @ é o atalho de v-on

// modificadores

@click.prevent // Adiciona o prevent default ao click
@click.once // Só ativa uma vez o evento
@click.prevent.once // Encadeamento de modificadores

@keyup.f // Só funciona com a letra f
@keyup.enter // Só funxiona com o enter



~~~

* Eventos

~~~javascript

@click // Ao clicar
@keyup // Evento de tecla
@mousemove // Evento de mouse

~~~

### V-HTML E V-TEXT V-ONCE

~~~javascript

    // V-HTML = Interpreta o parametro com tags html 
        <div id="app">
            <div v-html="link"> 
                // com o parametro adicionado, ele remove tudo de dentro do elemento, para adicionar o parametro sozinho.
            </div>
            <div>{{link}}</div>
        </div>
        const vm = new Vue({
            el: "#app",
            data: {
                link: "<a href='https://www.origamid.com'>Origamid</a>"
            }
        });

    // V-TEXT = 
        <div id="app">
            <div v-text="fruta"></div>
            <div>{{fruta}}</div>
        </div>
        const vm = new Vue({
            el: "#app",
            data: {
                fruta: "Banana"
            }
        });


    // v-once = renderiza o elemento somente uma vez e NÂO o torna reativo

    <div id="app">
        <p v-once>Valor inicial: R$ {{total}}</p>
        <button @click="gasto += 5">Comprar Banana R$ 5</button>
        <p>Gasto: R$ {{gasto}}</p>
        <p>Saldo: R$ {{total - gasto}}</p>
    </div>
    const vm = new Vue({
        el: "#app",
        data: {
            total: 150,
            gasto: 0
        }
    });

~~~
