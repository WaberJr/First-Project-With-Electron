let itensGuardados = JSON.parse(localStorage.getItem('conteudoImprimir')) || [];

const exibirTab = (vetor) => {
  return vetor.map((valor) => {
    return (
      `<tr>
        <td>${valor.name}</td> 
        <td>${valor.telephone}</td> 
        <td>${valor.session}</td> 
        <td>${valor.zone}</td>
      </tr>`
    )}
  ) 
}

const conteudo = document.querySelector('[data-table]');
conteudo.innerHTML = exibirTab(itensGuardados).join('');

const printar = () => {
  let conteudo = document.getElementById('conteudo').outerHTML;
  document.write("<h1 style='text-align: center'>Relatório de cadastros</h1>", `<div style='display: flex; flex-direction: row; justify-content: center; text-align: center; align-items: center'>${conteudo}</div>`);
  print();
}