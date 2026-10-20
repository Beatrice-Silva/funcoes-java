const botao = document.querySelector('#calcular')
const campoItem = document.querySelector('#campoItem')
const status = document.querySelector('#status')
const resultado = document.querySelector('#resultado')


const NOTAS = [7, 5.5, 9, 4, 8, 6.5]
    
botao.onclick = () => {
    
    let texto = ""
    let soma = 0
    let maior = NOTAS[0];
    
    NOTAS.forEach((nota, i) =>{
        texto += p.NOTAS + "Nota "+ i +" :"+ p + " \n"
        soma += nota;
        texto += "Nota " +(i+1) +";" +nota + " \n"
        maior = nota > maior ? nota : maior
    }) 
    const media = soma / NOTAS.length
    
    texto += "A maior nota: " + maior + " \n"
    texto += "A media e de: " + media  + " \n"
    texto += "A soma das notas é de: " +  soma + " \n"
    mostrar( texto, "ok")


}
   
    
    


