var pontuacao = sessionStorage.getItem('pontuacao') ? parseInt(sessionStorage.getItem('pontuacao')) : 0;

function redirecionar() {   
    window.location.href = 'psgQuest1.html';
}

function zerar(){
    pontuacao = 0

    sessionStorage.setItem('pontuacao', pontuacao);
    console.log('Pontuacao:' + pontuacao);
}

function resposta1(respostaSelecionada1) {
    var respostaCorreta = "Hermione Granger";

    if (respostaSelecionada1 == respostaCorreta) {
        pontuacao++;
    }
    
    sessionStorage.setItem('pontuacao', pontuacao);
    console.log('Pontuação: ' + pontuacao);

    setTimeout(function() {
        console.log("Redirecionando para a próxima página...");
        window.location.href = 'psgQuest2.html';
    }, 750);
}

function resposta2(respostaSelecionada2) {
    var respostaCorreta = "Luna Lovegood";

    if (respostaSelecionada2 == respostaCorreta) {
        pontuacao++;
    }

    sessionStorage.setItem('pontuacao', pontuacao);
    console.log('Pontuação: ' + pontuacao);

    setTimeout(function() {
        console.log("Redirecionando para a próxima página...");
        window.location.href = 'psgQuest3.html';
    }, 750);
}

function resposta3(respostaSelecionada3) {
    var respostaCorreta = "Draco Malfoy";

    if (respostaSelecionada3 == respostaCorreta) {
        pontuacao++;
    }

    sessionStorage.setItem('pontuacao', pontuacao);
    console.log('Pontuacao:' + pontuacao);

    setTimeout(function() {
        console.log("Redirecionando para a próxima página...");
        window.location.href = 'psgQuest4.html';
    }, 750);
}


function resposta4(respostaSelecionada4) {
    var respostaCorreta = "Severus Snape";

    if (respostaSelecionada4 == respostaCorreta) {
        pontuacao++;
    }

    sessionStorage.setItem('pontuacao', pontuacao);
    console.log('Pontuacao:' + pontuacao);

    setTimeout(function() {
        console.log("Redirecionando para a próxima página...");
        window.location.href = 'psgQuest5.html';
    }, 750);
}


function resposta5(respostaSelecionada5) {
    var respostaCorreta = "Tom Riddle";

    if (respostaSelecionada5 == respostaCorreta) {
        pontuacao++;
    }

    sessionStorage.setItem('pontuacao', pontuacao);
    console.log('Pontuacao:' + pontuacao);

    setTimeout(function() {
        console.log("Redirecionando para a próxima página...");
        window.location.href = 'psgQuest6.html';
    }, 750);
}

function resposta6(respostaSelecionada6) {
    var respostaCorreta = "Sirius Black";

    if (respostaSelecionada6 == respostaCorreta) {
        pontuacao++;
    }

    sessionStorage.setItem('pontuacao', pontuacao);
    console.log('Pontuacao:' + pontuacao);

    setTimeout(function() {
        console.log("Redirecionando para a próxima página...");
        window.location.href = 'psgQuest7.html';
    }, 750);
}

function resposta7(respostaSelecionada7) {
    var respostaCorreta = "Ron Weasley";

    if (respostaSelecionada7 == respostaCorreta) {
        pontuacao++;
    }

    sessionStorage.setItem('pontuacao', pontuacao);
    console.log('Pontuacao:' + pontuacao);

    setTimeout(function() {
        console.log("Redirecionando para a próxima página...");
        window.location.href = 'psgQuest8.html';
    }, 750);
}


function resposta8(respostaSelecionada8) {
    var respostaCorreta = "Cedrico Diggory";

    if (respostaSelecionada8 == respostaCorreta) {
        pontuacao++;
    }

    sessionStorage.setItem('pontuacao', pontuacao);
    console.log('Pontuacao:' + pontuacao);

    setTimeout(function() {
        console.log("Redirecionando para a próxima página...");
        window.location.href = 'psgQuest9.html';
    }, 750);
}

function resposta9(respostaSelecionada9) {
    var respostaCorreta = "Minerva McGonagall";

    if (respostaSelecionada9 == respostaCorreta) {
        pontuacao++;
    }

    sessionStorage.setItem('pontuacao', pontuacao);
    console.log('Pontuacao:' + pontuacao);

    setTimeout(function() {
        console.log("Redirecionando para a próxima página...");
        window.location.href = 'psgQuest10.html';
    }, 750);
}



function resposta10(respostaSelecionada10) {
    var respostaCorreta = "Alastor Moody";  

    if (respostaSelecionada10 == respostaCorreta) {
        pontuacao++;
    }

    sessionStorage.setItem('pontuacao', pontuacao);
    console.log('Pontuacao:' + pontuacao);
    

    setTimeout(function() {
        console.log("Redirecionando para a próxima página...");
        window.location.href = 'pontuacao.html';
    }, 750);

}


function registrarPersonagens(){
    sessionStorage.setItem('pontuacao', pontuacao);

    var qtdAcertosVar = pontuacao;
    var fkQuizVar = 1;
    var fkUsuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/registrarPersonagens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          qtdAcertosServer: qtdAcertosVar,
          fkQuizServer: fkQuizVar,
          fkUsuarioServer: fkUsuarioVar
        }),
      }); 

    msg.innerHTML = `Pontuacao ${pontuacao}`;

}

// var respCorreta = {
//     alternativas: ['a', 'b', 'c', 'd'],
//     respCorreta: 'c'
// }
// var alts = ['d']
