console.log(dados);

function pesquisar () {
    let section = document.getElementById("resultados-pesquisa")
let resultados = ""

    for (dado of dados) {
         resultados += `
      <div class= "item-resultado">
      <h2>
    ${dado.título}</h2>
    <p>${dado.descrição}</p>
    <p>${dado.posição}</p>
    <p>${dado.nascimento}</p>
    <p>${dado.idade}</p>
    <p>${dado.cidade}</p>
    <p>${dado.camisa}</p>
</div> `
}
section.innerHTML = resultados;
}


