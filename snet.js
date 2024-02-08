async function procurarPersonagem() {
    const nomePersonagem = document.getElementById("personagem").value;
    const infoPersonagem = document.getElementById("personageminfo");

    try {
        const resposta = await fetch(`https://swapi.dev/api/people/?search=${nomePersonagem}`);
        const data = await resposta.json();

        if (data.results.length > 0) {
            const character = data.results[0];
            const characterInfo = `
                <h2>${character.name}</h2>
                <img src="https://starwars-visualguide.com/assets/img/characters/${getCharacterId(character.url)}.jpg">
                 <p>Peso: ${character.mass}</p>
               <p>Altura: ${character.height}</p>
                <p>Cor do Cabelo: ${character.hair_color}</p>
                <p>Gênero: ${character.gender}</p>
    
            `;
            infoPersonagem.innerHTML = characterInfo;
        } else {
            infoPersonagem.innerHTML = "<p>Personagem não encontrado.</p>";
        }
    } catch (error) {
        console.error("Erro ao buscar personagem:", error);
        infoPersonagem.innerHTML = "<p>Ocorreu um erro ao buscar as informações do personagem.</p>";
    }
}

function getCharacterId(url) {
    const parts = url.split("/");
    return parts[parts.length - 2];
}



