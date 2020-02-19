let res = document.getElementById('res');

const consultar = () => {
  window.open('consulta.html', 'Consulta', 'width=900,height=750');
}

function cadastrar() {
  let nome = document.getElementById('nome').value;
  let telefone = document.getElementById('telefone').value;
  let sessao = document.getElementById('sessao').value;
  let zona = document.getElementById('zona').value; 
  console.log((nome.trim()).length)
  if (nome.trim().length === 0 || telefone.trim().length === 0 || sessao.trim().length === 0 || zona.trim().length === 0) {
    res.innerHTML = "<h3 class='erro'>Preencher todos os campos!</h3>";
  } 
  else{
    if (telefone.length >= 14) {
      let pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];
      
      let pessoa = {
        name: nome.toUpperCase(),
        telephone: telefone,
        session: sessao.toUpperCase(),
        zone: zona.toUpperCase()
      };
      
      pessoas.push(pessoa);
      localStorage.setItem('pessoas', JSON.stringify(pessoas));
      res.innerHTML = "<h3 class='sucesso'>Dados gravados com sucesso!</h3>";
      
      document.getElementById('nome').focus();
      document.getElementById('nome').value = '';
      document.getElementById('telefone').value = '';
      document.getElementById('sessao').value = '';
      document.getElementById('zona').value = '';
    }
    else {
      res.innerHTML = "<h3 class='erro'>Número de telefone inválido</h3>";
    }
  }
}

// Fazendo a máscara para o campo telefone no index.html
function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}

function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}

function mtel(v){
  v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

function id( el ){
  return document.getElementById( el );
}

window.onload = function(){
  id('telefone').onkeyup = function(){
    mascara( this, mtel );
  }
}