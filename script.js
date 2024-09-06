function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let resultados = "";


    // Verificar se há correspondência entre o campo de pesquisa e os dados (nome ou posição)
    for (let dado of dados) {
        if (
            dado.título.toLowerCase().includes(campoPesquisa) ||
            dado.posição.toLowerCase().includes(campoPesquisa) || dado.descrição.toLowerCase().includes(campoPesquisa) || dado.camisa.toLowerCase().includes(campoPesquisa) || dado.cidade.toLowerCase().includes(campoPesquisa)
        ) {
            resultados += `
            <div class="item-resultado">
                <h2>${dado.título}</h2>
               <img src="${dado.imagem}" alt="${dado.título}" width="150px">
                <p>${dado.descrição}</p>
                <p>${dado.posição}</p>
                <p>${dado.nascimento}</p>
                <p>${dado.idade}</p>
                <p>${dado.cidade}</p>
                <p>${dado.camisa}</p>
            </div>
            `;
        }
    }

    if (resultados) {
        section.innerHTML = resultados;
    } else {
        section.innerHTML = "<p>Nenhum resultado encontrado para sua pesquisa.</p>";
    }
}

