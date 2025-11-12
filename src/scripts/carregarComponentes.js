// essa função roda de forma assincrona, ou seja, de forma separada (Auxilio da IA)
async function carregarComponente(seletor, caminho) {
  const elemento = document.querySelector(seletor); // onde vai ser inserido
  const componente = await fetch(caminho); // (fetch busca um elemento, na internet ou no projeto)
  const html = await componente.text(); // transforma em texto
  elemento.innerHTML = html; // insere no DOM
}