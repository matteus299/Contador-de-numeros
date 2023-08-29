function verificar () {
    var inicio = document.querySelector('input#txtano')
    var fim = document.querySelector('input#txtana')
    var passo = document.querySelector('input#txtanu')
    var res = document.querySelector('div#res')
     
    if (inicio.value.length === 0 ) { //lenght significa quantas letras tem.
        window.alert('[ERRO] ditige algum numero no "INCIO"')
    } 

    else if(fim.value.length == 0) {
        window.alert('[ERRO] ditige algum numero no "FIM" ')
    }

    else if (passo.value.length == 0) {
        window.alert('[ERRO] ditige algum numero no "PASSO" ')
    } else {
        res.innerHTML = 'Contagem: ';

        var inicioValor = Number(inicio.value);
        var fimValor = Number(fim.value);
        var passoValor = Number(passo.value);
        var emoji = ''; // Variável para armazenar o emoji de linha de chegada
    
        if (passoValor === 0) {
          window.alert('[ERRO] o "PASSO" não pode ser zero');
        } else if (inicioValor < fimValor) {
          // Contagem crescente
          for (var i = inicioValor; i <= fimValor; i += passoValor) {
            if (i === fimValor) {
              emoji = '🏁'; // Atribui o emoji de linha de chegada
            }
            res.innerHTML += i + ' ' + '👉'; // Adiciona o emoji junto com o número
          }
        } else {
          // Contagem decrescente
          for (var i = inicioValor; i >= fimValor; i -= passoValor) {
            if (i === fimValor) {
              emoji = '🏁'; // Atribui o emoji de linha de chegada
            }
            res.innerHTML += i + ' ' + '👉'; // Adiciona o emoji junto com o número
          }
        }
    
        res.innerHTML += emoji; // Adiciona o emoji de linha de chegada no final
      }
    }