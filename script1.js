function adicionarLembrete() {
  const texto = document.getElementById('textoLembrete').value;
  const tipo = document.getElementById('tipoLembrete').value;
  const hora = document.getElementById('horaLembrete').value;
  const lista = document.getElementById('listaLembretes');

  if (!texto || !hora) {
    alert("Por favor, preencha o lembrete e a hora!");
    return;
  }

  // Criar item da lista
  const item = document.createElement('li');
  item.textContent = `${texto} - ${tipo} às ${hora}`;

  // Adicionar na lista
  lista.appendChild(item);

  // Limpar campos
  document.getElementById('textoLembrete').value = "";
  document.getElementById('horaLembrete').value = "";
  document.getElementById('tipoLembrete').value = "água";
}
