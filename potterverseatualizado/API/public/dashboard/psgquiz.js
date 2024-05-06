var pontuacao = 0;

function redirecionar() {
    window.location.href = 'psgQuest1.html';
}

function zerar(){
    pontuacao = 0
}

function resposta1(respostaSelecionada1) {
    var respostaCorreta = "Hermione Granger";

    if (respostaSelecionada1 == respostaCorreta) {
        pontuacao++;
    }

    // Redireciona para a próxima página
    window.location.href = 'psgQuest2.html';
}

function resposta2(respostaSelecionada2) {
    var respostaCorreta = "Luna Lovegood";

    if (respostaSelecionada2 == respostaCorreta) {
        pontuacao++;
    }

    // Redireciona para a próxima página
    window.location.href = 'psgQuest3.html';
}

function resposta3(respostaSelecionada3) {
    var respostaCorreta = "Draco Malfoy";

    if (respostaSelecionada3 == respostaCorreta) {
        pontuacao++;
    }

    // Redireciona para a próxima página
    window.location.href = 'psgQuest4.html';
}

function resposta4(respostaSelecionada4) {
    var respostaCorreta = "Severus Snape";

    if (respostaSelecionada4 == respostaCorreta) {
        pontuacao++;
    }

    // Redireciona para a próxima página
    window.location.href = 'psgQuest5.html';
}

function resposta5(respostaSelecionada5) {
    var respostaCorreta = "Tom Riddle";

    if (respostaSelecionada5 == respostaCorreta) {
        pontuacao++;
    }

    // Redireciona para a próxima página
    window.location.href = 'psgQuest6.html';
}

function resposta6(respostaSelecionada6) {
    var respostaCorreta = "Sirius Black";

    if (respostaSelecionada6 == respostaCorreta) {
        pontuacao++;
    }

    // Redireciona para a próxima página
    window.location.href = 'psgQuest7.html';
}

function resposta7(respostaSelecionada7) {
    var respostaCorreta = "Ron Weasley";

    if (respostaSelecionada7 == respostaCorreta) {
        pontuacao++;
    }

    // Redireciona para a próxima página
    window.location.href = 'psgQuest8.html';
}

function resposta8(respostaSelecionada8) {
    var respostaCorreta = "Cedrico Diggory";

    if (respostaSelecionada8 == respostaCorreta) {
        pontuacao++;
    }

    // Redireciona para a próxima página
    window.location.href = 'psgQuest9.html';
}

function resposta9(respostaSelecionada9) {
    var respostaCorreta = "Minerva McGonagall";

    if (respostaSelecionada9 == respostaCorreta) {
        pontuacao++;
    }

    // Redireciona para a próxima página
    window.location.href = 'psgQuest10.html';
}



function resposta10(respostaSelecionada10) {
    var respostaCorreta = "Alastor Moody";

    if (respostaSelecionada10 == respostaCorreta) {
        pontuacao++;
    }

    // Redireciona para a próxima página
    window.location.href = 'sla.html';
}

function sla(){
    msg.innerHTML = `Pontuacao ${pontuacao}`;
}

