let dados = [
    {
        título: "Agustín Rossi",
        descrição: "Agustín Rossi é um goleiro experiente nascido em Buenos Aires. Ele se destaca por sua agilidade e ótimas defesas, sendo uma peça fundamental no time.",
        nascimento: "Nascimento: 21/08/1995",
        idade: "Idade: 29",
        cidade: "Cidade: Buenos Aires",
        posição: "Posição: Goleiro",
        camisa: "Camisa: 1"
    },
    {
        título: "Matheus Cunha",
        descrição: "Matheus Cunha é um jovem goleiro carioca, conhecido por sua velocidade de reação e potencial para crescer como um dos principais goleiros do Brasil.",
        nascimento: "Nascimento: 27/05/2000",
        idade: "Idade: 24",
        cidade: "Cidade: Rio de Janeiro",
        posição: "Posição: Goleiro",
        camisa: "Camisa: 30"
    },
    {
        título: "Léo Pereira",
        descrição: "Léo Pereira é um zagueiro firme, nascido em São Paulo, com uma boa leitura de jogo e capacidade de marcação imponente.",
        nascimento: "Nascimento: 05/05/1996",
        idade: "Idade: 28",
        cidade: "Cidade: São Paulo",
        posição: "Posição: Zagueiro",
        camisa: "Camisa: 4"
    },
    {
        título: "Fabrício Bruno",
        descrição: "Fabrício Bruno é um zagueiro forte fisicamente, natural de Brasília, com destaque para sua capacidade aérea em lances de bola parada.",
        nascimento: "Nascimento: 04/11/1996",
        idade: "Idade: 27",
        cidade: "Cidade: Brasília",
        posição: "Posição: Zagueiro",
        camisa: "Camisa: 15"
    },
    {
        título: "Léo Ortiz",
        descrição: "Léo Ortiz é um defensor sólido, nascido em São Paulo, conhecido por sua habilidade tática e liderança dentro de campo.",
        nascimento: "Nascimento: 12/01/1997",
        idade: "Idade: 27",
        cidade: "Cidade: São Paulo",
        posição: "Posição: Zagueiro",
        camisa: "Camisa: 3"
    },
    {
        título: "David Luiz",
        descrição: "David Luiz é um veterano zagueiro brasileiro, famoso por sua visão de jogo, liderança e sua habilidade com a bola nos pés.",
        nascimento: "Nascimento: 22/04/1987",
        idade: "Idade: 37",
        cidade: "Cidade: Diadema",
        posição: "Posição: Zagueiro",
        camisa: "Camisa: 23"
    },
    {
        título: "Varela",
        descrição: "Varela é um lateral-direito rápido e incisivo, nascido em Montevidéu, Uruguai, com habilidade para contribuir tanto defensivamente quanto no ataque.",
        nascimento: "Nascimento: 15/07/1998",
        idade: "Idade: 26",
        cidade: "Cidade: Montevidéu",
        posição: "Posição: Lateral-direito",
        camisa: "Camisa: 2"
    },
    {
        título: "Viña",
        descrição: "Viña, lateral-esquerdo nascido em Montevidéu, se destaca pela sua habilidade em apoiar o ataque e pela solidez defensiva.",
        nascimento: "Nascimento: 06/11/1997",
        idade: "Idade: 27",
        cidade: "Cidade: Montevidéu",
        posição: "Posição: Lateral-esquerdo",
        camisa: "Camisa: 22"
    },
    {
        título: "Ayrton Lucas",
        descrição: "Ayrton Lucas é um lateral-esquerdo dinâmico, nascido no Rio de Janeiro, conhecido por sua velocidade e dribles precisos.",
        nascimento: "Nascimento: 10/05/1998",
        idade: "Idade: 26",
        cidade: "Cidade: Rio de Janeiro",
        posição: "Posição: Lateral-esquerdo",
        camisa: "Camisa: 16"
    },
    {
        título: "Wesley",
        descrição: "Wesley, lateral-direito nascido em Salvador, é conhecido por sua explosão física e habilidade de cruzamento.",
        nascimento: "Nascimento: 13/03/2001",
        idade: "Idade: 23",
        cidade: "Cidade: Salvador",
        posição: "Posição: Lateral-direito",
        camisa: "Camisa: 13"
    },
    {
        título: "Gerson",
        descrição: "Gerson, meio-campista talentoso de Belo Horizonte, é conhecido por sua versatilidade, visão de jogo e habilidade para romper linhas adversárias.",
        nascimento: "Nascimento: 20/05/1997",
        idade: "Idade: 27",
        cidade: "Cidade: Belo Horizonte",
        posição: "Posição: Meio-campista",
        camisa: "Camisa: 8"
    },
    {
        título: "Giorgian de Arrascaeta",
        descrição: "Arrascaeta, nascido em Nuevo Berlín, é um dos principais meio-campistas ofensivos da América do Sul, com visão de jogo e criatividade excepcionais.",
        nascimento: "Nascimento: 01/06/1994",
        idade: "Idade: 30",
        cidade: "Cidade: Nuevo Berlín",
        posição: "Posição: Meio-campista",
        camisa: "Camisa: 14"
    },
    {
        título: "Allan",
        descrição: "Allan é um volante ágil e eficiente, nascido no Rio de Janeiro, com grande capacidade de marcar e distribuir passes no meio-campo.",
        nascimento: "Nascimento: 01/01/1996",
        idade: "Idade: 28",
        cidade: "Cidade: Rio de Janeiro",
        posição: "Posição: Volante",
        camisa: "Camisa: 5"
    },
    {
        título: "Erick Pulgar",
        descrição: "Erick Pulgar é um volante chileno de Santiago, conhecido por sua capacidade de roubar bolas e organizar a defesa.",
        nascimento: "Nascimento: 15/01/1994",
        idade: "Idade: 30",
        cidade: "Cidade: Santiago",
        posição: "Posição: Volante",
        camisa: "Camisa: 25"
    },
    {
        título: "Matheus Gonçalves",
        descrição: "Matheus Gonçalves, jovem meia carioca, destaca-se pela sua habilidade em romper defesas e criar jogadas perigosas.",
        nascimento: "Nascimento: 15/04/2004",
        idade: "Idade: 20",
        cidade: "Cidade: Rio de Janeiro",
        posição: "Posição: Meio-campista",
        camisa: "Camisa: 20"
    },
    {
        título: "Pedro",
        descrição: "Pedro é um centroavante habilidoso, nascido no Rio de Janeiro, com faro de gol e excelente finalização.",
        nascimento: "Nascimento: 20/02/1997",
        idade: "Idade: 27",
        cidade: "Cidade: Rio de Janeiro",
        posição: "Posição: Atacante",
        camisa: "Camisa: 9"
    },
    {
        título: "Bruno Henrique",
        descrição: "Bruno Henrique, nascido em Belo Horizonte, é um atacante veloz e versátil, capaz de jogar tanto pelos lados quanto centralizado.",
        nascimento: "Nascimento: 30/12/1990",
        idade: "Idade: 33",
        cidade: "Cidade: Belo Horizonte",
        posição: "Posição: Atacante",
        camisa: "Camisa: 27"
    },
    {
        título: "Gabriel Barbosa",
        descrição: "Gabigol é um dos atacantes mais prolíficos do Brasil, nascido em São Bernardo do Campo, famoso por seu faro de gol e personalidade marcante.",
        nascimento: "Nascimento: 30/10/1996",
        idade: "Idade: 28",
        cidade: "Cidade: São Bernardo do Campo",
        posição: "Posição: Atacante",
        camisa: "Camisa: 99"
    },
    {
        título: "Everton Cebolinha",
        descrição: "Everton Cebolinha é um atacante habilidoso, conhecido por sua velocidade e dribles precisos. Nascido em Aracaju, é uma das principais opções ofensivas do Flamengo.",
        nascimento: "Nascimento: 25/04/1996",
        idade: "Idade: 28",
        cidade: "Cidade: Aracaju",
        posição: "Posição: Atacante",
        camisa: "Camisa: 7"
    },
    {
        título: "Michael",
        descrição: "Michael é um atacante ágil, natural de Goiânia, conhecido por sua habilidade de drible e imprevisibilidade em campo.",
        nascimento: "Nascimento: 19/03/1996",
        idade: "Idade: 28",
        cidade: "Cidade: Goiânia",
        posição: "Posição: Atacante",
        camisa: "Camisa: 30"
    },
    {
        título: "Carlinhos",
        descrição: "Carlinhos é um jovem atacante promissor, nascido em São Paulo, com destaque para sua velocidade e finalização.",
        nascimento: "Nascimento: 29/09/1997",
        idade: "Idade: 27",
        cidade: "Cidade: São Paulo",
        posição: "Posição: Atacante",
        camisa: "Camisa: 22"
    },
    {
        título: "Luiz Araújo",
        descrição: "Luiz Araújo é um atacante versátil, nascido em São Paulo, com uma boa visão de jogo e capacidade de finalizar de diversas formas.",
        nascimento: "Nascimento: 13/12/1996",
        idade: "Idade: 27",
        cidade: "Cidade: São Paulo",
        posição: "Posição: Atacante",
        camisa: "Camisa: 11"
    },
    {
        título: "Carlos Alcaraz",
        descrição: "Carlos Alcaraz é um meio-campista talentoso, nascido em Montevidéu, com habilidade de passe e boa leitura de jogo.",
        nascimento: "Nascimento: 04/05/2002",
        idade: "Idade: 22",
        cidade: "Cidade: Montevidéu",
        posição: "Posição: Meia",
        camisa: "Camisa: 37"
    },
    {
        título: "De La Cruz",
        descrição: "De La Cruz é um meio-campista criativo, nascido em Montevidéu, conhecido por sua capacidade de organizar o jogo e criar oportunidades.",
        nascimento: "Nascimento: 07/06/1997",
        idade: "Idade: 27",
        cidade: "Cidade: Montevidéu",
        posição: "Posição: Meia",
        camisa: "Camisa: 18"
    },
    {
        título: "Lorran",
        descrição: "Lorran é um jovem meia promissor, nascido no Rio de Janeiro, com habilidade técnica e capacidade de conduzir o jogo no meio-campo.",
        nascimento: "Nascimento: 09/09/2004",
        idade: "Idade: 20",
        cidade: "Cidade: Rio de Janeiro",
        posição: "Posição: Meia",
        camisa: "Camisa: 19"
    },
    {
        título: "Alex Sandro",
        descrição: "Alex Sandro é um lateral-esquerdo experiente, conhecido por sua força defensiva e apoio ao ataque. Nascido em Catanduva, ele tem passagens por grandes clubes da Europa.",
        nascimento: "Nascimento: 26/01/1991",
        idade: "Idade: 33",
        cidade: "Cidade: Catanduva",
        posição: "Posição: Lateral-esquerdo",
        camisa: "Camisa: 26"
    },
    {
        título: "Gonzalo Plata",
        descrição: "Gonzalo Plata é um jovem atacante equatoriano, nascido em Guayaquil, conhecido por sua velocidade e dribles desconcertantes.",
        nascimento: "Nascimento: 01/11/2000",
        idade: "Idade: 23",
        cidade: "Cidade: Guayaquil",
        posição: "Posição: Atacante",
        camisa: "Camisa: 45 "
    },
    {
        título: "Evertton Araújo",
        descrição: "Evertton Araújo é um volante promissor, natural de Volta Redonda, com boa leitura de jogo e capacidade de desarme.",
        nascimento: "Nascimento: 28/02/2003",
        idade: "Idade: 21",
        cidade: "Cidade: Porto Alegre",
        posição: "Posição: Meia",
        camisa: "Camisa: 52"
    }
];
