const botao = document.querySelector('#adicionar')
const campoItem = document.querySelector('#campoItem')
const status = document.querySelector('#status')
const resultado = document.querySelector('#resultado')

const itens = []


const rep = itens.find(

    (item) => item.nome.toLowerCase() === busca.toLowerCase()

)

botao.onclick = () => {

    if(campoItem === ""){
        mostrar("Informe um item (obrigatório)")
    }else{

        let texto = ""
        if(rep === campoItem){
            mostrar("Item já adicionado na lista! \n")
            mostrar("Não repita.")
        }else{
            mostrar("Item adicionado com sucesso!")
            itens.push(campoItem.value)
        }

        itens.forEach((item, i) => {
            texto += (i + 1) + ". " + item + "\n"
        })
    
    
        mostrar(texto + "Total: " + itens.length + "itens", "ok")
    
    }

    //resultado.textContent = texto
    //campoItem.value = ""

}

