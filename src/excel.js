let itensGuardados = JSON.parse(localStorage.getItem('pessoas')) || [];

const exibirTab = (vetor) => {
  return vetor.map((valor) => {
    return (
      `<tr style='text-align: center'>
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

function exportTableToExcel(tableID, filename = ''){
  let conteudo = document.getElementById('conteudo').outerHTML;
  document.write("<h1 style='text-align: center'>Relatório de cadastros</h1>", `<div style='display: flex; flex-direction: row; justify-content: center; align-items: center'>${conteudo}</div>`);

  var downloadLink;
  var dataType = 'application/vnd.ms-excel';
  var tableSelect = document.getElementById(tableID);
  var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
  
  // Specify file name
  filename = filename?filename+'.xls':'excel_data.xls';
  
  // Create download link element
  downloadLink = document.createElement("a");
  
  document.body.appendChild(downloadLink);
  
  if(navigator.msSaveOrOpenBlob){
      var blob = new Blob(['\ufeff', tableHTML], {
          type: dataType
      });
      navigator.msSaveOrOpenBlob( blob, filename);
  }else{
      // Create a link to the file
      downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
  
      // Setting the file name
      downloadLink.download = filename;
      
      //triggering the function
      downloadLink.click();
  }
}