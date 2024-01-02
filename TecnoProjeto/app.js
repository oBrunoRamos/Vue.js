const vm = new Vue({
      el: "#app",
      data:{
            produtos: [],
            produto: false,
            carrinho:[],
            mensagemAlerta: "Item adicionado",
            alertaAtivo:false
      },
      computed:{
            carrinhoTotal(){
                  let total = 0;
                  if(this.carrinho.length){
                        this.carrinho.forEach(item =>{
                              total += item.preco
                        })
                  }
                  return total;
            }
      },
      methods:{
            fetchProdutos(){
                  fetch('./api/produtos.json')
                  .then(r =>r.json())
                  .then(r =>{
                        this.produtos = r
                  })
            },
            fetchProdutoUnico(id){
                  fetch(`./api/produtos/${id}/dados.json`)
                  .then(r =>r.json())
                  .then(r =>{
                        this.produto = r
                  })
            },
            fecharModal({target, currentTarget}){
                  if(target === currentTarget) this.produto=false
            },
            abrirModal(id){
                  this.fetchProdutoUnico(id);
                  window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                  })
            },
            adicionarItem(){
                  this.produto.estoque--;
                  const {id, nome, preco} = this.produto
                  this.carrinho.push({id, nome, preco})
                  this.alerta(`${nome} foi adicionado ao carrinho`)
            },
            removerItem(index){
                  this.alerta(`${this.carrinho[index].nome} foi removido do carrinho`)
                  this.carrinho.splice(index, 1)
            },
            checarLocalSotrage(){
                  if(window.localStorage.carrinho){
                        this.carrinho = JSON.parse(window.localStorage.carrinho)
                  }
            },
            alerta(mensagem){
                  this.mensagemAlerta = mensagem;
                  this.alertaAtivo = true;
                  setTimeout(() => {
                        this.alertaAtivo = false
                  }, 1500);
            }
      },
      filters:{
          numeroPreco(valor){
            return valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
          }  
      },
      watch:{
            carrinho(){
window.localStorage.carrinho = JSON.stringify(this.carrinho)
            }
      },
      created(){
            this.fetchProdutos()
            this.checarLocalSotrage()
      }
      
})