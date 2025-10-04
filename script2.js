let intervalo;
let ciclosFeitos = 0;
let totalCiclos = 0;
let tempoRestante = 0;

function iniciar() {
  const exercicio = document.getElementById('exercicio').value;
  const minutos = parseInt(document.getElementById('tempo').value);
  totalCiclos = parseInt(document.getElementById('ciclos').value);
  const statusDiv = document.getElementById('status');
  const cronometroDiv = document.getElementById('cronometro');

  if (!exercicio || !minutos || minutos <= 0) {
    alert("Preencha os campos corretamente!");
    return;
  }

  ciclosFeitos = 0;
  tempoRestante = minutos * 60; // segundos
  clearInterval(intervalo);

  statusDiv.textContent = `Exercício: ${exercicio} | Ciclo 1 de ${totalCiclos}`;
  atualizarCronometro();

  intervalo = setInterval(() => {
    tempoRestante--;

    if (tempoRestante >= 0) {
      atualizarCronometro();
    } else {
      ciclosFeitos++;
      if (ciclosFeitos < totalCiclos) {
        statusDiv.textContent = `Pausa rápida... Próximo ciclo começa já!`;
        clearInterval(intervalo);
        setTimeout(() => {
          tempoRestante = minutos * 60;
          statusDiv.textContent = `Exercício: ${exercicio} | Ciclo ${ciclosFeitos + 1} de ${totalCiclos}`;
          intervalo = setInterval(contagem, 1000);
        }, 3000); // 3 segundos de pausa
      } else {
        clearInterval(intervalo);
        statusDiv.textContent = `✅ Finalizado! Você concluiu todos os ciclos de ${exercicio}.`;
        cronometroDiv.textContent = "";
      }
    }
  }, 1000);

  function contagem() {
    tempoRestante--;
    if (tempoRestante >= 0) {
      atualizarCronometro();
    } else {
      clearInterval(intervalo);
      ciclosFeitos++;
      if (ciclosFeitos < totalCiclos) {
        statusDiv.textContent = `Pausa rápida... Próximo ciclo começa já!`;
        setTimeout(() => {
          tempoRestante = minutos * 60;
          statusDiv.textContent = `Exercício: ${exercicio} | Ciclo ${ciclosFeitos + 1} de ${totalCiclos}`;
          intervalo = setInterval(contagem, 1000);
        }, 3000);
      } else {
        statusDiv.textContent = `✅ Finalizado! Você concluiu todos os ciclos de ${exercicio}.`;
        cronometroDiv.textContent = "";
      }
    }
  }

  function atualizarCronometro() {
    const minutosRest = Math.floor(tempoRestante / 60);
    const segundosRest = tempoRestante % 60;
    cronometroDiv.textContent = `${minutosRest}:${segundosRest < 10 ? "0" : ""}${segundosRest}`;
  }
}
const PAUSA_SEGUNDOS = 20; // pausa de 20 segundos

function iniciar() {
  const exercicio = document.getElementById('exercicio').value;
  const minutos = parseInt(document.getElementById('tempo').value);
  totalCiclos = parseInt(document.getElementById('ciclos').value);
  const statusDiv = document.getElementById('status');
  const cronometroDiv = document.getElementById('cronometro');

  if (!exercicio || !minutos || minutos <= 0) {
    alert("Preencha os campos corretamente!");
    return;
  }

  ciclosFeitos = 0;
  tempoRestante = minutos * 60; // segundos
  clearInterval(intervalo);

  statusDiv.textContent = `Exercício: ${exercicio} | Ciclo 1 de ${totalCiclos}`;
  atualizarCronometro();

  intervalo = setInterval(contagem, 1000);

  function contagem() {
    tempoRestante--;

    if (tempoRestante >= 0) {
      atualizarCronometro();
    } else {
      ciclosFeitos++;
      if (ciclosFeitos < totalCiclos) {
        // Inicia a pausa
        tempoRestante = PAUSA_SEGUNDOS;
        statusDiv.textContent = `⏸ Pausa rápida (${PAUSA_SEGUNDOS}s)... Próximo ciclo em breve`;
        atualizarCronometro();
        clearInterval(intervalo);

        intervalo = setInterval(() => {
          tempoRestante--;
          atualizarCronometro();

          if (tempoRestante <= 0) {
            clearInterval(intervalo);
            // Inicia o próximo ciclo
            tempoRestante = minutos * 60;
            statusDiv.textContent = `Exercício: ${exercicio} | Ciclo ${ciclosFeitos + 1} de ${totalCiclos}`;
            atualizarCronometro();
            intervalo = setInterval(contagem, 1000);
          }
        }, 1000);
      } else {
        clearInterval(intervalo);
        statusDiv.textContent = `✅ Finalizado! Você concluiu todos os ciclos de ${exercicio}.`;
        cronometroDiv.textContent = "";
      }
    }
  }

  function atualizarCronometro() {
    const minutosRest = Math.floor(tempoRestante / 60);
    const segundosRest = tempoRestante % 60;
    cronometroDiv.textContent = `${minutosRest}:${segundosRest < 10 ? "0" : ""}${segundosRest}`;
  }
}
