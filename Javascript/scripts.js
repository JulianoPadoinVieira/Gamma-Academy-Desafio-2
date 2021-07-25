

function limparCampos(){
    document.getElementById('nomeCompleto').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('senha').value = '';
}

formCliente.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nomeCompleto').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let senha = document.getElementById('senha').value;

    let data = {
      nome,
      email,
      cpf,
      senha
    }
    let convertData = JSON.stringify(data);
  
    localStorage.setItem('lead', convertData);
}); 

formProduto.addEventListener('submit', (e) => {
    e.preventDefault();
    let tipo = document.getElementById('tipo').value;
    let estado = document.getElementById('estado').value;
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;

    let data = {
      tipo,
      estado,
      marca,
      modelo
    }
    let convertData = JSON.stringify(data);
  
    localStorage.setItem('lead', convertData);
});    