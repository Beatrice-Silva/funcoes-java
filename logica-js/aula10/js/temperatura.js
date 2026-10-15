// Exercício 3.2 (Temperatura): F = C x 9 / 5 + 32
const botao = document.querySelector("#converter")
const saida = document.querySelector("#resultado")


const celsiusParaFahrenheit = (celsius) => {
    return cel * 9 / 5 + 32
}
 

botao.onclick = () => {
  const cel = Number(document.querySelector("#celsius").value)

  constfah = celsiusParaFahrenheit(cel)

  saida.textContent = fah  + " °C = " + fahrenheit.toFixed(1) + " °F"
}
