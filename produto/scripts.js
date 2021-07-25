
function limparCampos(){
    document.getElementById('tipo').value = 'Selecionar';
    document.querySelector('input[name=radio]:checked').value = 'novo';
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
}

formProduto.addEventListener('submit', (e) => {
  e.preventDefault();
  let tipo = document.getElementById('tipo').value;
  let estado = document.querySelector('input[name=radio]:checked').value;
  let marca = document.getElementById('marca').value;
  let modelo = document.getElementById('modelo').value;

  console.log(estado);

  if(tipo !== 'Selecionar' 
    && marca !== '' 
    && marca !== null 
    && modelo !== '' 
    && modelo !== null){
    let data = {
      tipo,
      estado,
      marca,
      modelo
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    alert("Dados salvos com sucesso!!!")
  } else {
    alert("Favor selecionar um tipo.")
  } 

}); 