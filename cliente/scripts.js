
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

    alert("Dados salvos com sucesso!!!")

}); 
