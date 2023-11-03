const vm = new Vue({
    el: "#app",
    data:{
        produtos:[],
        produto: false,
    },
    created(){
        this.fetchProdutos()
    },
    filters:{
        numeroPreco(valor){
            //return `R$ ${valor},00`
            return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        },
        
    },
    methods:{
        fetchProdutos(){
            fetch("./api/produtos.json")
                .then(r => r.json())
                .then(r => {
                    this.produtos = r
                })
        },
        fetchProdutoUnico(id){
            fetch(`./api/produtos/${id}/dados.json`)
            .then(r => r.json())
                .then(r => {
                    this.produto = r
                })
            },
        
    },
    




})