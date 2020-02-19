let itensGuardados = JSON.parse(localStorage.getItem('pessoas')) || [];
let inputFiltrar = document.getElementById('inputFiltrar');
let conteudoFiltrado = [];
ajax = new XMLHttpRequest();

const exibirTab = (vetor) => {
  return vetor.map((valor, index) => {
    return (
      `<tr>
        <td>${valor.name}</td> 
        <td>${valor.telephone}</td> 
        <td>${valor.session}</td> 
        <td>${valor.zone}</td>
        <td><button onclick='eliminharLinha(${index})' class='botaoTab'>Excluir</button></td>
      </tr>`
    )}
  ) 
}

const conteudo = document.querySelector('[data-table]');
conteudo.innerHTML = exibirTab(itensGuardados).join('');

const passarFiltro = () => {
  if(conteudoFiltrado.length > 0) {
    return localStorage.setItem('conteudoImprimir', JSON.stringify(conteudoFiltrado))
  }
  else {
    return localStorage.setItem('conteudoImprimir', JSON.stringify(itensGuardados))
  }
}

const abrirImprimir = () => {
  passarFiltro()
  window.open('imprimir.html', 'Relatório de cadastros', 'width=1000,height=750');
}

const abrirExcel = () => {
  passarFiltro()
  window.open('excel.html', 'Relatório de cadastros', 'width=900,height=750');
}

const fecharConteudo = () => {
  window.close();
}

const filtrar = () => {
  conteudoFiltrado = itensGuardados.filter((value) => {
    return value.name.includes(inputFiltrar.value.toUpperCase()) || value.telephone.includes(inputFiltrar.value) || value.session.includes(inputFiltrar.value.toUpperCase()) || value.zone.includes(inputFiltrar.value.toUpperCase())
  })

  if(conteudoFiltrado.length > 0) {
  }

  ajax.open('GET', 'consulta.html', true);
  ajax.send();
  
  ajax.onreadystatechange = function() {
    if(ajax.readyState == 4 && ajax.status == 200) {
      conteudo.innerHTML = exibirTab(conteudoFiltrado).join('');
    }
  }
}

const eliminharLinha = (indexRemover) => {
  let confirma = confirm('Confirmar exclusão do item selecionado?');

  if(confirma) {
    let itensMantidos = [];
    itensMantidos = itensGuardados.filter((value, index) => ( index !== indexRemover ));
    localStorage.setItem('pessoas', JSON.stringify(itensMantidos));
    location.reload();
  }
}

const atualizarPag = () => {
  location.reload();
}