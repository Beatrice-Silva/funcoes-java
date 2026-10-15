const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")


  const desconto1 = ( desconto, preco, percentual) => {
    return desconto = preco * percentual / 100
  }

  const precoFinal = (precoFinal, preco, desconto) =>{
    return precoFinal = preco - desconto
  }

    botao.onclick = () => {
  const preco = Number(document.querySelector("#preco").value)
  const percentual = Number(document.querySelector("#percentual").value)

        const desconto = des(desconto, preco, percentual)

        const precoFinal = precoF(precoFinal, preco, desconto)
  
        saida.textContent = "Desconto: R$ " + desconto.toFixed(2) + "\n" +
                      "Preço final: R$ " + precoFinal.toFixed(2)
    }
