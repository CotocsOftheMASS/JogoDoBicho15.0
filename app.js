let listadenumerossorteados = [];
alert ('REGRAS DO JOGO: A maquina sorteará um número aleatório de 1 a 100, você deve chutar números até acertar, após isso, a maquina sorteará um novo número. Boa Sorte!')
let numerolimite = 100;
let numerosecreto = numeroaleatório();
let tentativas = 1;

function textonatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Male',{
      rate: 1.2 })
}
function mensageminicial(){
textonatela('h1', 'Jogo do Bicho');
textonatela('p', 'Escolha um número de 1 a ' + numerolimite);
}
mensageminicial()
document.getElementById('reiniciar').setAttribute('disabled',true)

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numerosecreto) {
        textonatela('h1', 'Acertou!!!! :)');
        let palavratentativas = tentativas > 1 ? ' tentativas' : ' tentativa';
        let mensagemtentativas = 'Você descobriu o numero secreto com ' + tentativas + palavratentativas;
        textonatela('p', mensagemtentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else { 
        chute > numerosecreto ? textonatela('p', 'o numero secreto é menor que '+ chute ) : textonatela('p', 'o numero secreto é maior que ' + chute);
       tentativas++;
       limparcampo()
    }
}

function numeroaleatório(){
  let numeroescolhido = parseInt(Math.random() * numerolimite + 1);
  let quantidadesdenumeroslista = listadenumerossorteados.length;
  if(quantidadesdenumeroslista == numerolimite){
    listadenumerossorteados = [];
  }
   if (listadenumerossorteados.includes(numeroescolhido)){
   return numeroaleatório();
} else {
    listadenumerossorteados.push(numeroescolhido)
    console.log (listadenumerossorteados)
    return numeroescolhido;
}
}

  function limparcampo() {
    chute = document.querySelector ('input');
    chute.value = '';
  }
    function reiniciarjogo() {
        numerosecreto = numeroaleatório();
        limparcampo();
        tentativas = 0;
        verificarChute();
        mensageminicial();
        document.getElementById('reiniciar').setAttribute('disabled',true);
    }




